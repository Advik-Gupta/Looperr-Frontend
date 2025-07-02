// src/app/layout.tsx
export const metadata = {
	title: 'Looperr',
	description: 'Campus runner app',
}

import { ReactNode } from 'react'

import '@/styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
