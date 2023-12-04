import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import Features from './components/Features'
import Services from './components/Services'
import Comments from './components/Comments'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: ' App',
  description: 'Next home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
       <main>
        <HomePage/>
        <Features/>
        <Services/>
        <Comments/>
        <Footer/>
        </main> 
      </body>
    </html>
  )
}
