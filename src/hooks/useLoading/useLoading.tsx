import create from 'zustand'

interface ILoadingStore {
	isLoading: boolean
	setLoading: (v: boolean) => void
}

const useLoadingStore = create<ILoadingStore>((set) => ({
	isLoading: false,
	setLoading: (isLoading) =>
		set((state) => ({ ...state, isLoading: isLoading })),
}))

export default useLoadingStore
