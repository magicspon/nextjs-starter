import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The `DateTime` scalar type represents a point in time. */
	DateTime: any
	/** The `Number` scalar type represents a number that can be a float, an integer or a null value. */
	Number: any
	/** The `QueryArgument` scalar type represents a value to be using in Craft element queries. It can be an integer, a string, or a boolean value. */
	QueryArgument: any
}

export type AssetCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the assets’ files’ last-modified dates. */
	dateModified: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the assets’ filenames. */
	filename: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the folders the assets belong to, per the folders’ IDs. */
	folderId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ image heights. */
	height: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Broadens the query results to include assets from any of the subfolders of the folder specified by `folderId`. */
	includeSubfolders: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the assets’ file kinds. */
	kind: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ file sizes (in bytes). */
	size: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the user the assets were uploaded by, per the user’s ID. */
	uploader: InputMaybe<Scalars['QueryArgument']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ handles. */
	volume: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the volumes the assets belong to, per the volumes’ IDs. */
	volumeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the assets’ image widths. */
	width: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** A list of transform handles to preload. */
	withTransforms: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type CategoryCriteriaInput = {
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf: InputMaybe<Scalars['Int']>
	/** Whether to only return categories that the user has permission to edit. */
	editable: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the category groups the categories belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the category groups the categories belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars['Int']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore: InputMaybe<Scalars['Int']>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars['Boolean']>
}

export type EntryCriteriaInput = {
	/** Narrows the query results to only entries that were posted on or after a certain date. */
	after: InputMaybe<Scalars['String']>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `ancestorOf`. */
	ancestorDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are ancestors of another element in its structure, provided by its ID. */
	ancestorOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the user group the entries’ authors belong to. */
	authorGroup: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the user group the entries’ authors belong to, per the groups’ IDs. */
	authorGroupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the entries’ authors. */
	authorId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only entries that were posted before a certain date. */
	before: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to only elements that are up to a certain distance away from the element in its structure specified by `descendantOf`. */
	descendantDist: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only elements that are descendants of another element in its structure provided by its ID. */
	descendantOf: InputMaybe<Scalars['Int']>
	/** Whether to only return entries that the user has permission to edit. */
	editable: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the entries’ expiry dates. */
	expiryDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements have any descendants in their structure. */
	hasDescendants: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on whether the elements are “leaves” in their structure (element with no descendants). */
	leaves: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ level within the structure. */
	level: InputMaybe<Scalars['Int']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only the entry that comes immediately after another element in its structure, provided by its ID. */
	nextSiblingOf: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Narrows the query results to only entries that are positioned after another element in its structure, provided by its ID. */
	positionedAfter: InputMaybe<Scalars['Int']>
	/** Narrows the query results to only entries that are positioned before another element in its structure, provided by its ID. */
	positionedBefore: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the entries’ post dates. */
	postDate: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only the entry that comes immediately before another element in its structure, provided by its ID. */
	prevSiblingOf: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	room: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Narrows the query results based on the section handles the entries belong to. */
	section: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the sections the entries belong to, per the sections’ IDs. */
	sectionId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	seo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which structure data should be joined into the query. */
	structureId: InputMaybe<Scalars['Int']>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the entries’ entry type handles. */
	type: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the entries’ entry types, per the types’ IDs. */
	typeId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Explicitly determines whether the query should join in the structure data. */
	withStructure: InputMaybe<Scalars['Boolean']>
}

/** Optional - The SEOmatic environment that should be used */
export enum SeomaticEnvironment {
	/** Live production environment, with indexing enabled */
	Live = 'live',
	/** Local Development environment, with debugging enabled and indexing disabled */
	Local = 'local',
	/** Staging environment, with indexing disabled */
	Staging = 'staging',
}

export enum SeomaticFrontendTemplate {
	/** The ads.txt file */
	Ads = 'ads',
	/** The humans.txt file */
	Humans = 'humans',
	/** The robots.txt file */
	Robots = 'robots',
	/** The security.txt file */
	Security = 'security',
}

