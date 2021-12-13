import * as React from 'react'
import NProgress from 'nprogress'
import useLoading from '@hooks/useLoading'

function NProgressBar(): null {
	const isLoading = useLoading((state) => state.isLoading)

	React.useEffect(() => {
		if (isLoading) {
			NProgress.start()
		} else {
			NProgress.done()
		}
	}, [isLoading])

	return null
}

export default NProgressBar
