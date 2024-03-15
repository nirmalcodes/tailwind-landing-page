import FeatureCard from '../../components/FeatureCard';

const Features = ({ refName }) => {
    return (
        <>
            <section
                id='features'
                ref={refName}
                className='flex min-h-[100vh] w-full items-center px-4 pt-16 pb-10'
            >
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-8'>
                        <FeatureCard />
                        <FeatureCard />
                        <FeatureCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
