import {motion} from 'framer-motion';
import React from 'react';
import { Grid, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Body = () => {
    return (
        <>
            <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                damping:20
            }}
            className='w-full '>
                <div className="flex justify-between items-start gap-11 pt-[64px] pb-[464px] pl-[24px] pr-[24px] max-md:items-center max-md:justify-center max-md:flex-col">
                    <div className="flex w-full justify-center max-md:justify-center max-md:items-center">
                        <img src="/1.png" alt="" className='w-[200px]'/>
                    </div>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <h2 className='text-xl font-semibold text-center'>Hello | Image</h2>
                        <h1 className="text-7xl font-semibold w-full text-center">Technology Apprentice</h1>
                        <p className="text-smw-full text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        <button className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>
                            <a href="https://www.linkedin.com/in/eliezer-then/" target="_blank" className="linkedin-btn">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                        </button>
                    </div>

                    <div className="flex w-full justify-center max-md:justify-center max-md:items-center">
                        <img src="/2.png" alt="" />
                    </div>
                </div>
            </motion.section>

            <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                damping:20
            }} className='w-full'>
                <h1 className='text-3xl font-bold text-center'>Projects</h1>
                <div className="flex justify-between items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
                    <div className="flex gap-7 max-md:flex-col max-md:justify-center">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5'/>
                            <h2 className='text-xl font-semibold text-black'>Hello | Image</h2>
                            <p className="text-sm text-gray-500 text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5'/>
                            <h2 className='text-xl font-semibold text-black'>Hello | Image</h2>
                            <p className="text-sm text-gray-500 text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5'/>
                            <h2 className='text-xl font-semibold text-black'>Hello | Image</h2>
                            <p className="text-sm text-gray-500 text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.2,
                damping:20
            }} className='w-full'>
                <h1 className="text-center text-4xl font-semibold pt-[42px] pl-[24px]"> Testimonials</h1>
                <Swiper 
                modules={[Thumbs,Grid]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={50}
                loop={false}
                scrollbar={{ 
                    draggable: true
                }}
                className="pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
                >
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsfh saioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson reivs</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsfhs aioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson reivs</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsfh saioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson reivs</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsfh saioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson reivs</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>  
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsf hsaioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson reivs</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='!p-4'>
                        <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                            <h2 className='text-md front-semibold'>
                                dhfioewfhioewhfioahsfh saioehfoieshfehsiofeh
                            </h2>
                            <div className="flex items-start justify-start gap-2">
                                <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]'/>
                                <div className="flex flex-col gap-2 5">
                                    <img src="" alt=""/>
                                <div>
                                    <p className='text-md'>pearson</p>
                                    <p className='text-sm text-gray-500'>Front ed</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>             
                </Swiper>
            </motion.section>
        </>
    )
}

export default Body;