import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About CaBric - Building Tomorrow's Sustainable World Today.",
  description: "Discover CaBric Engineering, leaders in sustainable construction and innovative architectural design. Join us in building an eco-friendly future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}