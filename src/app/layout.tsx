import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Olá! ;)',
  description: 'Meu portifólio',
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
