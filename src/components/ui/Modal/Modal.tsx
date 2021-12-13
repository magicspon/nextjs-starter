import * as React from 'react'
import ReactModal from 'react-modal'
import useUi from '@hooks/useUi'
import { XIcon } from '@heroicons/react/outline'

export interface IModalProps {
	children: React.ReactNode
}

ReactModal.setAppElement('body')

function Modal({ children }: IModalProps): JSX.Element {
	const isOpen = useUi((state) => state.isOpen)
	const closeModal = useUi((state) => state.closeModal)

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={closeModal}
			closeTimeoutMS={300}
			overlayClassName="w-full opacity-0 transition-opacity duration-300 z-top h-full fixed top-0 left-0 px-5 flex items-center justify-center bg-black/20"
			bodyOpenClassName="overflow-hidden"
			htmlOpenClassName="overflow-hidden"
			contentLabel="How to play"
			className="relative w-full max-w-4xl px-5 py-12 mx-auto bg-white rounded-xl"
			aria={{
				labelledby: 'heading',
				describedby: 'desc',
			}}
		>
			<button
				onClick={closeModal}
				type="button"
				className="absolute top-4 right-4"
			>
				<span className="text-black sr-only">Close</span>
				<XIcon className="w-5" />
			</button>
			{children}
		</ReactModal>
	)
}

export default Modal
