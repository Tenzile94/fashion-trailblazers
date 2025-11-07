import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Style Trailblazers - Four Women Who Changed Fashion',
  description: 'Discover the stories of four trailblazing women in the world of fashion and their iconic brands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

