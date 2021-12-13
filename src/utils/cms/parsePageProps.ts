import { SeoFragment } from '@schema/graphql'
import parseSEO, { ISEO } from '@utils/cms/parseSEO'

interface IPageProps {
	seo: SeoFragment
}

interface IPagePropsOutPut {
	seo: ISEO
}

export default async function parsePageProps({
	seo,
}: IPageProps): Promise<IPagePropsOutPut> {
	return {
		seo: parseSEO(seo),
	}
}
