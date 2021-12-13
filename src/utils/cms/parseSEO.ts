import { SeoFragment } from '@schema/graphql'

type Meta = { [k: string]: any }

type TSEO = {
	metaTitleContainer: {
		title: {
			title: string
		}
	}
	metaTagContainer: Meta
	metaLinkContainer: Meta
	metaJsonLdContainer: Meta
}

export interface ISEO {
	title: string
	meta: Meta[]
	links: Meta[]
	jsonLd: Meta[]
}

const flattenValues = (data: Meta) =>
	Object.values(data)
		.filter((item) => item?.length !== 0)
		.flat()

export default function parseSEO(seo: SeoFragment): ISEO {
	const parsed = Object.entries(seo).reduce(
		(acc, [key, value]) => ({ ...acc, [key]: JSON.parse(value) }),
		{} as TSEO,
	)

	const {
		metaTitleContainer,
		metaTagContainer,
		metaLinkContainer,
		metaJsonLdContainer,
	} = parsed

	return {
		title: metaTitleContainer.title.title,
		meta: flattenValues(metaTagContainer),
		links: flattenValues(metaLinkContainer),
		jsonLd: flattenValues(metaJsonLdContainer),
	}
}
