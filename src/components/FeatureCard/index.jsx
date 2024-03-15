const FeatureCard = ({ imgUrl, title, text }) => {
    const generateRandomNumber = () => {
        // Generate a random number between 1 and 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber;
    };

    return (
        <div className='group flex flex-col justify-center gap-4 rounded-3xl md:flex-row md:even:flex-row-reverse'>
            <div className='flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-tr from-gray-500 to-gray-400 md:h-[230px] md:w-[230px] lg:h-[300px] lg:w-[300px]'>
                <img
                    src={
                        imgUrl ??
                        `https://picsum.photos/1280/720?random=${generateRandomNumber()}`
                    }
                    alt='img'
                    loading='lazy'
                    className='h-full w-full object-cover'
                />
            </div>
            <div className='max-w-xl text-white md:py-8 md:group-odd:pr-8 md:group-even:pl-8 lg:group-odd:pr-20 lg:group-even:pl-20'>
                <h2 className='text-4xl font-semibold'>{title ?? 'Title'}</h2>
                <p className='text-lg'>
                    {text ??
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Deleniti deserunt architecto iusto consectetur, blanditiisharum libero repellendus facilis provident. Tenetur nemoquisquam illum, placeat quo modi corrupti? Veniam, estharum.'}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;
