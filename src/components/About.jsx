import mobileInteractive from '../images/mobile/image-interactive.jpg';
import desktopInteractive from '../images/desktop/image-interactive.jpg';

const About = () => {
    return (
        <div className="mx-auto max-w-screen-lg px-6 py-24 lg:flex lg:px-0 lg:py-32">
            {/* IMAGE */}
            <div className='mb-12 lg:basis-1/2'>
                <img src={mobileInteractive} alt="" className=' w-full lg:hidden' />
                <img src={desktopInteractive} alt="" className='hidden lg:block' />
            </div>

            {/* DESCRIPTION */}
            <div className='px-8 bg-white lg:basis-1/2 lg:self-end lg:-ml-32 lg:p-16 lg:relative lg:top-28'>
                <h1 id='heading' className='uppercase text-center text-3xl tracking-wider mb-4 md:text-start lg:text-4xl'>
                    The leader in interactive VR
                </h1>
                <p className='text-center text-veryDarkGray md:text-start'>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.
                </p>
            </div>
        </div>
    );
}

export default About;