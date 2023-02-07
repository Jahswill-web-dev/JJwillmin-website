import Header from '../components/Header';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Projects from '../components/Projects';
import myImage from "/public/images/image-2.png"


export default function Home() {
  return (
    <>
      <Header
        title="J.J.WILLMIN | Construction Company"
      />


      {/* Hero Section */}
      <header className="flex flex-col justify-center items-center  bg-cover bg-center bg-fixed bg-hero h-screen">
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary/50 " />
        <div className="text-white text-center z-[3]">
          <h1 className="text-6xl  sm:text-7xl top-[10rem]">J.J.WILLMIN</h1>
          <p className="text-2xl  sm:text-4xl">Civil Engineering works and procurement Services</p>
        </div>
      </header>


      {/* About Section */}
      {/* about background image */}
      <div className="flex justify-center items-center bg-about h-screen bg-cover bg-center bg-fixed" id="about">

        {/* about text */}
        <div className="text-white rounded w-[98%] mx-auto  bg-primary/60 h-[75%] sm:h-[65%] flex justify-center items-center">
          {/* text wrapper */}
          <div className="w-[95%] mx-auto">
            <h2 className="font-semibold text-2xl">About</h2>
            <h2 className="font-bold text-4xl pb-4">J. J. WILLMIN</h2>
            <p className="text-2xl sm:text-3xl font-semibold">
              J.J.WILLMIN Nigeria limited is a service provider with proficient touch in the following areas of specialties: </p>
            <ul className="sm:text-4xl text-2xl font-bold">
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Civil Engineering Design and Construction,</li>
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Road Design and Construction</li>
              <li className="font-bold bg-primary inline-block border-solid border-white border-2 rounded p-[3px] m-[4px]">Residential and Real Estate Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2>Featured Projects</h2>
        <Projects />
      </div>

      {/* Values Section */}
      <div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>

    </>
  )
}
