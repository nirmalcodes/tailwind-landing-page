import { lazy, useRef } from 'react';

import Hero from '../../containers/Hero';
const Features = lazy(() => import('../../containers/Features'));
const Testimonials = lazy(() => import('../../containers/Testimonials'));

const Home = () => {
    const FeaturesnRef = useRef(null);

    return (
        <>
            <Hero scrollTargetRef={FeaturesnRef} />
            <Features refName={FeaturesnRef} />
            <Testimonials />
        </>
    );
};

export default Home;
