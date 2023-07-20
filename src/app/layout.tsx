// import FooterCopywrite from './components/Footer'
// import Footer from './components/Footer/bigfooter'
// import Footerpress from './components/Footer/footersocial'
// import Navbar from './components/Navbar'/ 
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'wpbeginner',
  description: 'One site for all your Plugins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        {/* <FooterCopywrite/> */}
      </body>
    </html>
  )
}
 