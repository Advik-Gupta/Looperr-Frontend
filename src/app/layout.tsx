import '@/styles/globals.css'
import ReduxProvider from '@/store/ReduxProvider'
import InitApp from './providers/InitApp'

export const metadata = {
	title: 'Looperr',
	description: 'Campus utility app for student errands',
	icons: {
		icon: '/favicon.png',
	},
}

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<ReduxProvider>
					<InitApp />
					{children}
				</ReduxProvider>
			</body>
		</html>
	)
}
