import React from "react";

const Gallery = () => (
  <div className="min-h-screen py-16 px-4 flex flex-col items-center">
    <div className="mt-20 w-full flex flex-col items-center">
      <h1 className="text-6xl font-bold mb-12 text-center text-black drop-shadow">
        Extracurricular
      </h1>
      <div className="flex flex-col gap-16 w-full max-w-2xl">
        {/* First image and caption in a clean card */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <img
            src="/assets/Image2.jpg"
            alt="Meet & Greet Panel"
            className="rounded-xl shadow-md object-cover w-full mb-4 brightness-150"
            style={{ maxHeight: 350 }}
          />
          <h2 className="text-3xl font-semibold text-slate-800 mb-2 text-center">
            Meet & Greet Panel
          </h2>
          <p className="text-2xl text-gray-700 text-center">
            A vibrant panel session where we shared stories, answered questions, and connected with the new faces of the Apprenticeship. I believe this is the first time I spoke in a panel!
          </p>
        </div>
        {/* Second image and caption in a clean card */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <img
            src="/assets/Image1.jpg"
            alt="Balancing Work & School"
            className="rounded-xl shadow-md object-cover w-full mb-4"
            style={{ maxHeight: 350 }}
          />
          <h2 className="text-3xl font-semibold text-slate-800 mb-2 text-center">
            Balancing Work & School
          </h2>
          <p className="text-2xl text-gray-700 text-center">
            Lead a panel discussion on how to juggle academics and professional life. The discussion was inspiring and full of practical advice!
          </p>
        </div>
      </div>
      <div className="mt-14 text-center max-w-2xl">
        <p className="text-2xl font-medium text-slate-700 ">
          These experiences helped me grow my public speaking skills and confidence. Presenting in front of a large audience and answering questions on the spot was a milestone I’ll always cherish!
        </p>
      </div>
    </div>
  </div>
);

export default Gallery;