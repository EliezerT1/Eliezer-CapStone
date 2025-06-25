import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Thumbs } from 'swiper/modules';
import Ashwin from '/assets/Ashwin.jpg';

const testimonials = [
	{
		text: `I had the pleasure of working with and seeing Eliezer across several impactful projects, including our in-office Photobooth, Cloud Governance initiatives, Gen AI v2, and the Pill Dispenser prototype. Eliezer played a key role in enhancing the Photobooth experience—implementing frontend improvements in React, refining the Python backend, and even making hands-on adjustments to the physical hardware. In our Cloud Governance efforts, he was instrumental in ensuring our cloud resources were secure, compliant, and properly maintained. For the Pill Dispenser IoT device, Eliezer helped bring a fully functional prototype to life, which was successfully showcased to clients. His ability to work across both software and hardware, while consistently delivering high-quality results, made him an invaluable part of the team.`,
		name: 'Ashwin Pozath',
		title: 'Tech Innovation Eng Assoc Manager',
		img: Ashwin,
	},
	{
		text: 'd hfioewfhioewhfioahsfh saioehfoieshfehsiofeh',
		name: 'pearson reivs',
		title: 'Front ed',
		img: '',
	},
	// ...add more testimonials as needed
];

const getPreview = (text, wordCount = 15) => {
	const words = text.split(' ');
	if (words.length <= wordCount) return text;
	return words.slice(0, wordCount).join(' ') + '...';
};

const Testimonials = () => {
	const [modalIdx, setModalIdx] = useState(null);

	return (
		<>
			<h1 className="text-center text-4xl font-semibold pt-[42px] pl-[24px]">
				{' '}
				Testimonials
			</h1>
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
					className="w-full"
				>
					{testimonials.map((t, idx) => (
						<SwiperSlide className="!p-4" key={idx}>
							<div
								className="flex flex-col items-center gap-5 rounded-2xl shadow-lg w-full p-6 bg-[#d9eaf9] transition-all duration-300 cursor-pointer"
								onClick={() => setModalIdx(idx)}
							>
								{/* Avatar image above the card */}
								{t.img && (
									<img
										src={t.img}
										alt={t.name}
										className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white mb-2" // removed -mt-12
									/>
								)}
								<h2 className="text-md font-semibold text-center transition-all duration-300">
									{getPreview(t.text)}
								</h2>
								<div className="flex flex-col items-center gap-1 mt-2">
									<p className="text-md">{t.name}</p>
									<p className="text-sm text-gray-600">{t.title}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Modal Popup */}
			{modalIdx !== null && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center"
					onClick={() => setModalIdx(null)}
				>
					{/* Blurred background */}
					<div className="absolute inset-0 bg-opacity-30 backdrop-blur-sm" />
					<div
						className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-8 relative z-10 flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Large avatar in modal */}
						{testimonials[modalIdx].img && (
							<img
								src={testimonials[modalIdx].img}
								alt={testimonials[modalIdx].name}
								className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white mb-6" // removed -mt-20
							/>
						)}
						<button
							className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700"
							onClick={() => setModalIdx(null)}
							aria-label="Close"
						>
							&times;
						</button>
						<h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
							{testimonials[modalIdx].name}
							<span className="block text-sm font-normal text-gray-500">
								{testimonials[modalIdx].title}
							</span>
						</h2>
						<p className="text-base text-gray-700 mb-2 text-center">
							{testimonials[modalIdx].text}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Testimonials;