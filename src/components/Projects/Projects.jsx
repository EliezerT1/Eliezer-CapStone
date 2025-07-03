import React from 'react';

const Projects = () => (
  <section className='w-full py-28 px-8'>
    <h1 className='text-6xl font-bold text-center mb-20'>Projects</h1>
    <div className="flex justify-center items-center">
      <div className="flex gap-24 max-md:flex-col max-md:gap-14 max-md:justify-center w-full max-w-7xl">
        {/* Photobooth */}
        <div className="flex flex-col gap-6 items-center justify-between flex-1 h-[500px]">
          <div className="w-full h-72 flex items-center justify-center overflow-hidden mb-6">
            <img
              src="/assets/Project1.png"
              alt="PhotoBooth"
              className="object-cover w-full h-full rounded-2xl bg-white border-2 border-black"
            />
          </div>
          <h2 className='text-3xl font-bold text-black text-center'>Photobooth</h2>
          <p className="text-xl text-gray-600 text-center">
            PhotoBooth is a web application that allows users to take fun and interactive photos with various filters and effects using Gen AI. On this project I worked on enhancing the UI for user experience.
          </p>
        </div>
        {/* JAIme */}
        <div className="flex flex-col gap-6 items-center justify-between flex-1 h-[500px]">
          <div className="w-full h-72 flex items-center justify-center overflow-hidden mb-6">
            <img
              src="/assets/Project3.png"
              alt="JAIme"
              className="object-cover w-full h-full rounded-2xl bg-white border-2 border-black"
            />
          </div>
          <h2 className='text-3xl font-bold text-black text-center'>JAIme</h2>
          <p className="text-xl text-gray-600 text-center">
            JAIme is a demo prototype that dispenses jelly beans based on user mood and preferences. For this project I mostly worked helping with physically putting the components together.
          </p>
        </div>
        {/* Cloud Governance*/}
        <div className="flex flex-col gap-6 items-center justify-between flex-1 h-[500px]">
          <div className="w-full h-72 flex items-center justify-center overflow-hidden mb-6">
            <img
              src="/assets/Cloud.jpg"
              alt="Cloud Governance"
              className="object-cover w-full h-full rounded-2xl bg-white border-2 border-black"
            />
          </div>
          <h2 className='text-3xl font-bold text-black text-center'>Cloud Governance</h2>
          <p className="text-xl text-gray-600 text-center">
            Cloud Governance is a team in Liquid Studio that helps organizations manage their cloud resources effectively. I contributed by developing tools like scripts and an auto-tagging system.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;