import { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  children?: ReactNode
}

const Layout = ({ title = 'Clinic', children }: Props) => {
  return (
    <body>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </body>
  )
}
