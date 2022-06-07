import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}

      <Sidebar />

      {/* Feed */}

      <Feed />

      {/* Widgets */}

      <Widgets />

    </div>
  )
}

export default Home
