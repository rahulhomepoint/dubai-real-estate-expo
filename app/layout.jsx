import { Open_Sans, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "Dubai Real Estate Expo",
  description: "Modern, high-contrast landing page for the Dubai Real Estate Expo",
  generator: "v0.app",
}

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} antialiased`}>
      <body className="font-sans leading-relaxed">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