export type TagCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the tag groups the tags belong to per the group’s handles. */
	group: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the tag groups the tags belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UserCriteriaInput = {
	/** Narrows the query results based on the elements’ creation dates. */
	dateCreated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ last-updated dates. */
	dateUpdated: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the users’ email addresses. */
	email: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on whether the elements are enabled in the site they’re being queried in, per the `site` argument. */
	enabledForSite: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the users’ first names. */
	firstName: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Causes the query results to be returned in the order specified by the `id` argument. */
	fixedOrder: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the user group the users belong to. */
	group: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the user group the users belong to, per the groups’ IDs. */
	groupId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to only users that have (or don’t have) a user photo. */
	hasPhoto: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ IDs. */
	id: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Causes the query results to be returned in reverse order. */
	inReverse: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the users’ last names. */
	lastName: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Sets the limit for paginated results. */
	limit: InputMaybe<Scalars['Int']>
	/** Sets the offset for paginated results. */
	offset: InputMaybe<Scalars['Int']>
	/** Sets the field the returned elements should be ordered by. */
	orderBy: InputMaybe<Scalars['String']>
	/** Determines which site should be selected when querying multi-site elements. */
	preferSites: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on a reference string. */
	ref: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results to elements that relate to the provided element IDs. This argument is ignored, if `relatedToAll` is also used. */
	relatedTo: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to *all* of the provided element IDs. Using this argument will cause `relatedTo` argument to be ignored. **This argument is deprecated.** `relatedTo: ["and", ...ids]` should be used instead. */
	relatedToAll: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results to elements that relate to an asset list defined with this argument. */
	relatedToAssets: InputMaybe<Array<InputMaybe<AssetCriteriaInput>>>
	/** Narrows the query results to elements that relate to a category list defined with this argument. */
	relatedToCategories: InputMaybe<Array<InputMaybe<CategoryCriteriaInput>>>
	/** Narrows the query results to elements that relate to an entry list defined with this argument. */
	relatedToEntries: InputMaybe<Array<InputMaybe<EntryCriteriaInput>>>
	/** Narrows the query results to elements that relate to a tag list defined with this argument. */
	relatedToTags: InputMaybe<Array<InputMaybe<TagCriteriaInput>>>
	/** Narrows the query results to elements that relate to a use list defined with this argument. */
	relatedToUsers: InputMaybe<Array<InputMaybe<UserCriteriaInput>>>
	/** Narrows the query results to only elements that match a search query. */
	search: InputMaybe<Scalars['String']>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	site: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines which site(s) the elements should be queried in. Defaults to the current (requested) site. */
	siteId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the unique identifier for an element-site relation. */
	siteSettingsId: InputMaybe<Array<InputMaybe<Scalars['QueryArgument']>>>
	/** Narrows the query results based on the elements’ slugs. */
	slug: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ titles. */
	title: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the elements’ UIDs. */
	uid: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Determines whether only elements with unique IDs should be returned by the query. */
	unique: InputMaybe<Scalars['Boolean']>
	/** Narrows the query results based on the elements’ URIs. */
	uri: InputMaybe<Array<InputMaybe<Scalars['String']>>>
	/** Narrows the query results based on the users’ usernames. */
	username: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type EmbedFragment = {
	__typename: 'embed_OembedField'
	title: string
	description: string
	url: string
	type: string
	image: string
	imageWidth: string
	imageHeight: string
	code: string
	width: string
	height: string
	aspectRatio: string
	authorName: string
	authorUrl: string
	providerName: string
	providerUrl: string
}

type Image_People_Asset_Fragment = {
	__typename: 'people_Asset'
	id: string
	width: number
	height: number
	src: string
	alt: string
}

type Image_Site_Asset_Fragment = {
	__typename: 'site_Asset'
	id: string
	width: number
	height: number
	src: string
	alt: string
}

export type ImageFragment =
	| Image_People_Asset_Fragment
	| Image_Site_Asset_Fragment

export type VideoBlockFragment = {
	__typename: 'block_video_BlockType'
	heading: string
	embed: {
		__typename: 'embed_OembedField'
		title: string
		description: string
		url: string
		type: string
		image: string
		imageWidth: string
		imageHeight: string
		code: string
		width: string
		height: string
		aspectRatio: string
		authorName: string
		authorUrl: string
		providerName: string
		providerUrl: string
	}
}

export type TextBlockFragment = {
	__typename: 'block_text_BlockType'
	heading: string
	body: string
}

export type PortraitFragment = {
	__typename: 'boards_portrait_BlockType'
	id: string
	label: string
	poster: Array<
		| {
				__typename: 'people_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
		| {
				__typename: 'site_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
	>
	block: Array<
		| { __typename: 'block_text_BlockType'; heading: string; body: string }
		| {
				__typename: 'block_video_BlockType'
				heading: string
				embed: {
					__typename: 'embed_OembedField'
					title: string
					description: string
					url: string
					type: string
					image: string
					imageWidth: string
					imageHeight: string
					code: string
					width: string
					height: string
					aspectRatio: string
					authorName: string
					authorUrl: string
					providerName: string
					providerUrl: string
				}
		  }
	>
}

export type LandscapeFragment = {
	__typename: 'boards_landscape_BlockType'
	id: string
	label: string
	poster: Array<
		| {
				__typename: 'people_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
		| {
				__typename: 'site_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
	>
	block: Array<
		| { __typename: 'block_text_BlockType'; heading: string; body: string }
		| {
				__typename: 'block_video_BlockType'
				heading: string
				embed: {
					__typename: 'embed_OembedField'
					title: string
					description: string
					url: string
					type: string
					image: string
					imageWidth: string
					imageHeight: string
					code: string
					width: string
					height: string
					aspectRatio: string
					authorName: string
					authorUrl: string
					providerName: string
					providerUrl: string
				}
		  }
	>
}

export type StandingFragment = {
	__typename: 'boards_standing_BlockType'
	id: string
	label: string
	poster: Array<
		| {
				__typename: 'people_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
		| {
				__typename: 'site_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
	>
	block: Array<
		| { __typename: 'block_text_BlockType'; heading: string; body: string }
		| {
				__typename: 'block_video_BlockType'
				heading: string
				embed: {
					__typename: 'embed_OembedField'
					title: string
					description: string
					url: string
					type: string
					image: string
					imageWidth: string
					imageHeight: string
					code: string
					width: string
					height: string
					aspectRatio: string
					authorName: string
					authorUrl: string
					providerName: string
					providerUrl: string
				}
		  }
	>
}

export type TileFragment = {
	__typename: 'boards_tile_BlockType'
	id: string
	label: string
	poster: Array<
		| {
				__typename: 'people_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
		| {
				__typename: 'site_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
	>
	block: Array<
		| { __typename: 'block_text_BlockType'; heading: string; body: string }
		| {
				__typename: 'block_video_BlockType'
				heading: string
				embed: {
					__typename: 'embed_OembedField'
					title: string
					description: string
					url: string
					type: string
					image: string
					imageWidth: string
					imageHeight: string
					code: string
					width: string
					height: string
					aspectRatio: string
					authorName: string
					authorUrl: string
					providerName: string
					providerUrl: string
				}
		  }
	>
}

export type SignFragment = {
	__typename: 'boards_sign_BlockType'
	id: string
	label: string
	poster: Array<
		| {
				__typename: 'people_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
		| {
				__typename: 'site_Asset'
				id: string
				width: number
				height: number
				src: string
				alt: string
		  }
	>
	block: Array<
		| { __typename: 'block_text_BlockType'; heading: string; body: string }
		| {
				__typename: 'block_video_BlockType'
				heading: string
				embed: {
					__typename: 'embed_OembedField'
					title: string
					description: string
					url: string
					type: string
					image: string
					imageWidth: string
					imageHeight: string
					code: string
					width: string
					height: string
					aspectRatio: string
					authorName: string
					authorUrl: string
					providerName: string
					providerUrl: string
				}
		  }
	>
}

export type PeopleFragment = {
	__typename: 'people_person_BlockType'
	id: string
	distance: any
	rotation: any
	facing: any
	person: Array<
		| { __typename: 'people_Asset'; id: string }
		| { __typename: 'site_Asset'; id: string }
	>
}

export type SeoFragment = {
	__typename: 'SeomaticType'
	metaTitleContainer: string
	metaTagContainer: string
	metaSiteVarsContainer: string
	metaLinkContainer: string
	metaJsonLdContainer: string
}

export type ProjectFragment = {
	__typename: 'projects_default_Entry'
	title: string
	slug: string
	room: string
	seo: {
		__typename: 'SeomaticType'
		metaTitleContainer: string
		metaTagContainer: string
		metaSiteVarsContainer: string
		metaLinkContainer: string
		metaJsonLdContainer: string
	}
	boards: Array<
		| {
				__typename: 'boards_landscape_BlockType'
				id: string
				label: string
				poster: Array<
					| {
							__typename: 'people_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
					| {
							__typename: 'site_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
				>
				block: Array<
					| {
							__typename: 'block_text_BlockType'
							heading: string
							body: string
					  }
					| {
							__typename: 'block_video_BlockType'
							heading: string
							embed: {
								__typename: 'embed_OembedField'
								title: string
								description: string
								url: string
								type: string
								image: string
								imageWidth: string
								imageHeight: string
								code: string
								width: string
								height: string
								aspectRatio: string
								authorName: string
								authorUrl: string
								providerName: string
								providerUrl: string
							}
					  }
				>
		  }
		| {
				__typename: 'boards_portrait_BlockType'
				id: string
				label: string
				poster: Array<
					| {
							__typename: 'people_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
					| {
							__typename: 'site_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
				>
				block: Array<
					| {
							__typename: 'block_text_BlockType'
							heading: string
							body: string
					  }
					| {
							__typename: 'block_video_BlockType'
							heading: string
							embed: {
								__typename: 'embed_OembedField'
								title: string
								description: string
								url: string
								type: string
								image: string
								imageWidth: string
								imageHeight: string
								code: string
								width: string
								height: string
								aspectRatio: string
								authorName: string
								authorUrl: string
								providerName: string
								providerUrl: string
							}
					  }
				>
		  }
		| {
				__typename: 'boards_sign_BlockType'
				id: string
				label: string
				poster: Array<
					| {
							__typename: 'people_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
					| {
							__typename: 'site_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
				>
				block: Array<
					| {
							__typename: 'block_text_BlockType'
							heading: string
							body: string
					  }
					| {
							__typename: 'block_video_BlockType'
							heading: string
							embed: {
								__typename: 'embed_OembedField'
								title: string
								description: string
								url: string
								type: string
								image: string
								imageWidth: string
								imageHeight: string
								code: string
								width: string
								height: string
								aspectRatio: string
								authorName: string
								authorUrl: string
								providerName: string
								providerUrl: string
							}
					  }
				>
		  }
		| {
				__typename: 'boards_standing_BlockType'
				id: string
				label: string
				poster: Array<
					| {
							__typename: 'people_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
					| {
							__typename: 'site_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
				>
				block: Array<
					| {
							__typename: 'block_text_BlockType'
							heading: string
							body: string
					  }
					| {
							__typename: 'block_video_BlockType'
							heading: string
							embed: {
								__typename: 'embed_OembedField'
								title: string
								description: string
								url: string
								type: string
								image: string
								imageWidth: string
								imageHeight: string
								code: string
								width: string
								height: string
								aspectRatio: string
								authorName: string
								authorUrl: string
								providerName: string
								providerUrl: string
							}
					  }
				>
		  }
		| {
				__typename: 'boards_tile_BlockType'
				id: string
				label: string
				poster: Array<
					| {
							__typename: 'people_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
					| {
							__typename: 'site_Asset'
							id: string
							width: number
							height: number
							src: string
							alt: string
					  }
				>
				block: Array<
					| {
							__typename: 'block_text_BlockType'
							heading: string
							body: string
					  }
					| {
							__typename: 'block_video_BlockType'
							heading: string
							embed: {
								__typename: 'embed_OembedField'
								title: string
								description: string
								url: string
								type: string
								image: string
								imageWidth: string
								imageHeight: string
								code: string
								width: string
								height: string
								aspectRatio: string
								authorName: string
								authorUrl: string
								providerName: string
								providerUrl: string
							}
					  }
				>
		  }
	>
	people: Array<{
		__typename: 'people_person_BlockType'
		id: string
		distance: any
		rotation: any
		facing: any
		person: Array<
			| { __typename: 'people_Asset'; id: string }
			| { __typename: 'site_Asset'; id: string }
		>
	}>
}

export type PageQueryQueryVariables = Exact<{
	slug: InputMaybe<
		Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>
	>
}>

export type PageQueryQuery = {
	__typename: 'Query'
	entry: {
		__typename: 'projects_default_Entry'
		title: string
		slug: string
		room: string
		seo: {
			__typename: 'SeomaticType'
			metaTitleContainer: string
			metaTagContainer: string
			metaSiteVarsContainer: string
			metaLinkContainer: string
			metaJsonLdContainer: string
		}
		boards: Array<
			| {
					__typename: 'boards_landscape_BlockType'
					id: string
					label: string
					poster: Array<
						| {
								__typename: 'people_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
						| {
								__typename: 'site_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
					>
					block: Array<
						| {
								__typename: 'block_text_BlockType'
								heading: string
								body: string
						  }
						| {
								__typename: 'block_video_BlockType'
								heading: string
								embed: {
									__typename: 'embed_OembedField'
									title: string
									description: string
									url: string
									type: string
									image: string
									imageWidth: string
									imageHeight: string
									code: string
									width: string
									height: string
									aspectRatio: string
									authorName: string
									authorUrl: string
									providerName: string
									providerUrl: string
								}
						  }
					>
			  }
			| {
					__typename: 'boards_portrait_BlockType'
					id: string
					label: string
					poster: Array<
						| {
								__typename: 'people_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
						| {
								__typename: 'site_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
					>
					block: Array<
						| {
								__typename: 'block_text_BlockType'
								heading: string
								body: string
						  }
						| {
								__typename: 'block_video_BlockType'
								heading: string
								embed: {
									__typename: 'embed_OembedField'
									title: string
									description: string
									url: string
									type: string
									image: string
									imageWidth: string
									imageHeight: string
									code: string
									width: string
									height: string
									aspectRatio: string
									authorName: string
									authorUrl: string
									providerName: string
									providerUrl: string
								}
						  }
					>
			  }
			| {
					__typename: 'boards_sign_BlockType'
					id: string
					label: string
					poster: Array<
						| {
								__typename: 'people_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
						| {
								__typename: 'site_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
					>
					block: Array<
						| {
								__typename: 'block_text_BlockType'
								heading: string
								body: string
						  }
						| {
								__typename: 'block_video_BlockType'
								heading: string
								embed: {
									__typename: 'embed_OembedField'
									title: string
									description: string
									url: string
									type: string
									image: string
									imageWidth: string
									imageHeight: string
									code: string
									width: string
									height: string
									aspectRatio: string
									authorName: string
									authorUrl: string
									providerName: string
									providerUrl: string
								}
						  }
					>
			  }
			| {
					__typename: 'boards_standing_BlockType'
					id: string
					label: string
					poster: Array<
						| {
								__typename: 'people_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
						| {
								__typename: 'site_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
					>
					block: Array<
						| {
								__typename: 'block_text_BlockType'
								heading: string
								body: string
						  }
						| {
								__typename: 'block_video_BlockType'
								heading: string
								embed: {
									__typename: 'embed_OembedField'
									title: string
									description: string
									url: string
									type: string
									image: string
									imageWidth: string
									imageHeight: string
									code: string
									width: string
									height: string
									aspectRatio: string
									authorName: string
									authorUrl: string
									providerName: string
									providerUrl: string
								}
						  }
					>
			  }
			| {
					__typename: 'boards_tile_BlockType'
					id: string
					label: string
					poster: Array<
						| {
								__typename: 'people_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
						| {
								__typename: 'site_Asset'
								id: string
								width: number
								height: number
								src: string
								alt: string
						  }
					>
					block: Array<
						| {
								__typename: 'block_text_BlockType'
								heading: string
								body: string
						  }
						| {
								__typename: 'block_video_BlockType'
								heading: string
								embed: {
									__typename: 'embed_OembedField'
									title: string
									description: string
									url: string
									type: string
									image: string
									imageWidth: string
									imageHeight: string
									code: string
									width: string
									height: string
									aspectRatio: string
									authorName: string
									authorUrl: string
									providerName: string
									providerUrl: string
								}
						  }
					>
			  }
		>
		people: Array<{
			__typename: 'people_person_BlockType'
			id: string
			distance: any
			rotation: any
			facing: any
			person: Array<
				| { __typename: 'people_Asset'; id: string }
				| { __typename: 'site_Asset'; id: string }
			>
		}>
	}
}

export type PathQueryQueryVariables = Exact<{ [key: string]: never }>

export type PathQueryQuery = {
	__typename: 'Query'
	entries: Array<{ __typename: 'projects_default_Entry'; slug: string }>
}

export const SeoFragmentDoc = gql`
	fragment SEO on SeomaticType {
		metaTitleContainer
		metaTagContainer
		metaSiteVarsContainer
		metaLinkContainer
		metaJsonLdContainer
	}
`
export const ImageFragmentDoc = gql`
	fragment Image on AssetInterface {
		id
		src: url(width: 500, height: 800)
		width(width: 500)
		height(height: 800)
		alt: title
	}
`
export const EmbedFragmentDoc = gql`
	fragment Embed on embed_OembedField {
		title
		description
		url
		type
		image
		imageWidth
		imageHeight
		code
		width
		height
		aspectRatio
		authorName
		authorUrl
		providerName
		providerUrl
	}
`
export const VideoBlockFragmentDoc = gql`
	fragment VideoBlock on block_video_BlockType {
		__typename
		embed {
			...Embed
		}
		heading
	}
	${EmbedFragmentDoc}
`
export const TextBlockFragmentDoc = gql`
	fragment TextBlock on block_text_BlockType {
		__typename
		heading
		body
	}
`
export const PortraitFragmentDoc = gql`
	fragment Portrait on boards_portrait_BlockType {
		__typename
		id
		poster {
			...Image
		}
		label
		block {
			...VideoBlock
			...TextBlock
		}
	}
	${ImageFragmentDoc}
	${VideoBlockFragmentDoc}
	${TextBlockFragmentDoc}
`
export const LandscapeFragmentDoc = gql`
	fragment Landscape on boards_landscape_BlockType {
		__typename
		id
		poster {
			id
			src: url(width: 800, height: 500)
			width(width: 800)
			height(height: 500)
			alt: title
		}
		label
		block {
			...VideoBlock
			...TextBlock
		}
	}
	${VideoBlockFragmentDoc}
	${TextBlockFragmentDoc}
`
export const StandingFragmentDoc = gql`
	fragment Standing on boards_standing_BlockType {
		__typename
		id
		poster {
			id
			src: url(width: 400, height: 500)
			width(width: 400)
			height(height: 500)
			alt: title
		}
		label
		block {
			...VideoBlock
			...TextBlock
		}
	}
	${VideoBlockFragmentDoc}
	${TextBlockFragmentDoc}
`
export const TileFragmentDoc = gql`
	fragment Tile on boards_tile_BlockType {
		__typename
		id
		poster {
			id
			src: url(width: 500, height: 500)
			width(width: 500)
			height(height: 500)
			alt: title
		}
		label
		block {
			...VideoBlock
			...TextBlock
		}
	}
	${VideoBlockFragmentDoc}
	${TextBlockFragmentDoc}
`
export const SignFragmentDoc = gql`
	fragment Sign on boards_sign_BlockType {
		__typename
		id
		poster {
			id
			src: url(width: 200, height: 500)
			width(width: 200)
			height(height: 500)
			alt: title
		}
		label
		block {
			...VideoBlock
			...TextBlock
		}
	}
	${VideoBlockFragmentDoc}
	${TextBlockFragmentDoc}
`
export const PeopleFragmentDoc = gql`
	fragment People on people_person_BlockType {
		id
		distance
		rotation
		facing
		person {
			id
		}
	}
`
export const ProjectFragmentDoc = gql`
	fragment Project on projects_default_Entry {
		seo: seomatic(asArray: true) {
			...SEO
		}
		title
		slug
		room
		boards {
			...Portrait
			...Landscape
			...Standing
			...Tile
			...Sign
		}
		people {
			...People
		}
	}
	${SeoFragmentDoc}
	${PortraitFragmentDoc}
	${LandscapeFragmentDoc}
	${StandingFragmentDoc}
	${TileFragmentDoc}
	${SignFragmentDoc}
	${PeopleFragmentDoc}
`
export const PageQueryDocument = gql`
	query PageQuery($slug: [String]) {
		entry(section: "projects", slug: $slug) {
			...Project
		}
	}
	${ProjectFragmentDoc}
`
export const PathQueryDocument = gql`
	query PathQuery {
		entries(section: "projects") {
			... on projects_default_Entry {
				slug
			}
		}
	}
`

export type SdkFunctionWrapper = <T>(
	action: (requestHeaders?: Record<string, string>) => Promise<T>,
	operationName: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action()

export function getSdk(
	client: GraphQLClient,
	withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
	return {
		PageQuery(
			variables?: PageQueryQueryVariables,
			requestHeaders?: Dom.RequestInit['headers'],
		): Promise<PageQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PageQueryQuery>(PageQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				'PageQuery',
			)
		},
		PathQuery(
			variables?: PathQueryQueryVariables,
			requestHeaders?: Dom.RequestInit['headers'],
		): Promise<PathQueryQuery> {
			return withWrapper(
				(wrappedRequestHeaders) =>
					client.request<PathQueryQuery>(PathQueryDocument, variables, {
						...requestHeaders,
						...wrappedRequestHeaders,
					}),
				'PathQuery',
			)
		},
	}
}
export type Sdk = ReturnType<typeof getSdk>
