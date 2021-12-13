import { GraphQLClient } from 'graphql-request'

interface IHeaders {
	authorization: string
	[k: string]: any
}

export default function main(previewToken?: string | null): GraphQLClient {
	const endpoints = `${process.env.CRAFT_CMS_GRAPHQL_ENDPOINT}`
	const src = previewToken
		? `${endpoints}?x-craft-live-preview=${previewToken}`
		: endpoints

	const headers: IHeaders = {
		authorization: `Bearer ${process.env.CRAFT_CMS_GRAPHQL_TOKEN}`,
	}

	if (previewToken) {
		headers['x-craft-token'] = previewToken
	}

	const graphQLClient = new GraphQLClient(src, {
		headers,
	})

	return graphQLClient
}
