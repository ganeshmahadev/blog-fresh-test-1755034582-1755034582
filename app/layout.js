import './globals.css'

export const metadata = {
  title: 'Fresh Test 1755034582',
  description: 'This is a fresh test with a completely unique name to avoid conflicts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
