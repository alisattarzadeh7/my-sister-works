"use client";

import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import React, {useState} from "react"
import {FreeMode, Navigation, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

interface ISliderProps {

}

const Slider: React.FC<ISliderProps> = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide><img src="/photos/shomare1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare2.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare3.png" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare4.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare5.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare6.jpg" /></SwiperSlide>
                <SwiperSlide>
                            <video width="60%" height="60%" autoPlay controls>
                                <source src="/photos/shomare7.mp4" type="video/mp4" />
                            </video>
                </SwiperSlide>
                <SwiperSlide><img src="/photos/shomare8.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare9.jpg" /></SwiperSlide>
                <SwiperSlide>
                    <video width="60%" height="60%" controls autoPlay>
                        <source src="/photos/shomare10.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide><img src="/photos/shomare11.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare12.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare13.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare14.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare15.png" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare16.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare17.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare18.png" /></SwiperSlide>
                <SwiperSlide>
                    <video width="60%" height="60%" controls autoPlay>
                        <source src="/photos/shomare19.mp4" type="video/mp4" />
                    </video>
                </SwiperSlide>
                <SwiperSlide><img src="/photos/shomare20.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare21.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare22.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare23.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare24.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare25.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare26.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare27.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare28.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare29.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare30.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare31.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare32.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare33.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare34.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare35.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare36.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare37.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare38.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare39.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare40.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare41.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare42.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare43.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare44.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare45.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare46.jpg" /></SwiperSlide>
                <SwiperSlide><img src="/photos/shomare47.jpg" /></SwiperSlide>

            </Swiper>
            <Swiper
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                    <SwiperSlide><img src="/photos/shomare1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare2.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare3.png" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare4.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare5.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare6.jpg" /></SwiperSlide>
                    <SwiperSlide>
                        <video width="60%" height="60%" >
                            <source src="/photos/shomare7.mp4" type="video/mp4" />
                        </video>
                    </SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare8.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare9.jpg" /></SwiperSlide>
                    <SwiperSlide>
                        <video width="60%" height="60%" >
                            <source src="/photos/shomare10.mp4" type="video/mp4" />
                        </video>
                    </SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare11.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare12.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare13.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare14.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare15.png" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare16.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare17.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare18.png" /></SwiperSlide>
                    <SwiperSlide>
                        <video width="60%" height="60%" >
                            <source src="/photos/shomare19.mp4" type="video/mp4" />
                        </video>
                    </SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare20.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare21.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare22.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare23.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare24.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare25.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare26.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare27.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare28.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare29.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare30.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare31.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare32.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare33.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare34.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare35.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare36.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare37.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare38.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare39.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare40.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare41.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare42.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare43.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare44.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare45.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare46.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="/photos/shomare47.jpg" /></SwiperSlide>

                </Swiper>

        </>
    )
}

export default Slider