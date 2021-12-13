import type { NextApiRequest, NextApiResponse } from 'next'
import { gql } from 'graphql-request'
import cmsClient from '@lib/graphqlClient'

export default async (
	req: NextApiRequest,
	res: NextApiResponse,
): Promise<void> => {
	if (!req.query.token) {
		res.status(401).json({ message: 'Token missing' })
		return
	}

	if (!req.query.entryUid) {
		res.status(401).json({ message: 'Not allowed to access this route' })
		return
	}

	if (req.query.secret !== process.env.CRAFT_CMS_PREVIEW_TOKEN) {
		res.status(401).json({ message: 'Auth failed' })
		return
	}

	const client = cmsClient(req.query.token as string)
	const { entryUid } = req.query

	const pageQuery = gql`
		query ($uid: [String]) {
			entry(uid: $uid) {
				id
				uri
			}
		}
	`

	const data = await client.request(pageQuery, {
		uid: entryUid,
	})

	if (!data?.entry?.uri) {
		res.status(404).json({
			message: `URL of the entry ${req.query.entryUid} could not be fetched`,
		})
		return
	}

	res.setPreviewData({
		token: req.query.token,
		typeHandle: data?.entry?.typeHandle,
	})

	const {
		entry: { uri },
	} = data

	const isHome = uri === '__home__'

	const location = `/${isHome ? '' : uri}`

	// Redirect to the path from the fetched url
	res.writeHead(307, { Location: location })
	res.end()
}
