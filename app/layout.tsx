'use client'
import Footer from '@/components/Footer'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import Head from './head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <Head/>
      <body>
        <ThemeProvider enableSystem ={true} attribute="class">
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        
        </body>
    </html>
  )
}
