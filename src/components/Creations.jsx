import mobileDeepEarth from '../images/mobile/image-deep-earth.jpg';
import mobileFromAbove from '../images/mobile/image-from-above.jpg';
import mobileNightArcade from '../images/mobile/image-night-arcade.jpg';
import mobilePocketBorealis from '../images/mobile/image-pocket-borealis.jpg';
import mobileSoccerTeam from '../images/mobile/image-soccer-team.jpg';
import mobileCuriosity from '../images/mobile/image-curiosity.jpg';
import mobileFisheye from '../images/mobile/image-fisheye.jpg';
import mobileGrid from '../images/mobile/image-grid.jpg';
import desktopDeepEarth from '../images/desktop/image-deep-earth.jpg';
import desktopFromAbove from '../images/desktop/image-from-above.jpg';
import desktopNightArcade from '../images/desktop/image-night-arcade.jpg';
import desktopPocketBorealis from '../images/desktop/image-pocket-borealis.jpg';
import desktopSoccerTeam from '../images/desktop/image-soccer-team.jpg';
import desktopCuriosity from '../images/desktop/image-curiosity.jpg';
import desktopFisheye from '../images/desktop/image-fisheye.jpg';
import desktopGrid from '../images/desktop/image-grid.jpg';

const Creations = () => {

    const mobileGalleries = [
        {
            id: 1,
            img: mobileDeepEarth,
            text: 'deep earth'
        },
        {
            id: 2,
            img: mobileNightArcade,
            text: 'night arcade'
        },
        {
            id: 3,
            img: mobileSoccerTeam,
            text: 'soccer team vr'
        },
        {
            id: 4,
            img: mobileGrid,
            text: 'the grid'
        },
        {
            id: 5,
            img: mobileFromAbove,
            text: 'from up above vr'
        },
        {
            id: 6,
            img: mobilePocketBorealis,
            text: 'pocket borealis'
        },
        {
            id: 7,
            img: mobileCuriosity,
            text: 'the curiosity'
        },
        {
            id: 8,
            img: mobileFisheye,
            text: 'make it fisheye'
        }
    ]

    const desktopGalleries = [
        {
            id: 1,
            img: desktopDeepEarth,
            text: 'deep earth'
        },
        {
            id: 2,
            img: desktopNightArcade,
            text: 'night arcade'
        },
        {
            id: 3,
            img: desktopSoccerTeam,
            text: 'soccer team vr'
        },
        {
            id: 4,
            img: desktopGrid,
            text: 'the grid'
        },
        {
            id: 5,
            img: desktopFromAbove,
            text: 'from up above vr'
        },
        {
            id: 6,
            img: desktopPocketBorealis,
            text: 'pocket borealis'
        },
        {
            id: 7,
            img: desktopCuriosity,
            text: 'the curiosity'
        },
        {
            id: 8,
            img: desktopFisheye,
            text: 'make it fisheye'
        }
    ]

    return (
        <div className="mx-auto max-w-screen-lg py-10 px-6 lg:px-0">
            {/* HEADING AND LOGO */}
            <div className="flex justify-center items-center mb-8 md:justify-between">
                <h2 id="heading" className="uppercase text-3xl tracking-wider md:text-[44px]">
                    our creations
                </h2>
                <button>
                    <a href="#see" className="hidden uppercase text-xs border-2 px-8 py-2 tracking-widest md:block duration-200 hover:bg-black hover:text-white">
                        see all
                    </a>
                </button>
            </div>

            {/* GALLERY */}

            {/* MOBILE */}
            <div className='md:hidden'>
                {mobileGalleries.map(({ id, img, text }) => (
                    <div key={id} className='relative'>
                        <p id='heading' className='absolute top-10 text-white p-4 uppercase text-xl w-3/4 '>{text}</p>
                        <img src={img} alt="" className='mb-6' />
                    </div>
                ))}
            </div>

            {/* DESKTOP */}
            <div className='hidden md:grid md:grid-cols-4 md:gap-6'>
                {desktopGalleries.map(({ id, img, text }) => (
                    <div key={id} className='relative'>
                        <p id='heading' className='absolute top-2/3 uppercase text-white p-8 text-xl z-10 md:top-1/2 lg:text-4xl duration-200 hover:text-black'>{text}</p>
                        <img src={img} alt="" className='duration-200 hover:opacity-50' />
                    </div>
                ))}
            </div>

            <div className='flex justify-center'>
                <button>
                    <a href="#see" className="uppercase text-sm border-2 px-8 py-2 tracking-widest md:hidden">
                        see all
                    </a>
                </button>
            </div>

        </div>
    );
}

export default Creations;