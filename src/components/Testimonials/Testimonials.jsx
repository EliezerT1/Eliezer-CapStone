import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Thumbs } from 'swiper/modules';
import Ashwin from '/assets/Ashwin.jpg';
import Evelyn from '/assets/Evelyn.jpg';
import Pearson from '/assets/Pearson.jpg';
import Daniel from '/assets/Daniel.jpg'
import Lennart from '/assets/Lennart.jpg';


const testimonials = [
	{
		text: `I had the pleasure of working with and seeing Eliezer across several impactful projects, including our in-office Photobooth, Cloud Governance initiatives, Gen AI v2, and the Pill Dispenser prototype. Eliezer played a key role in enhancing the Photobooth experience—implementing frontend improvements in React, refining the Python backend, and even making hands-on adjustments to the physical hardware. In our Cloud Governance efforts, he was instrumental in ensuring our cloud resources were secure, compliant, and properly maintained. For the Pill Dispenser IoT device, Eliezer helped bring a fully functional prototype to life, which was successfully showcased to clients. His ability to work across both software and hardware, while consistently delivering high-quality results, made him an invaluable part of the team.`,
		name: 'Ashwin Pozath',
		title: 'Tech Innovation Eng Assoc Manager',
		img: Ashwin,
	},
	{
		text: `I've had the pleasure of working with Eliezer since he joined Tech Innovation. During his time here, he transformed into a confident junior developer and achieving innovator. While he started his work on various Tech Innovation projects, he later brought his talents to our security and governance team. Thanks to his efforts, we have decommissioned hundreds of assets bring in $40k+ in cloud spend savings. He continues to strive forward by automating new portions of governance and build a larger management platform. Eliezer's drive for innovation, adaptability, and adherence to delivering excellence, make him an irreplaceable team member.`,
		name: 'Evelyn Stellar',
		title: 'Advanced App Engineering Specialist',
		img: Evelyn,
	},
	{
		text: `I had the pleasure of working with and seeing Eliezer across several impactful projects, including our in-office Photobooth, Cloud Governance initiatives, Gen AI v2, and the Pill Dispenser prototype. Eliezer played a key role in enhancing the Photobooth experience—implementing frontend improvements in React, refining the Python backend, and even making hands-on adjustments to the physical hardware. In our Cloud Governance efforts, he was instrumental in ensuring our cloud resources were secure, compliant, and properly maintained. For the Pill Dispenser IoT device, Eliezer helped bring a fully functional prototype to life, which was successfully showcased to clients. His ability to work across both software and hardware, while consistently delivering high-quality results, made him an invaluable part of the team.`,
		name: 'Daniel Steinberg',
		title: 'Advanced App Engineering Specialist',
		img: Daniel,
	},
	{
		text: `I had the pleasure of working with and seeing Eliezer across several impactful projects, including our in-office Photobooth, Cloud Governance initiatives, Gen AI v2, and the Pill Dispenser prototype. Eliezer played a key role in enhancing the Photobooth experience—implementing frontend improvements in React, refining the Python backend, and even making hands-on adjustments to the physical hardware. In our Cloud Governance efforts, he was instrumental in ensuring our cloud resources were secure, compliant, and properly maintained. For the Pill Dispenser IoT device, Eliezer helped bring a fully functional prototype to life, which was successfully showcased to clients. His ability to work across both software and hardware, while consistently delivering high-quality results, made him an invaluable part of the team.`,
		name: 'Pearson Reese',
		title: 'Tech Innovation Eng Assoc Manager',
		img: Pearson,
	},
	{
		text: `I had the pleasure of working with and seeing Eliezer across several impactful projects, including our in-office Photobooth, Cloud Governance initiatives, Gen AI v2, and the Pill Dispenser prototype. Eliezer played a key role in enhancing the Photobooth experience—implementing frontend improvements in React, refining the Python backend, and even making hands-on adjustments to the physical hardware. In our Cloud Governance efforts, he was instrumental in ensuring our cloud resources were secure, compliant, and properly maintained. For the Pill Dispenser IoT device, Eliezer helped bring a fully functional prototype to life, which was successfully showcased to clients. His ability to work across both software and hardware, while consistently delivering high-quality results, made him an invaluable part of the team.`,
		name: 'Lennart Lewis',
		title: 'Tech Architecture Analyst',
		img: Lennart,
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
			<h1 className="text-center text-6xl font-semibold pt-[42px] pl-[24px]">
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
						<SwiperSlide className="!p-6" key={idx}>
							<div
								className="flex flex-col items-center gap-7 rounded-3xl shadow-lg bg-[#d9eaf9] transition-all duration-300 cursor-pointer max-w-md w-full p-10"
								onClick={() => setModalIdx(idx)}
							>
								{/* Avatar image above the card */}
								{t.img && (
									<img
										src={t.img}
										alt={t.name}
										className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white mb-4"
									/>
								)}
								<h2 className="text-lg font-semibold text-center transition-all duration-300">
									{getPreview(t.text)}
								</h2>
								<div className="flex flex-col items-center gap-1 mt-2">
									<p className="text-lg">{t.name}</p>
									<p className="text-md text-gray-600 text-center">{t.title}</p>
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
					<div className="absolute inset-0 bg-opacity-30 backdrop-blur-sm" />
					<div
						className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 relative z-10 flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Large avatar in modal */}
						{testimonials[modalIdx].img && (
							<img
								src={testimonials[modalIdx].img}
								alt={testimonials[modalIdx].name}
								className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white mb-8"
							/>
						)}
						<button
							className="absolute top-3 right-4 text-3xl text-gray-400 hover:text-gray-700"
							onClick={() => setModalIdx(null)}
							aria-label="Close"
						>
							&times;
						</button>
						<h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
							{testimonials[modalIdx].name}
							<span className="block text-lg font-normal text-gray-500">
								{testimonials[modalIdx].title}
							</span>
						</h2>
						<p className="text-lg text-gray-700 mb-2 text-center">
							{testimonials[modalIdx].text}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Testimonials;