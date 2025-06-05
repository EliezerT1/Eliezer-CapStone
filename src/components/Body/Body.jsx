import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TypeWriterQuote from '../TypeWriterQuote';

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
                    damping: 20
                }}
                className='w-full'
            >
                <div className="flex justify-center items-center pt-[64px] pb-[64px] px-[48px] max-md:flex-col w-full">
                    <div className="flex flex-col gap-7 items-center text-center w-full md:w-1/2">
                        <h2 className='text-xl font-semibold'>Computer | Programer</h2>
                        <h1 className="text-7xl font-semibold w-full">Technology Apprentice</h1>
                        
                        <TypeWriterQuote 
                        text="Powered by curiosity and integrity" 
                        speed={120}>
                        </TypeWriterQuote>

                        <p className="text-sm w-full" id='about me'>
                            I’m Eliezer Then, a first-generation Dominican-American from the Bronx and the very first in my family to attend college. I’m currently pursuing a B.S. in Computer Science with a minor in Cybersecurity at Fordham University , where I balance full-time studies with an intensive tech apprenticeship
                        </p>
                        <button className='bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center'>
                            <a href="https://www.linkedin.com/in/eliezer-then/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
                                LinkedIn
                            </a>
                        </button>
                    </div>
                    <div className="flex justify-center items-center flex-shrink-0 w-full md:w-1/2">
                        <img
                            src="assets/me.jpg"
                            alt="Eliezer Then"
                            className="w-[400px] h-[500px] object-cover rounded-2xl shadow-lg"
                            style={{ minWidth: 400, minHeight: 500 }}
                        />
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
                    damping: 20
                }}
                className='w-full'id='timeline '>
                    {/* ───────────── TIMELINE ───────────── */}
<h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>

{/* Center rail */}
<div className="relative max-w-5xl mx-auto">
  <span
    aria-hidden
    className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200"
  />

  {/* 1. CareerWise NY Bootcamp */}
  <div className="mb-10 flex justify-start md:pr-8">
    <div className="w-full md:w-1/2">
      <div className="p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">CareerWise NY Bootcamp</h3>
        <p className="font-medium mt-1">July 2022 – October 2022</p>
        <p className="mt-2 text-sm">
          Completed professional training in public speaking, Microsoft Suite,
          and teamwork. Selected for Accenture's Youth Apprenticeship
          Program.
        </p>
      </div>
    </div>
  </div>

  {/* 2.HS */}
  <div className="mb-10 flex justify-end md:pl-8">
    <div className="w-full md:w-1/2 ">
        <h3 className="text-xl font-semibold">University Heights High School</h3>
      <div className=" p-6 rounded-xl shadow-lg">
        <p className="font-medium mt-1">September 2020 – June 2024</p>
        <p className="mt-2 text-sm">
          
        </p>
        <p className="mt-1 font-semibold">GPA: 3.2</p>
      </div>
    </div>
  </div>

  {/* 3. Technology Youth Apprentice */}
  <div className="mb-10 flex justify-start md:pr-8">
    <div className="w-full md:w-1/2">
      <div className=" p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">
          Technology Youth Apprentice, Accenture
        </h3>
        <p className="font-medium mt-1">October 2022 – January 2024</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Led AI/chatbot challenge presentation to senior leadership.</li>
          <li>
            Completed Technology Apprentice School with skills in PM and
            app/website development.
          </li>
          <li>Promoted AI learning via Viva Engage internal posts.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* 4. Peer Mentor */}
  <div className="mb-10 flex justify-end md:pl-8">
    <div className="w-full md:w-1/2">
      <div className=" p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Peer Mentor, Accenture</h3>
        <p className="font-medium mt-1">October 2023 – Present</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>
            Mentored new apprentices balancing academic and corporate work.
          </li>
          <li>Provided college-application and professional-development help.</li>
        </ul>
      </div>
    </div>
  </div>

  {/* 5. HR L&LD Youth Apprentice */}
  <div className="mb-10 flex justify-start md:pr-8">
    <div className="w-full md:w-1/2">
      <div className=" p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">
          HR L&amp;LD Youth Apprentice, Accenture{" "}
          <em className="italic text-sm">(Americas Learning Team)</em>
        </h3>
        <p className="font-medium mt-1">January 2024 – February 2025</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Curated and updated visual content for internal tools.</li>
          <li>
            Supported executive learning sessions and tracked participant
            feedback.
          </li>
          <li>Redesigned the Technology Teachback program.</li>
          <li>Facilitated onboarding via Market Unit sites.</li>
          <li>
            Led compliance tracking for Workplace Harassment Prevention training.
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* 6. Strategy & Consulting Learning Team */}
  <div className="mb-10 flex justify-end md:pl-8">
    <div className="w-full md:w-1/2">
      <div className=" p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">
          Strategy &amp; Consulting Learning Team, Accenture
        </h3>
        <p className="font-medium mt-1">February 2025 – Present</p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Orchestrated Strategy Day events featuring AI-tool training.</li>
          <li>Developed structured faculty prep guides and workshop content.</li>
          <li>
            Organized Consulting Day to showcase Accenture’s methodology.
          </li>
          <li>
            Aligned learning initiatives with current consulting trends and
            client needs.
          </li>
          <li>
            Created content for innovation-focused workshops and Strategy Day.
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* 7. Baruch College */}
  <div className="mb-4 flex justify-start md:pr-8">
    <div className="w-full md:w-1/2">
      <div className=" p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Fordham University</h3>
        <p className="font-medium mt-1">
          August 2024 – May 2028 <span className="opacity-75">(Expected)</span>
        </p>
        <p className="mt-2 text-sm">
           Currently pursuing a B.S. in Computer Science with a minor in Cybersecurity.
        </p>
        <p className="mt-1 font-semibold">GPA: 3.66</p>
      </div>
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
                    damping: 20
                }}
                className='w-full'>
                <h1 className='text-3xl font-bold text-center'>Projects</h1>
                <div className="flex justify-center items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
                    <div className="flex gap-7 max-md:flex-col max-md:justify-center">
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5' />
                            <h2 className='text-xl font-semibold text-black'>Hello | Image</h2>
                            <p className="text-sm text-gray-500 text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5' />
                            <h2 className='text-xl font-semibold text-black'>Hello | Image</h2>
                            <p className="text-sm text-gray-500 text-center">about if jeoihfioewhfohefheoifheiofheoihiof me</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <img src="" alt="" className='w-30 mb-2.5' />
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
                    damping: 20
                }}
                className='w-full'
            >
                <h1 className="text-center text-4xl font-semibold pt-[42px] pl-[24px]"> Testimonials</h1>
                <div className="flex justify-center items-center w-full pt-[42px] pb-[42px] pr-[24px] pl-[24px]">
                    <Swiper
                        modules={[Thumbs, Grid]}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        spaceBetween={50}
                        loop={true}
                        scrollbar={{ draggable: true }}
                        className="max-w-7xl w-full"
                    >
                        <SwiperSlide className='!p-4'>
                            <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                                <h2 className='text-md front-semibold'>
                                    dhfioewfhioewhfioahsfh saioehfoieshfehsiofeh
                                </h2>
                                <div className="flex items-start justify-start gap-2">
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
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
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
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
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
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
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
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
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
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
                                    <img src="" alt="" className='w-14 rounded-full border border-[#f0f8ff]' />
                                    <div className="flex flex-col gap-2 5">
                                        <img src="" alt="" />
                                        <div>
                                            <p className='text-md'>pearson</p>
                                            <p className='text-sm text-gray-500'>Front ed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </motion.section>
        </>
    );
};

export default Body;