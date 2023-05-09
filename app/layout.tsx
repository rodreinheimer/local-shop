import './globals.css'
import { Inter } from 'next/font/google'
import data from "../public/data.json"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: data.fields.title,
  description: 'This is rod\'s mobile shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
