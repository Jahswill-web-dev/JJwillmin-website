import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="navbar bg-white text-xl max-w-5xl max-w-[92%] md:max-w-[910px] mx-auto
        ">

            <div className="flex justify-between  p-4">

                <div className="logo text-secondary font-bold mt-1">

                    <a href="#home">JJWILLMIN</a>

                </div>

                <div className="hamburger text-3xl sm:hidden"><i class="fa-solid fa-bars"></i></div>

                <ul className="nav-list absolute static mt-11 bg-green w-full left-0 text-[1rem] h-0 overflow hidden
                sm:relative sm:mt-0 sm:w-auto sm:flex
                ">

                    <a href="#about" className="nav-link">

                        <li className="nav-item py-2 px-4">ABOUT</li>

                    </a>

                    <Link href="#services" className="nav-link">

                        <li className="nav-item py-2 px-4">SERVICES</li>

                    </Link>

                    <Link href="#projects" className="nav-link">

                        <li className="nav-item py-2 px-4">PROJECTS</li>

                    </Link>

                    <Link href="#contact" className="nav-link">

                        <li className="nav-item py-2 px-4">CONTACT US</li>

                    </Link>

                </ul>

            </div>

        </nav>
    );
}

