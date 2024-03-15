import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const DateYear = new Date().getFullYear();

    return (
        <>
            <footer className='mt-auto bg-slate-800 text-sm font-semibold text-white'>
                <div className='container mx-auto mb-4 grid grid-cols-1 lg:grid-cols-4'>
                    <div className='p-4'>
                        <div className='inline-block bg-gradient-to-br from-[#6889ff] to-[#c668ff] bg-clip-text py-2 text-6xl font-bold leading-none text-transparent'>
                            Pixy
                        </div>
                    </div>
                    <div className='p-4'>
                        <nav>
                            <ul className='flex flex-col gap-4 text-white'>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>Pricing</li>
                                <li className='cursor-pointer'>About</li>
                                <li className='cursor-pointer'>Contact</li>
                            </ul>
                        </nav>
                    </div>
                    <div className='p-4'>
                        <nav>
                            <ul className='flex flex-col gap-4 text-white'>
                                <li className='cursor-pointer'>Careers</li>
                                <li className='cursor-pointer'>
                                    Privacy Policy
                                </li>
                                <li className='cursor-pointer'>
                                    Terms & Conditions
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='p-4'>
                        <div className='mb-6'>
                            <h5 className='mb-4 font-bold text-white underline underline-offset-4'>
                                Get in touch
                            </h5>
                            <ul className='flex items-center gap-4'>
                                <li className='cursor-pointer text-2xl'>
                                    <FaFacebookF />
                                </li>
                                <li className='cursor-pointer text-2xl'>
                                    <FaInstagram />
                                </li>
                                <li className='cursor-pointer text-2xl'>
                                    <FaXTwitter />
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                            <h5 className='mb-4 font-bold text-white underline underline-offset-4'>
                                Subscribe
                            </h5>
                            <form autoComplete='off'>
                                <div className='flex flex-wrap items-center gap-3'>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        autoComplete='off'
                                        className='rounded-full text-black'
                                    />
                                    <button
                                        type='button'
                                        className='w-fit cursor-pointer rounded-[2rem] bg-blue-500 px-4 py-2 font-semibold text-white'
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto border-t border-white/15 p-4'>
                    <p className='text-center'>
                        ©{DateYear} Pixy. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
