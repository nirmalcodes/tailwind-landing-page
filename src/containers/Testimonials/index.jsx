import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import TestimonialCard from '../../components/TestimonialCard';

const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Testimonials = () => {
    return (
        <section
            id='testimonials'
            className='flex min-h-[100vh] w-full flex-col items-center justify-center pb-10 pt-16'
        >
            <div className='w-full'>
                <h2 className='mb-8 text-center text-[clamp(2rem,_6vw_+_1rem,_4.5rem)] font-medium text-white'>
                    What they've said
                </h2>
                <div className='mb-10 w-full px-4'>
                    <Splide
                        options={{
                            gap: '1rem',
                            perPage: 3,
                            perMove: 3,
                            rewind: true,
                            lazyLoad: 'nearby',
                            paginationKeyboard: true,
                            breakpoints: {
                                768: {
                                    perPage: 1,
                                    perMove: 1,
                                },
                                1200: {
                                    perPage: 2,
                                    perMove: 2,
                                },
                            },
                        }}
                        aria-label='testimonials slider'
                    >
                        {testimonials.map((testimonial, index) => {
                            return (
                                <SplideSlide className='pb-8 pt-4' key={index}>
                                    <TestimonialCard />
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
                <div className='mx-auto w-fit cursor-pointer rounded-[2rem] bg-blue-500 px-4 py-2 font-semibold text-white'>
                    Get Started
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
