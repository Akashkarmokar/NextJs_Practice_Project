import Head from 'next/head'
import { Inter } from 'next/font/google'
import Typed from 'react-typed'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })  

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col sm:flex-row">
      <div className='m-4'>
        <img src="/images/ak.jpg" alt="Akash" className='h-60 mx-auto rounded-full ring-4 ring-[#00df9a]' />
        <div className='flex items-center justify-center my-5 '>
          <Link href="https://github.com/akashkarmokar" className='mx-2' target="_blank"><Image src="/images/github.png" alt='Github' width={20} height={45} /></Link>
          <Link href="https://www.linkedin.com/in/akashcsemu/" className='mx-2' target="_blank"><Image src="/images/linkedin.png" alt='LinkedIn' width={20} height={50} /></Link>
          <Link href="https://codeforces.com/profile/Mr__Akash" className='mx-2' target="_blank"><Image src="/images/codeforces.png" alt='Codeforces' width={25} height={55} /></Link>
          <Link href="https://dev.to/akashcsemu" className='mx-2' target="_blank"><Image src="/images/dev.png" alt='Dev Community' width={20} height={30} /></Link>
        </div>
      </div>
      <div className='text-center flex items-center justify-center flex-col'>
        <p className='font-bold text-4xl'>Akash Karmokar</p>
        <p>Software Engineer</p>
        <p className='w-2/4'>A Programming enthusiast who love to work by learn to build system and experienced on</p>
        <Typed 
          strings={['React.js','Next.js','Express.js','Nest.Js','PostgreSQL']}
          typeSpeed={100}
          backSpeed={150}
          loop={true}
          className={'text-purple-600 font-semibold mt-1'}
          text-purple-600
        />
        <br />
        <Link href="/about"><button className="my-1 px-2 py-1 border border-[#00df9a] rounded-full text-sm text-[#00df9a] font-semibold">More</button> </Link>
      </div>
    </div>
  )
}
