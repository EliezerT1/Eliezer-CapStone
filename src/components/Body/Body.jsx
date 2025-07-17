import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TypeWriterQuote from '../TypeWriterQuote';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';

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
                <div className="flex justify-center items-center pt-[64px] pb-[64px] px-[48px] max-md:flex-col w-full " id='about-me'>
                    <div className="flex flex-col gap-7 items-center text-center w-full md:w-1/2">
                        <h2 className='text-xl font-semibold'>Computer | Programmer</h2>
                        <h1 className="text-7xl font-semibold w-full">Eliezer Then</h1>
                        {/* Line below the name */}
                        {/* <div className="hidden md:block w-full">
                            <div className="h-1 bg-black rounded-full mt-2 mb-4" style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 0 }} />
                        </div> */}
                                     
                        <TypeWriterQuote 
                        text="Powered by curiosity and integrity" 
                        speed={120}>
                        </TypeWriterQuote>

                        <p className="text-2xl w-full">
                            Hello, my name is Eliezer. I’m a first-generation Dominican American from the Bronx and the first in my family to attend college. I’m currently pursuing a B.S. in Computer Science with a minor in Cybersecurity at Fordham University, where I balance full-time studies with an intensive technology apprenticeship.
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-shrink-0 w-full md:w-1/2">
                        <img
                            src="assets/me2.jpg"
                            alt="Eliezer Then"
                            className="w-[400px] h-[100px] object-cover rounded-2xl shadow-lg mt-10 border-2" // Added mt-10 for margin-top
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
                className='w-full'
                id="timeline"
            >
                {/* ───────────── TIMELINE ───────────── */}
                <h2 className="text-6xl font-bold text-center mb-16 tracking-tight">Timeline</h2>
                <div className="relative w-full flex justify-center">
                    {/* Timeline rail */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-2 bg-[#2D2D2D] rounded-full z-0 shadow-lg" />
                    <div className="w-full max-w-6xl px-4 mx-auto z-10">
                        {/* Timeline events */}
                        {[
    {
        title: "Fordham University",
        date: "August 2024 – May 2028",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Currently pursuing a B.S. in Computer Science with a minor in Cybersecurity.</li>
            </ul>
        ),
        extra: <p className="mt-1 font-semibold">GPA: 3.53</p>
    },
    {
        title: "Hives Project, Accenture",
        date: "February 2024 – December 2024",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Photo Booth: Developed and troubleshot the Photobooth Hive Application.</li>
                <li>Gen AI V2: Built a website to display content for the Gen AI V2 Hive project.</li>
            </ul>
        ),
    },
    {
        title: "Liquid Studios Apprentice, Accenture",
        date: "January 2024 – Present",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Gained fundamental software development skills and principles through comprehensive training and hands-on experience.</li>
                <li>Managing security issues relating to overdue compliance, ensuring adherence to industry standards.</li>
                <li>Implemented cloud governance frameworks to ensure compliance and optimize resource management.</li>
                <li>Collaborated with cross-functional teams to develop and prototype innovative solutions.</li>
                <li>Helped achieve $40.6K in cost savings by reducing spend, securing cloud credits, and initiating cost passthroughs.</li>
            </ul>
        ),
    },
    {
        title: "Peer Mentorship, Accenture",
        date: "October 2023 – Present",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Mentored new apprentices balancing academic and corporate work.</li>
                <li>Provided college-application and professional-development help.</li>
            </ul>
        ),
    },
    {
        title: "New York Life, Accenture",
        date: "April 2023 – June 2023",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Worked on creating 2-3 test cases a day with another Youth Apprentice.</li>
                <li>Participated in Edureka training daily for 2+ hours to further improve Java skills.</li>
                <li>Collaborated in the design and execution of comprehensive test cases to ensure software quality and functionality.</li>
            </ul>
        ),
    },
    {
        title: "Technology Apprentice School, Accenture",
        date: " January 2022 – February 2022",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
               <li>Led AI/chatbot challenge presentation to senior leadership.</li>
               <li>Completed Technology Apprentice School with skills in app/website development.</li>
                <li>Promoted AI learning via Viva Engage internal posts.</li>
            </ul>
        ),
    },
    {
        title: "CareerWise NY Bootcamp",
        date: "July 2022 – October 2022",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Completed professional training in public speaking, Microsoft Suite, and teamwork.</li>
                <li>Selected for Accenture's Youth Apprenticeship Program.</li>
            </ul>
        ),
    },
    {
        title: "University Heights High School",
        date: "September 2020 – June 2024",
        desc: (
            <ul className="list-disc mt-2 text-lg space-y-1">
                <li>Excelled in computer science and math courses, discovered passion for technology and programming, and joined CareerWise.</li>
            </ul>
        ),
            extra: <p className="mt-1 font-semibold">GPA: 3.2</p>
        },
]
.reverse()
.map((event, idx) => (
    <div
        key={event.title}
        className="relative flex mb-14 group"
    >
        {/* Dot in the center */}
        <span className="absolute left-1/2 -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-white border-4 group-hover:border-[#d9eaf9] transition-all duration-300 shadow-lg" />
        
        {/* Left side (card or spacer) */}
        <div className={`w-1/2 flex ${idx % 2 === 0 ? 'justify-end pr-8' : 'justify-end pr-8'}`}>
            {idx % 2 === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-xl border border-blue-100 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-xl"
                >
                    <h3 className="text-xl font-semibold text-slate-600">{event.title}</h3>
                    <p className="font-medium mt-1 text-gray-500">{event.date}</p>
                    <div className="mt-2 text-sm text-gray-700">{event.desc}</div>
                    {event.extra}
                </motion.div>
            )}
        </div>
        {/* Center spacer for dot */}
        <div className="w-0 md:w-12" />
        {/* Right side (card or spacer) */}
        <div className={`w-1/2 flex ${idx % 2 !== 0 ? 'justify-start pl-8' : 'justify-start pl-8'}`}>
            {idx % 2 !== 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-xl border border-blue-100 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-xl"
                >
                    <h3 className="text-xl font-semibold text-slate-600">{event.title}</h3>
                    <p className="font-medium mt-1 text-gray-500">{event.date}</p>
                    <div className="mt-2 text-sm text-gray-700">{event.desc}</div>
                    {event.extra}
                </motion.div>
            )}
        </div>
    </div>
))}
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
                id="projects"
            >
                <Projects />
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
                className='w-full mb-24'
                id="testimonials"
            >
                <Testimonials />
            </motion.section>
        </>
    );
};

export default Body;