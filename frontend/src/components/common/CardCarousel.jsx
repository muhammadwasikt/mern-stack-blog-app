import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Card from './Card';

const CardCarousel = ({ blogList }) => {

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            loop={true}
        >
            {blogList?.slice(0, 5).map((data, index) => (
                <SwiperSlide key={index}>
                    <Card
                        key={index}
                        file={data?.file}
                        description={{ __html: data?.description }}
                        category={data?.category}
                        title={data?.title}
                        id={data?._id}
                        path='blog-detail' />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CardCarousel;
