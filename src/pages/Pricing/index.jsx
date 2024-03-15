const Pricing = () => {
    return (
        <>
            <section
                id='pricing'
                className='flex min-h-[100vh] w-full flex-col items-center justify-center px-4 pb-10 pt-16'
            >
                <h2 className='mb-8 text-center text-[clamp(2rem,_6vw_+_1rem,_4.5rem)] font-medium text-white'>
                    Choose your price plan
                </h2>
                <div className='mx-auto my-3 max-w-full md:max-w-6xl md:px-8'>
                    <div className='relative flex flex-col items-center md:flex-row'>
                        <div className='relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-mr-4 lg:w-1/3'>
                            <div className='overflow-hidden rounded-lg bg-white/10 text-white shadow-lg backdrop-blur'>
                                <div className='sm:text-md mx-auto mt-2 block max-w-sm px-8 text-left text-sm text-white lg:px-6'>
                                    <h1 className='p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide'>
                                        Hobby
                                    </h1>
                                    <h2 className='pb-6 text-center text-sm text-gray-400'>
                                        FREE
                                    </h2>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sit error repellat, est
                                    facilis dolorem nemo asperiores aliquid!
                                    Voluptates, qui.
                                </div>

                                <div className='mt-3 flex flex-wrap px-6'>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                No setup
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                No setups
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                Speed
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex items-center p-8  uppercase'>
                                    <button className='mt-3 block w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-gray-700'>
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='relative z-10 my-8 w-full max-w-md rounded-lg bg-white/10 shadow-lg backdrop-blur sm:my-5 sm:w-2/3 lg:w-1/3'>
                            <div className='rounded-t-lg bg-gray-500 py-4 text-center text-sm font-semibold uppercase leading-none tracking-wide text-white'>
                                Most Popular
                            </div>
                            <div className='sm:text-md mx-auto mt-2 block max-w-sm px-8 text-left text-sm text-white lg:px-6'>
                                <h1 className='p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide'>
                                    Expert
                                </h1>
                                <h2 className='pb-6 text-center text-sm text-gray-400'>
                                    <span className='text-3xl'>$19</span> /mo
                                </h2>
                                Stripe offers everything needed to run an online
                                business at scale. Get in touch for details.
                            </div>
                            <div className='mt-3 flex justify-start pl-12 sm:justify-start'>
                                <ul>
                                    <li className='flex items-center'>
                                        <div className='rounded-full fill-current p-2 text-green-700'>
                                            <svg
                                                className='h-6 w-6 align-middle'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                            </svg>
                                        </div>
                                        <span className='ml-3 text-lg text-gray-400'>
                                            No setup
                                        </span>
                                    </li>
                                    <li className='flex items-center'>
                                        <div className=' rounded-full fill-current p-2 text-green-700'>
                                            <svg
                                                className='h-6 w-6 align-middle'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                            </svg>
                                        </div>
                                        <span className='ml-3 text-lg text-gray-400'>
                                            Hidden fees
                                        </span>
                                    </li>
                                    <li className='flex items-center'>
                                        <div className=' rounded-full fill-current p-2 text-green-700'>
                                            <svg
                                                className='h-6 w-6 align-middle'
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                            </svg>
                                        </div>
                                        <span className='ml-3 text-lg text-gray-400'>
                                            Original
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex items-center p-8  uppercase'>
                                <button className='mt-3 block w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-gray-700'>
                                    Select
                                </button>
                            </div>
                        </div>
                        <div className='relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-ml-4 lg:w-1/3'>
                            <div className='overflow-hidden rounded-lg bg-white/10 text-white shadow-lg backdrop-blur'>
                                <div className='sm:text-md mx-auto mt-2 block max-w-sm px-8 text-left text-sm text-white lg:px-6'>
                                    <h1 className='p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide'>
                                        Enterprise
                                    </h1>
                                    <h2 className='pb-6 text-center text-sm text-gray-400'>
                                        $39 /mo
                                    </h2>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sit error repellat, est
                                    facilis dolorem nemo asperiores aliquid!
                                    Voluptates, qui.
                                </div>
                                <div className='mt-3 flex flex-wrap px-6'>
                                    <ul>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                Electric
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                Monthly
                                            </span>
                                        </li>
                                        <li className='flex items-center'>
                                            <div className=' rounded-full fill-current p-2 text-green-700'>
                                                <svg
                                                    className='h-6 w-6 align-middle'
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                >
                                                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                                                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                                                </svg>
                                            </div>
                                            <span className='ml-3 text-lg text-gray-400'>
                                                No setup
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div className='flex items-center p-8  uppercase'>
                                    <button className='mt-3 block w-full rounded-lg bg-black px-6 py-3 text-lg font-semibold text-white shadow-xl hover:bg-gray-700'>
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
