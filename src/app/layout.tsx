import { TodoProvider } from '@/context/TodoContext'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['devanagari'], weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={poppins.className}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html >
  )
}
