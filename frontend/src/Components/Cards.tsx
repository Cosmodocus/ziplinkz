import React from 'react';
import { BiLinkExternal, BiBarcode, BiChart } from 'react-icons/bi';
import URL from '../assets/url-icon.png';
import QR from '../assets/qr-icon.png';
import AnalyticsIcon from '../assets/analytics-icon.png';
import { Link } from 'react-router-dom';

const Cards = () => {
	return (
		<section className='py-8 lg:py-20 bg-gray-100 px-6'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl lg:text-5xl font-bold text-center mb-6 '>
					ZipLinkz Connection Board Platform
				</h1>
				<p className='text-lg text-center mb-8 lg:mb-16  text-gray-600'>
					ZipLinkz offers powerful tools to enhance your connections and boost
					productivity. Create custom short URLs, dynamic QR codes, and gain
					valuable insights with our analytics tracking feature.
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='flex gap-2 text-xl lg:text-2xl font-semibold mb-4'>
							<img
								className='w-[30px]'
								src={URL}
								alt=''
							/>
							URL Shortener
						</h2>
						<p className='text-gray-700 mb-4'>
							Create custom short URLs to share your content easily and track
							their performance. ZipLinkz allows you to generate branded short
							links and monitor click-through rates.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>
								<BiLinkExternal className='inline-block mr-2' />
								Custom short URLs
							</li>
							<li>
								<BiLinkExternal className='inline-block mr-2' />
								QR Code generation
							</li>
							<li>
								<BiLinkExternal className='inline-block mr-2' />
								Analytics dashboard
							</li>
						</ul>
						<Link
							to='/signup'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</Link>
						<Link
							to='/signup'
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center'
						>
							Get Started for Free
						</Link>
					</div>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='flex gap-2 text-xl lg:text-2xl font-semibold mb-4'>
							<img
								className='w-[30px]'
								src={QR}
								alt=''
							/>
							QR Codes
						</h2>
						<p className='text-gray-700 mb-4'>
							Generate dynamic QR codes to engage your audience and track their
							interactions. ZipLinkz offers customizable QR code designs and
							real-time analytics to monitor scans.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>
								<BiBarcode className='inline-block mr-2' />
								Custom QR code designs
							</li>
							<li>
								<BiBarcode className='inline-block mr-2' />
								Dynamic QR code generation
							</li>
							<li>
								<BiBarcode className='inline-block mr-2' />
								QR code analytics
							</li>
						</ul>
						<Link
							to='/signup'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</Link>
						<Link
							to='/signup'
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center'
						>
							Get Started for Free
						</Link>
					</div>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='flex gap-2 text-xl lg:text-2xl font-semibold mb-4'>
							<img
								className='w-[30px]'
								src={AnalyticsIcon}
								alt=''
							/>
							Analytics Tracking
						</h2>
						<p className='text-gray-700 mb-4'>
							Gain valuable insights into user behavior with our powerful
							analytics tracking feature. Monitor real-time data visualization,
							customize reports, and optimize your marketing efforts.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>
								<BiChart className='inline-block mr-2' />
								Real-time data visualization
							</li>
							<li>
								<BiChart className='inline-block mr-2' />
								Customizable reporting
							</li>
							<li>
								<BiChart className='inline-block mr-2' />
								User behavior analytics
							</li>
						</ul>
						<Link
							to='/signup'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</Link>
						<Link
							to='/signup'
							className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 block text-center'
						>
							Get Started for Free
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
