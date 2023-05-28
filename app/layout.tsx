import AuthProvider from './AuthProvider'
import './globals.css'

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="dark:bg-black dark:text-white min-h-screen">
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
