import Head from 'next/head'
import { Inter } from 'next/font/google'
import Typed from 'react-typed'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })  

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col sm:flex-row">
      <div className='m-4'>
        <img src="/images/ak.jpg" alt="Akash" className='h-60 mx-auto rounded-full ring-4 ring-[#00df9a]' />
      </div>
      <div className='text-center'>
        <p className='font-bold text-4xl'>Akash Karmokar</p>
        <p>Software Engineer</p>
        <p>Who love </p>
        <Typed 
          strings={['React.js','Next.js','Express.js','Nest.Js','PostgreSQL']}
          typeSpeed={100}
          backSpeed={150}
          loop={true}
          className={'text-[#00df9a] font-semibold'}
        />
        <br />
        <Link href="/about"><button className="my-1 px-4 py-1 border border-purple-500 rounded-full text-sm text-purple-600 font-semibold">More</button> </Link>
      </div>
    </div>
  )
}
