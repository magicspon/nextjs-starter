import { PreviewData } from 'next'

interface IPreviewToken {
	preview?: boolean
	previewData?: PreviewData
}

export default function previewToken({
	preview,
	previewData,
}: IPreviewToken): string | null {
	const previewTokens = previewData as Record<string, string>
	const token = previewTokens?.token as string
	return preview ? token : null
}
