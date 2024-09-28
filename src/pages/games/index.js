// import { Button } from '@material-tailwind/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Games() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <h1>First Post</h1>
      <Link href="/">Back to home</Link>
    </div>
  )
}
