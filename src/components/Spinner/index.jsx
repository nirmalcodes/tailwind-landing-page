const Spinner = () => {
    return (
        <div className='fixed inset-0 z-[9999] flex h-[100vh] w-[100vw] items-center justify-center bg-black/20 backdrop-blur'>
            <div className='inline-block animate-pulse bg-gradient-to-br from-[#6889ff] to-[#c668ff] bg-clip-text py-8 text-9xl font-bold leading-none text-transparent'>
                Pixy
            </div>
        </div>
    );
};

export default Spinner;
