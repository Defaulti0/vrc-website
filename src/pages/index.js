import { Button } from '@material-tailwind/react/components/Button'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { UseIsAppRouter } from '@/useIsAppRouter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
      // className="flex w-max gap-4"
    >
      <UseIsAppRouter />
      <p>Hello world!</p>
      {/* <Button>Text</Button> */}
      <Link href="/games">Games</Link>
    </div>
  )
}
