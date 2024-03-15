import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <div className='flex h-[100vh] w-[100vw] flex-col items-center justify-center p-4'>
                <div className='inline-block bg-gradient-to-br from-[#6889ff] to-[#c668ff] bg-clip-text py-8 text-[10rem] font-bold leading-none text-transparent'>
                    404
                </div>
                <h1 className='mb-3 text-center text-7xl font-semibold text-white'>
                    Oops!
                </h1>
                <p className='mb-8 text-center text-2xl font-medium text-white'>
                    The page you're looking for was not found.
                </p>
                <Link
                    to={'/'}
                    className='rounded-[2rem] bg-blue-500 px-4 py-2 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-500/85'
                    replace
                >
                    Go to Home page
                </Link>
            </div>
        </>
    );
};

export default PageNotFound;
