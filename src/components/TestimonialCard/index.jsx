const TestimonialCard = ({ message, name, avatar, designation }) => {
    return (
        <div className='rounded-xl bg-white/10 p-4 text-center backdrop-blur'>
            <svg
                className='mx-auto mb-3 h-10 w-10 text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 18 14'
            >
                <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
            </svg>
            <blockquote>
                <p className='text-xl font-medium italic text-white'>
                    {`"${message ?? 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sunt, incidunt adipisci magnam ducimus sequi omnis eveniet quidem voluptates unde laborum similique hic est nulla dignissimos? Ex, obcaecati ipsum. Deleniti!'}"`}
                </p>
            </blockquote>
            <div className='mt-6 flex items-center justify-center space-x-3'>
                <img
                    className='h-6 w-6 rounded-full'
                    src={
                        avatar ??
                        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                    }
                    alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-700'>
                    <cite className='pe-3 font-medium text-white'>
                        {name ?? 'John Doe'}
                    </cite>
                    <cite className='ps-3 text-sm text-gray-400'>
                        {designation ?? 'CEO at Google'}
                    </cite>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
