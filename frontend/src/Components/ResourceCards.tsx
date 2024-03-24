import React from 'react';
import Webinars from '../assets/webinars.jpg';
import Infographics from '../assets/infographics.jpg';
import CaseStudy from '../assets/case-study.jpg';

const ResourceCards = () => {
	// Sample data for webinars, infographics, and case studies
	const webinars = [
		{
			id: 1,
			image: 'webinar_image_1_url',
			description:
				'Learn how to boost your marketing strategies with QR codes in this exclusive webinar!',
		},
		{
			id: 2,
			image: 'webinar_image_2_url',
			description:
				'Discover the latest trends and best practices for QR code implementation in this insightful webinar.',
		},
		{
			id: 3,
			image: 'webinar_image_3_url',
			description:
				'Unlock the potential of QR codes for your business growth with our expert-led webinar series.',
		},
	];

	const infographics = [
		{
			id: 1,
			image: 'infographic_image_1_url',
			description:
				'Explore our visually stunning infographic detailing the impact of QR codes on consumer engagement.',
		},
		{
			id: 2,
			image: 'infographic_image_2_url',
			description:
				'Dive deep into the world of QR codes with our informative infographic covering everything you need to know.',
		},
		{
			id: 3,
			image: 'infographic_image_3_url',
			description:
				'Get inspired by our creative infographic showcasing innovative QR code campaigns from around the globe.',
		},
	];

	const caseStudies = [
		{
			id: 1,
			image: 'case_study_image_1_url',
			description:
				'Discover how XYZ Company increased customer engagement by 40% using QR codes in their marketing campaigns.',
		},
		{
			id: 2,
			image: 'case_study_image_2_url',
			description:
				'Learn from real-world examples of successful QR code implementations in various industries in our in-depth case studies.',
		},
		{
			id: 3,
			image: 'case_study_image_3_url',
			description:
				'See measurable results and ROI from QR code integration in our collection of compelling case studies.',
		},
	];

	return (
		<section className='py-32 bg-gray-100'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Render Webinar Cards */}
					{webinars.map((webinar) => (
						<div
							key={webinar.id}
							className='bg-white rounded-lg shadow-md overflow-hidden'
						>
							<img
								src={Webinars}
								alt='Webinar'
								className='w-full h-64 object-cover object-center'
							/>
							<div className='p-6'>
								<h1 className='text-xl font-semibold mb-2'>Webinar</h1>
								<p className='text-gray-600 font-bold text-2xl '>
									{webinar.description}
								</p>
							</div>
						</div>
					))}

					{/* Render Infographic Cards */}
					{infographics.map((infographic) => (
						<div
							key={infographic.id}
							className='bg-white rounded-lg shadow-md overflow-hidden'
						>
							<img
								src={Infographics}
								alt='Infographic'
								className='w-full h-64 object-cover object-center'
							/>
							<div className='p-6'>
								<h1 className='text-xl font-semibold mb-2'>Infographic</h1>
								<p className='text-gray-600  font-bold text-2xl'>
									{infographic.description}
								</p>
							</div>
						</div>
					))}

					{/* Render Case Study Cards */}
					{caseStudies.map((caseStudy) => (
						<div
							key={caseStudy.id}
							className='bg-white rounded-lg shadow-md overflow-hidden'
						>
							<img
								src={CaseStudy}
								alt='Case Study'
								className='w-full h-64 object-cover object-center'
							/>
							<div className='p-6'>
								<h1 className='text-xl font-semibold mb-2'>Case Study</h1>
								<p className='text-gray-600  font-bold text-2xl'>
									{caseStudy.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ResourceCards;
