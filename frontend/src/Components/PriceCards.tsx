import React from 'react';
import { FaHdd, FaUserShield, FaAd } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PriceCards = () => {
	return (
		<section className='py-12 bg-gray-100'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-semibold text-center mb-8'>
					Choose Your Plan
				</h2>
				<div className='flex flex-col md:flex-row justify-center gap-8'>
					{/* Free Plan */}
					<div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-2xl font-semibold mb-3 border-b p-2'>
							Free Plan
						</h3>
						<p className='text-gray-600 mb-3'>Basic features</p>
						<p className='text-xl font-bold text-gray-800 mb-3'>$0</p>
						<ul className='text-gray-600 mb-4'>
							<li>
								<FaHdd className='inline-block mr-2' /> Limited storage
							</li>
							<li>
								<FaUserShield className='inline-block mr-2' /> Basic support
							</li>
							<li>
								<FaAd className='inline-block mr-2' /> Ads included
							</li>
						</ul>
						<Link
							to='/signup'
							className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center'
						>
							Get Started
						</Link>
					</div>
					{/* Most Popular Plan */}
					<div className='flex-1 bg-white p-6 rounded-lg shadow-md border-4 border-blue-500'>
						<div className='flex justify-between mb-3 border-b py-2'>
							<h3 className='text-4xl font-bold text-left mb-0'>
								Most Popular
								<span className='text-4xl text-yellow-500 ml-2'>★</span>
							</h3>
						</div>
						<p className='text-gray-600 mb-3'>All features included</p>
						<p className='text-2xl font-bold text-gray-800 mb-3'>$9.99/mo</p>
						<ul className='text-gray-600 mb-4'>
							<li>
								<FaHdd className='inline-block mr-2' /> Unlimited storage
							</li>
							<li>
								<FaUserShield className='inline-block mr-2' /> Premium support
							</li>
							<li>
								<FaAd className='inline-block mr-2' /> No ads
							</li>
						</ul>
						<Link
							to='/signup'
							className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center'
						>
							Get Started
						</Link>
					</div>
					{/* Prime Plan */}
					<div className='flex-1 bg-white p-6 rounded-lg shadow-md '>
						<h3 className='text-2xl font-semibold mb-3 border-b p-2'>
							Prime Plan
						</h3>
						<p className='text-gray-600 mb-3'>Exclusive features</p>
						<p className='text-xl font-bold text-gray-800 mb-3'>$14.99/mo</p>
						<ul className='text-gray-600 mb-4'>
							<li>
								<FaHdd className='inline-block mr-2' /> Priority storage
							</li>
							<li>
								<FaUserShield className='inline-block mr-2' /> 24/7 support
							</li>
							<li>
								<FaAd className='inline-block mr-2' /> No interruptions
							</li>
						</ul>
						<Link
							to='/signup'
							className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center'
						>
							Get Started
						</Link>
					</div>
					{/* Premium Plan */}
					<div className='flex-1 bg-white p-6 rounded-lg shadow-md'>
						<h3 className='text-2xl font-semibold mb-3 border-b p-2'>
							Premium Plan
						</h3>
						<p className='text-gray-600 mb-3'>Exclusive features</p>
						<p className='text-xl font-bold text-gray-800 mb-3'>$19.99/mo</p>
						<ul className='text-gray-600 mb-4'>
							<li>
								<FaHdd className='inline-block mr-2' /> Priority support
							</li>
							<li>
								<FaUserShield className='inline-block mr-2' /> Advanced
								analytics
							</li>
							<li>
								<FaAd className='inline-block mr-2' /> No limits
							</li>
						</ul>
						<Link
							to='/signup'
							className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 block text-center'
						>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PriceCards;
