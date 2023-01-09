import Header from '../components/Head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-[90%] md:max-w-[1234px] mx-auto bg-black">
     
     <Header 
     title="J.J.WILLMIN | Construction Company"
     />

    


    </div>
  )
}
