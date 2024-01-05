import './app.css'
import './globals.css'
import MetaImage from '../assets/image/headerBGImage.webp'
export const metadata = {
  title: 'DompKong',
  description: 'Generated by create next app',
  image:MetaImage,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
