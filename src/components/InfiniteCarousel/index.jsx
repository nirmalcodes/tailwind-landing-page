import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import TestimonialCard from '../TestimonialCard';

const InfiniteCarousel = ({ data }) => {
    return (
        <Splide
            aria-label='trusted customers infinite carousel'
            options={{
                type: 'loop',
                gap: '1rem',
                arrows: false,
                pagination: false,
                drag: 'free',
                focus: 'center',
                perPage: 5,
                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    1200: {
                        perPage: 6,
                    },
                },
                autoScroll: {
                    speed: 1,
                },
            }}
            extensions={{ AutoScroll }}
        >
            {data.map((item, index) => {
                return (
                    <SplideSlide key={index}>
                        <TestimonialCard />
                    </SplideSlide>
                );
            })}
        </Splide>
    );
};

export default InfiniteCarousel;
