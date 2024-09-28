import { Button } from '@material-tailwind/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      className="flex w-max gap-4"
    >
      <p>Hello world!</p>
      <Button>Text</Button>

      <Link href="/games"></Link>
    </div>
  )
}
