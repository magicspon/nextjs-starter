/* eslint-disable no-console */
import { PreviewData } from 'next'

interface IPreviewToken {
	preview?: boolean
	previewData?: PreviewData
}

export default function getTypeFromPreviewData({
	preview,
	previewData,
}: IPreviewToken): string | null {
	const previewTokens = previewData as Record<string, string>
	const typeHandle = previewTokens?.typeHandle as string
	return preview ? typeHandle : null
}
