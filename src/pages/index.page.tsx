import { Heading } from '@ignite-ui/react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export default function Home() {
  return (
    <main className={`${roboto}`}>
      <Heading as="h1">Hello World</Heading>
    </main>
  )
}
