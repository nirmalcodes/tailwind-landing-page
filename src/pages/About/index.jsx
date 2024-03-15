const About = () => {
    return (
        <>
            <section
                id='about'
                className='flex min-h-[100vh] w-full flex-col items-center justify-center pb-10 pt-16'
            >
                <div className='container mx-auto'>
                    <h2 className='mb-8 text-center text-[clamp(2rem,_6vw_+_1rem,_4.5rem)] font-medium text-white'>
                        About us
                    </h2>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div className='flex flex-1 items-center justify-center'>
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
                        <div className='flex-1 p-4'>
                            <h4 className='mb-4 text-4xl text-white'>
                                Who we are
                            </h4>
                            <p className='text-lg text-white'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Enim error consequatur vero
                                necessitatibus quasi, laborum distinctio in!
                                Expedita nihil inventore, unde optio, quibusdam
                                nobis ipsum perferendis, tempore ex temporibus
                                mollitia. Rem maiores esse maxime aliquid ipsum
                                ea eaque a explicabo numquam doloremque iste
                                voluptatem id totam cum deleniti quam
                                consequatur facere dolor officiis magni,
                                laboriosam possimus fugit neque. Beatae, quis?
                                Consectetur odio consequuntur eaque id dolores
                                repudiandae quisquam dolor laudantium accusamus
                                culpa qui, at impedit deserunt ratione sapiente
                                eius velit tempora? Odio, quam fugiat! Saepe
                                veritatis incidunt iure perferendis deserunt.
                                Harum blanditiis, odio esse beatae fugit,
                                deleniti facilis ex sunt dolorem velit, dicta
                                consequuntur porro nulla necessitatibus in sequi
                                nesciunt sed saepe veniam ad? Perspiciatis fugit
                                quasi ex repellendus consequuntur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
