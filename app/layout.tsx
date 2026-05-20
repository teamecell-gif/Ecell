import './globals.css'

import { Montserrat } from "next/font/google";
import Providers from './providers';
const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={montserrat.className}>
        <div className="flex flex-col-reverse md:flex-row min-h-screen relative overflow-x-hidden">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
