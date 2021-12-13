import * as React from 'react'


export type GlobalPropsState = {}

export const GlobalPropsContext = React.createContext<GlobalPropsState>(null!)

export function useGlobalProps(): GlobalPropsState {
	return React.useContext(GlobalPropsContext) as GlobalPropsState
}

export interface IGlobalPropsProviderProps {
	children: React.ReactNode
	value: any
}

function GlobalPropsProvider({
	children,
	value,
}: IGlobalPropsProviderProps): JSX.Element {
	return (
		<GlobalPropsContext.Provider value={value}>
			{children}
		</GlobalPropsContext.Provider>
	)
}

export default GlobalPropsProvider
