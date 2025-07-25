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
		title: 'Tech Innovation Eng Associate Manager',
		img: Ashwin,
	},
	{
		text: `I've had the pleasure of working with Eliezer since he joined Tech Innovation. During his time here, he transformed into a confident junior developer and achieving innovator. While he started his work on various Tech Innovation projects, he later brought his talents to our security and governance team. Thanks to his efforts, we have decommissioned hundreds of assets bring in $40k+ in cloud spend savings. He continues to strive forward by automating new portions of governance and build a larger management platform. Eliezer's drive for innovation, adaptability, and adherence to delivering excellence, make him an irreplaceable team member.`,
		name: 'Evelyn Stellara',
		title: 'Advanced App Engineering Specialist',
		img: Evelyn,
	},
	{
		text: `Eliezer quickly becomes an expert at whatever complex technology you can throw at him. He can build complex apps end-to-end, like a mixed reality photobooth kiosk that had front-end, back-end, and AI components. He also has very strong cloud experience, serving as a cloud admin for AWS and Azure environments with hundreds of users and thousands of resources.`,
		name: 'Daniel Steinberg',
		title: 'Advanced App Engineering Specialist',
		img: Daniel,
	},
	{
		text: `I’ve had the privilege of working closely with Eliezer over the past two years of his program, supporting a wide range of projects and initiatives. From the early days of navigating beginner coding tutorials with him to today, I’ve witnessed a remarkable journey of growth — not just in technical skill, but in adaptability and professionalism within a corporate environment. What stands out most is his pivotal role in mastering and supporting the seven 1MW Interactive Hives. These systems, which integrate advanced software and hardware technologies, were initially managed and supported by a third-party provider. Thanks in large part to Eliezer's dedication, technical, and critical thinking acumen, Accenture was able to confidently take full ownership of the Hives. His ability to quickly learn complex systems, share knowledge, and support the team made a real impact on our success.Whether tackling new programming challenges, adapting to corporate ways of working, or stepping up during transitions, Eliezer consistently demonstrated initiative and a collaborative spirit. I’m grateful for the opportunity to have worked alongside him and to have gotten a front row seat to see his incredible growth.`,
		name: 'Pearson Reese',
		title: 'Tech Innovation Eng Associate Manager',
		img: Pearson,
	},
	{
		text: `I've had the pleasure of working with Eliezer through the One Manhattan West initiative as well as the Cloud Governance team. He brings a calm, thoughtful approach to problem-solving and shows a strong willingness to learn. As a junior developer, he's contributed to front-end development efforts and steadily expanded his skill set into backend work. His adaptability and curiosity have made him a reliable and valuable teammate across both initiatives. With his drive and growth mindset, I’m confident Eliezer will continue to thrive and make an even greater impact as he progresses in his career. Eliezer has a bright future ahead.`,
		name: 'Lennart Lewis',
		title: 'Tech Architecture Analyst',
		img: Lennart,
	},
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
						<SwiperSlide className="!p-6 overflow-visible" key={idx}>
							<div
								className="flex flex-col items-center gap-5 rounded-3xl shadow-lg bg-[#d9eaf9] transition-all duration-300 cursor-pointer max-w-md w-full p-8 h-[320px] overflow-visible relative"
								onClick={() => setModalIdx(idx)}
								style={{ marginTop: "48px" }} // <-- Move the card down
							>
								{/* Avatar image above the card, 3/5 outside */}
								{t.img && (
									<div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-40px' }}>
										<img
											src={t.img}
											alt={t.name}
											className="w-24 h-24 rounded-full object-cover shadow-lg border-3 border-[#d9eaf9]"
											style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
										/>
									</div>
								)}
								<div className="flex flex-col items-center gap-4 pt-[60px] w-full h-full">
									<h2 className="text-base font-semibold text-center transition-all duration-300 min-h-[96px] flex items-center justify-center">
										{getPreview(t.text, 18)}
									</h2>
									<div className="flex flex-col items-center gap-1 mt-2">
										<p className="text-lg">{t.name}</p>
										<p className="text-md text-gray-600 text-center">{t.title}</p>
									</div>
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