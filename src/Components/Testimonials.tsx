import React from 'react';
import Person1 from '../assets/randomperson1.jpg';
import Person2 from '../assets/randomperson2.jpg';
import Person3 from '../assets/randomperson3.jpg';

const Testimonials = () => {
	return (
		<section className='py-12 lg:py-24'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl lg:text-4xl font-semibold mb-8'>
					What our Customers Think
				</h1>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<div className='bg-white rounded-lg shadow-md p-8'>
						<div className='flex items-center mb-4'>
							<img
								src={Person1}
								alt='5 star rating'
								className='w-12 h-12 rounded-full mr-4'
							/>
							<h2 className='text-lg font-semibold'>John Doe</h2>
						</div>
						<p className='text-gray-600 mb-4'>
							"I really enjoyed using ZipLinkz! It's incredibly easy to shorten
							URLs and the analytics feature is very helpful."
						</p>
						<p className='text-blue-500 font-semibold'>- CEO, Company ABC</p>
					</div>
					<div className='bg-white rounded-lg shadow-md p-8'>
						<div className='flex items-center mb-4'>
							<img
								src={Person3}
								alt='5 star rating'
								className='w-12 h-12 rounded-full mr-4'
							/>
							<h2 className='text-lg font-semibold'>Jane Smith</h2>
						</div>
						<p className='text-gray-600 mb-4'>
							"ZipLinkz has been a game-changer for our social media campaigns.
							It's simple to use and has improved our click-through rates
							significantly."
						</p>
						<p className='text-blue-500 font-semibold'>
							- Marketing Director, Company XYZ
						</p>
					</div>
					<div className='bg-white rounded-lg shadow-md p-8'>
						<div className='flex items-center mb-4'>
							<img
								src={Person2}
								alt='5 star rating'
								className='w-12 h-12 rounded-full mr-4'
							/>
							<h2 className='text-lg font-semibold'>James Johnson</h2>
						</div>
						<p className='text-gray-600 mb-4'>
							"Using ZipLinkz has streamlined our email marketing efforts. It's
							user-friendly and has helped us track our campaign performance
							more effectively."
						</p>
						<p className='text-blue-500 font-semibold'>- CTO, Company 123</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
