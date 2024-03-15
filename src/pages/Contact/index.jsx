const Contact = () => {
    return (
        <>
            <section
                id='contact'
                className='flex min-h-[100vh] w-full flex-col items-center justify-center pb-10 pt-16'
            >
                <div className='container mx-auto p-4'>
                    <h2 className='mb-8 text-center text-[clamp(2rem,_6vw_+_1rem,_4.5rem)] font-medium text-white'>
                        Contact us
                    </h2>
                    <div className='flex gap-4'>
                        <div className='hidden flex-1 items-center justify-center lg:flex'>
                            <div className='relative grid w-fit grid-cols-2 p-4'>
                                <div className='pr-3'>
                                    <div className='w-[130px] overflow-hidden rounded-2xl shadow-xl lg:h-[180px] lg:w-[180px] xl:h-[250px] xl:w-[250px]'>
                                        <img
                                            src='https://picsum.photos/800/800?random=1'
                                            alt='img1'
                                            loading='eager'
                                            className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                        />
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <div className='w-[130px] overflow-hidden rounded-2xl shadow-xl lg:h-[180px] lg:w-[180px] xl:h-[250px] xl:w-[250px]'>
                                        <img
                                            src='https://picsum.photos/800/800?random=2'
                                            alt='img2'
                                            loading='eager'
                                            className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                        />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='w-[130px] overflow-hidden rounded-2xl shadow-xl lg:h-[180px] lg:w-[180px] xl:h-[250px] xl:w-[250px]'>
                                        <img
                                            src='https://picsum.photos/800/800?random=3'
                                            alt='img3'
                                            loading='eager'
                                            className='h-full w-full transition-all duration-300 ease-in hover:scale-105'
                                        />
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <div className='w-[130px] overflow-hidden rounded-2xl shadow-xl lg:h-[180px] lg:w-[180px] xl:h-[250px] xl:w-[250px]'>
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
                        <div className='flex flex-1 items-center justify-center'>
                            <form
                                autoComplete='off'
                                className='w-full max-w-md rounded-2xl bg-white/10 p-4 backdrop-blur lg:max-w-full'
                            >
                                <div className='mb-4'>
                                    <label
                                        htmlFor='name'
                                        className='mb-2 block text-sm font-medium text-white'
                                    >
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        required
                                        autoComplete='off'
                                        className='w-full rounded-xl bg-white/10 text-white'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='email'
                                        className='mb-2 block text-sm font-medium text-white'
                                    >
                                        Email
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        autoComplete='off'
                                        className='w-full rounded-xl bg-white/10 text-white'
                                    />
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='message'
                                        className='mb-2 block text-sm font-medium text-white'
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name='message'
                                        id='message'
                                        cols='20'
                                        rows='8'
                                        required
                                        autoComplete='off'
                                        className='w-full rounded-xl bg-white/10 text-white'
                                    ></textarea>
                                </div>
                                <div className='flex'>
                                    <button
                                        type='button'
                                        className='ml-auto w-fit min-w-32 cursor-pointer rounded-[2rem] bg-blue-500 px-4 py-2 font-semibold text-white'
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
