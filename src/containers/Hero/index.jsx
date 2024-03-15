import { FaChevronDown } from 'react-icons/fa6';

const Hero = ({ scrollTargetRef }) => {
    const scrollTo = () => {
        scrollTargetRef?.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='hero' className='flex min-h-[100vh] w-full items-center'>
            <div className='container mx-auto'>
                <div className='mb-10 flex'>
                    <div className='flex-1 p-4'>
                        <h1 className='mb-8 text-[clamp(2rem,_6vw_+_1rem,_4.5rem)] font-medium leading-none text-white md:max-w-xl lg:max-w-max'>
                            Share your precious memories with your loved once.
                        </h1>
                        <p className='mb-6 max-w-lg font-medium text-white'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Tenetur consequuntur et dolorem unde aut
                            dolorum nostrum. Inventore tempore numquam sapiente
                            voluptatem accusantium, fugit, libero pariatur,
                            veniam aperiam nulla minus ut.
                        </p>
                        <div className='w-fit cursor-pointer rounded-[2rem] bg-blue-500 px-4 py-2 font-semibold text-white'>
                            Get Started
                        </div>
                    </div>
                    <div className='hidden flex-1 items-center justify-center p-4 lg:flex'>
                        <div className='relative grid w-fit grid-cols-2 p-4'>
                            <div className='pl-3 pt-3'>
                                <div className='h-[250px] w-[200px] overflow-hidden rounded-2xl shadow-xl'>
                                    <img
                                        src='https://picsum.photos/800/800?random=1'
                                        alt='img1'
                                        loading='eager'
                                        className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                    />
                                </div>
                            </div>
                            <div className='pl-3'>
                                <div className='h-[250px] w-[200px] overflow-hidden rounded-2xl shadow-xl'>
                                    <img
                                        src='https://picsum.photos/800/800?random=2'
                                        alt='img2'
                                        loading='eager'
                                        className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                    />
                                </div>
                            </div>
                            <div className='pt-3'>
                                <div className='h-[250px] w-[200px] overflow-hidden rounded-2xl shadow-xl'>
                                    <img
                                        src='https://picsum.photos/800/800?random=3'
                                        alt='img3'
                                        loading='eager'
                                        className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <div className='h-[250px] w-[200px] overflow-hidden rounded-2xl shadow-xl'>
                                    <img
                                        src='https://picsum.photos/800/800?random=4'
                                        alt='img4'
                                        loading='eager'
                                        className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button
                        type='button'
                        onClick={scrollTo}
                        className='relative mx-auto block h-12 w-12 cursor-pointer overflow-hidden rounded-full border border-white text-xl leading-none text-white'
                    >
                        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <FaChevronDown className='animate-bounce' />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
