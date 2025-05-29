import React from 'react';
import { gsap } from 'gsap';

const Resume = () => {
  React.useEffect(() => {
    // Animate header and container for a dynamic entrance.
    gsap.from("#resumeHeading", { duration: 1, opacity: 0, y: -50, ease: "power4.out" });
    gsap.from("#resumeContainer", { duration: 1.5, opacity: 0, y: 50, ease: "power4.out", delay: 0.5 });
  }, []);

  return (
    <div id="resumeContainer" className="container mx-auto px-6 py-16">
      {/* Animated Header */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 id="resumeHeading" className="text-5xl font-bold bg-gradient-to-r from-primary to-accent text-black drop-shadow-xl inline-block px-8 py-4 rounded-lg">
          My Resume
        </h1>
      </div>
      {/* PDF Embed Container without side borders */}
      <div className="shadow-2xl rounded-xl overflow-hidden mx-auto max-w-4xl">
        <iframe src="Eliezer-Then-Resume.pdf#toolbar=0" width="100%" height="700px" className="bg-white" style={{ border: 'none' }}>
          This browser does not support PDFs. Please download the resume to view it: 
          <a href="Eliezer-Then-Resume.pdf#toolbar=0" className="no-underline">Download Resume</a>.
        </iframe>
      </div>
      {/* Download Resume Button */}
      <div className="mt-8 flex justify-center">
        <a href="Eliezer-Then-Resume.pdf#toolbar=0" download className="bg-secondary bg-gray-400 hover:bg-gray-700 transition-colors font-semibold py-3 px-8 rounded-full shadow-lg text-white no-underline">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;