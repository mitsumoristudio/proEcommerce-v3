import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import mockBrands from "../assets/mockdata/mockProducts";

const SwipeBrandLogos = (props) => {
    const params = {
        className: `pb-5`,
        slidesPerView: 2,
        modules: [Pagination],
        spaceBetween: 12,
        loop: true,
        roundLengths: true,
        pagination: props.pagination !== undefined && {
            type: "bullets",
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
            991: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
        },
    }
    return (
        <Swiper {...params}>
            {mockBrands.map((brand, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        className={"h-auto align-middle justify-center flex"}
                    >
                        <img className={"w-auto"} src={brand.image} alt={brand.title} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwipeBrandLogos;