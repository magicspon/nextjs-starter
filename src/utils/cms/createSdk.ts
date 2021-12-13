import cmsClient from '@lib/graphqlClient'
import getPreviewToken from '@utils/next/getPreviewToken'
import { GetStaticPropsContext } from 'next'
import { getSdk, Sdk } from '@schema/graphql'

export default function createSdk({
	preview,
	previewData,
}: Partial<GetStaticPropsContext> = {}): Sdk {
	const client = cmsClient(getPreviewToken({ preview, previewData }))
	const sdk = getSdk(client)

	return sdk
}
