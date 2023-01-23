import Link from 'next/link'
import { React, useEffect, useState } from 'react';

export default function Nav() {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    }
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffff');
            }else{
                setColor('transparent')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, []);


    return (
        <>
            {/* mobile nav */}
            <nav style={{ backgroundColor: `${color}` }} className="navbar bg-white text-xl mx-auto w-full fixed sm:hidden z-10">
                <div className="flex justify-between max-w-[90%] mx-auto p-2">
                    <div className="logo text-secondary font-bold mt-1">
                        <a href="#home">JJWILLMIN</a>
                    </div>
                    <div onClick={handleNav} className="hamburger text-3xl sm:hidden ">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className={
                    nav ?
                        `absolute top-0 bottom-0 left-0 right-0 bg-black w-full h-screen text-center
                     ease-in-out duration-300 flex justify-center items-center text-white`
                        :
                        `absolute top-0 bottom-0 left-[-600px] right-0 bg-black/70 w-full h-screen text-center
                     ease-in-out duration-300 flex justify-center items-center text-white`} >

                    <div onClick={handleNav} className="absolute top-8 right-10 text-4xl ">
                        <i className="fa-solid fa-x"></i>
                    </div>
                    <ul className="">
                        <li className="nav-item py-2 px-4 text-3xl hover:text-gray-500"><Link href="/">ABOUT</Link></li>
                        <li className="nav-item py-2 px-4 text-3xl hover:text-gray-500"><Link href="/">SERVICES</Link></li>
                        <li className="nav-item py-2 px-4 text-3xl hover:text-gray-500"><Link href="/">PROJECTS</Link></li>
                        <li className="nav-item py-2 px-4 text-3xl hover:text-gray-500"><Link href="/">CONTACT US</Link></li>
                    </ul>

                </div>
            </nav>
            {/* desktop Nav */}

        </>
    );
}

