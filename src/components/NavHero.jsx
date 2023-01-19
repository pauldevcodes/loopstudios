import logo from '../images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const NavHero = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'about'
        },
        {
            id: 2,
            link: 'careers'
        },
        {
            id: 3,
            link: 'events'
        },
        {
            id: 4,
            link: 'products'
        },
        {
            id: 5,
            link: 'support'
        },
    ]

    return (
        <div id='bgImage'>
            {/* <div id='overlay' className=''></div> */}
            <div className='mx-auto max-w-screen-lg px-6 pt-12 lg:px-0'>
                {/* LOGO AND NAVIGATION */}
                <div className='flex justify-between items-center'>
                    {/* LOGO */}
                    <div className='z-10'>
                        <img src={logo} alt="" />
                    </div>

                    {/* HAMBURGER */}
                    <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-white md:hidden'>
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>

                    {/* MOBILE MENUS */}
                    {nav && (
                        <ul className='flex flex-col justify-start items-start gap-y-7 absolute top-0 left-0 w-full h-screen px-8 py-48 bg-black md:hidden'>
                            {links.map(({ id, link }) => (
                                <li key={id} className='uppercase text-white text-lg'>
                                    <a href="#links">{link}</a>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* DESKTOP MENUS */}
                    <ul className='hidden md:flex md:gap-x-8'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='capitalize text-white text-sm'>
                                <a href="#links" className='duration-200 hover:border-white hover:border-b-2 hover:pb-2'>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='text-white uppercase text-3xl w-full border-white border-2 p-4 mt-44 md:w-3/5 md:text-5xl md:p-6 lg:text-6xl lg:p-8' id='heading'>
                        immersive experiences that <br className='md:hidden' /> deliver
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default NavHero;