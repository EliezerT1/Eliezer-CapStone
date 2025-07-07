import React from "react";

const Gallery = () => (
  <div className="min-h-screen py-16 px-4 flex flex-col items-center">
    <div className="mt-20 w-full flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-12 text-center text-black drop-shadow">
        My Apprenticeship Through Pictures
      </h1>
      {/* Gallery grid */}
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {/* First row: 3 images */}
        <div className="flex flex-row gap-8 justify-center">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col items-center flex-1 group relative">
            <img
              src="/assets/Image2.jpg"
              alt="Meet & Greet Panel"
              className="rounded-xl shadow-md object-cover w-full h-[340px] mb-2 brightness-150 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold text-white drop-shadow-lg px-6 py-2 rounded-xl text-center">
                Meet & Greet Panel
              </span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col items-center flex-1 group relative">
            <img
              src="/assets/Image1.jpg"
              alt="Balancing Work & School"
              className="rounded-xl shadow-md object-cover w-full h-[340px] mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold text-white drop-shadow-lg px-6 py-2 rounded-xl text-center">
                Youth Apprenticeship Panel
              </span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex flex-col items-center flex-1 group relative">
            <img
              src="/assets/KenechiAwayParty.jpg"
              alt="Team Gathering on Couch"
              className="rounded-xl shadow-md object-cover w-full h-[340px] mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold text-white drop-shadow-lg px-6 py-2 rounded-xl text-center">
                Kenechi Goodbye Party
              </span>
            </div>
          </div>
        </div>
        {/* Second row: 2 images */}
        <div className="flex flex-row gap-8 justify-center">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex items-center flex-1 group relative">
            <img
              src="/assets/Image3.jpeg"
              alt="Office Event"
              className="rounded-xl shadow-md object-cover w-full h-[340px] mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold text-white drop-shadow-lg px-6 py-2 rounded-xl text-center">
                Day of Service
              </span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow-lg p-4 flex items-center flex-1 group relative">
            <img
              src="/assets/CoreTeam&Eliezer.jpg"
              alt="Office Event"
              className="rounded-xl shadow-md object-cover w-full h-[340px] mb-2 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold text-white drop-shadow-lg px-6 py-2 rounded-xl text-center">
                College Congratulations
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 text-center max-w-5xl">
        <p className="text-2xl font-medium text-slate-700">
          These experiences helped me grow my public speaking skills and confidence.
          Presenting in front of a large audience and answering questions on the spot
          was a milestone I’ll always cherish! I also got to become so much closer to
          my fellow apprentices and mentors, and I’m grateful for the friendships I
          made along the way.
        </p>
      </div>
    </div>
  </div>
);

export default Gallery;