import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {

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

    const socials = [
        {
            id: 1,
            icon: facebook
        },
        {
            id: 2,
            icon: twitter
        },
        {
            id: 3,
            icon: pinterest
        },
        {
            id: 4,
            icon: instagram
        },
    ]

    return (
        <div className='bg-black'>
            <div className='mx-auto max-w-screen-lg px-6 py-14 lg:px-0'>
                <div className='md:flex md:justify-between md:items-center'>
                    {/* LOGO AND LINKS */}
                    <div className='flex flex-col items-center gap-y-8 md:items-start md:gap-y-6'>
                        <img src={logo} alt="" />

                        <ul className='flex flex-col items-center gap-y-6 md:flex-row md:gap-x-6'>
                            {links.map(({ id, link }) => (
                                <li key={id} className='capitalize text-white text-sm'>
                                    <a href="#links" className='duration-200 md:hover:border-b-2 md:hover:border-b-white md:hover:pb-2'>{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SOCIALS AND COPYRIGHT */}
                    <div className='mt-10 flex flex-col items-center gap-y-6 md:mt-0 md:items-end'>
                        <div className='flex items-center justify-center gap-x-6'>
                            {socials.map(({ id, icon }) => (
                                <a href="#google" className='duration-200 md:hover:border-b-2 md:hover:border-b-white md:hover:pb-2'>
                                    <img key={id} src={icon} alt="" />
                                </a>
                            ))}
                        </div>
                        <p className='text-sm text-veryDarkGray'>&copy; 2021 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;