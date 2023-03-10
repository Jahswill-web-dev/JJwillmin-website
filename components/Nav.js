import Link from 'next/link'
import { React, useEffect, useState } from 'react';

export default function Nav() {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('#1E2A40');

    const handleNav = () => {
        setNav(!nav);
    }
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#1E2A40');
                setTextColor('white')
            }else{
                setColor('white')
                setTextColor('#1E2A40')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);


    return (
        <>
            {/* mobile nav */}
            <nav style={{ backgroundColor: `${color}`,color: `${textColor}`}} className="navbar bg-white text-xl mx-auto w-full fixed sm:hidden z-10">
                <div className="flex justify-between max-w-[90%] mx-auto p-2">
                    <div className="logo  font-bold mt-1">
                        <Link href="/">JJWILLMIN</Link>
                    </div>
                    <div onClick={handleNav} className="hamburger text-3xl sm:hidden ">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className={
                    nav ?
                        `absolute top-0 bottom-0 left-0 right-0 bg-primary w-full h-screen text-center
                     ease-in-out duration-300 flex justify-center items-center text-white`
                        :
                        `absolute top-0 bottom-0 left-[-640px] right-0 bg-black/70 w-full h-screen text-center
                     ease-in-out duration-300 flex justify-center items-center text-white`} >

                    <div onClick={handleNav} className="absolute top-8 right-10 text-4xl ">
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <ul className="">
                        <li className="nav-item py-2 px-4 text-3xl hover:text-grey"><Link href="/#about">ABOUT</Link></li>
                        {/* <li className="nav-item py-2 px-4 text-3xl hover:text-grey"><Link href="/#services">SERVICES</Link></li> */}
                        <li className="nav-item py-2 px-4 text-3xl hover:text-grey"><Link href="/#project">PROJECTS</Link></li>
                        <li className="nav-item py-2 px-4 text-3xl hover:text-grey"><Link href="/#contact">CONTACT US</Link></li>
                    </ul>

                </div>
            </nav>
            {/* desktop Nav */}
            <div className="hidden sm:flex justify-between items-center py-2 z-10 mx-auto w-full fixed px-10" style={{ backgroundColor: `${color}`, color: `${textColor}` }}>
                <div className="logo font-bold mt-1 flex items-center">
                            <Link href="/">J.J.WILLMIN</Link>
                </div>
                <ul className="flex gap-5 items-center ">
                        <li className="nav-item hover:text-blue-900"><Link href="/#about">ABOUT</Link></li>
                        {/* <li className="nav-item hover:text-blue-900"><Link href="/#services">SERVICES</Link></li> */}
                        <li className="nav-item hover:text-blue-900"><Link href="/#project">PROJECTS</Link></li>
                        <li className="nav-item hover:text-blue-900"><Link href="/#contact">CONTACT US</Link></li>
                    </ul>
            </div>
        </>
    );
}

