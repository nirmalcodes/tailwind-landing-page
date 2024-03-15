import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaX } from 'react-icons/fa6';
import { useClickOutsideListener } from '../../../hooks';
import ROUTES from '../../../routes';

const Navbar = () => {
    const navbarRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    useClickOutsideListener(navbarRef, () => {
        setIsOpen(false);
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            ref={navbarRef}
            className={`fixed inset-x-0 top-0 z-[9999] flex items-center px-4 py-2 text-white transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/5 backdrop-blur' : 'bg-white/0 backdrop-blur-none'}`}
        >
            <div className='inline-block bg-gradient-to-br from-[#6889ff] to-[#c668ff] bg-clip-text py-2 text-3xl font-bold leading-none text-transparent'>
                Pixy
            </div>
            <button
                className='fixed right-2 top-4 z-[99999] overflow-hidden rounded-full p-2 lg:hidden'
                type='button'
                aria-label='Toggle navigation'
                onClick={handleToggle}
            >
                {isOpen ? <FaX /> : <FaBars />}
            </button>
            <nav
                className={`fixed inset-0 ml-auto flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-[#051c31] p-8 transition-all duration-300 ease-in-out lg:relative lg:inset-auto lg:h-auto lg:w-auto lg:-translate-x-0 lg:bg-transparent lg:p-0 ${isOpen ? '-translate-x-0' : 'translate-x-[1000px]'}`}
            >
                <ul className='flex flex-col items-center gap-x-4 gap-y-8 text-lg font-medium leading-none text-[#6889ff] lg:flex-row lg:gap-y-0'>
                    {ROUTES.map((link, index) => {
                        const { name, path, hideInNav, children } = link;

                        if (hideInNav) {
                            return null;
                        }
                        if (!hideInNav && children.length === 0) {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-5xl opacity-100 transition-all duration-200 ease-in-out lg:text-lg'
                                                : 'text-5xl opacity-60 transition-all duration-200 ease-in-out hover:opacity-100 lg:text-lg'
                                        }
                                    >
                                        {name ?? 'Link'}
                                    </NavLink>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
