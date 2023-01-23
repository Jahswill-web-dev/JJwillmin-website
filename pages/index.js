import Header from '../components/Header'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <div className="flex justify-center items-center bg-cover bg-center bg-hero bg-fixed h-screen ">
     
     <Header 
     title="J.J.WILLMIN | Construction Company"
     />

      {/* overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 z-[1]"/>
      {/* hero contents */}
    <header className="max-w-[90%] md:max-w-[1234px] mx-auto z-[2]">
      <h1 className="uppercase text-center text-white text-5xl">J.J.WILLMIN</h1>
      <p className="uppercase  text-center text-white">Civil Engineering works and Procrument Services</p>
    </header>
    </div>
    {/* About Section */}
    <div className="flex">
      {/* text */}
      <div>

      </div>
      {/* Image */}
      <div>

      </div>
    </div>
      </>
  )
}
