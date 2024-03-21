import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-12'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
					<div>
						<h2 className='text-xl font-semibold mb-4'>Why ZipLinkz</h2>
						<ul>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Features
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Benefits
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Testimonials
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-semibold mb-4'>Solutions</h2>
						<ul>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Business
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Marketing
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Education
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-semibold mb-4'>Resources</h2>
						<ul>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Documentation
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									FAQ
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-semibold mb-4'>Legal</h2>
						<ul>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className='text-xl font-semibold mb-4'>Company</h2>
						<ul>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Contact Us
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-500'
								>
									Careers
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row justify-between items-center mt-8'>
					<div className='mb-4 lg:mb-0'>
						<h1 className='text-xl lg:text-2xl font-bold'>ZipLinks</h1>
						<p className='text-sm text-gray-400'>
							© 2024 ZipLinks. All rights reserved.
						</p>
						<div className='flex items-center'>
							<FaTwitter className='text-white mr-4 hover:text-blue-500 cursor-pointer' />
							<FaInstagram className='text-white mr-4 hover:text-blue-500 cursor-pointer' />
							<FaLinkedin className='text-white mr-4 hover:text-blue-500 cursor-pointer' />
							<FaFacebook className='text-white hover:text-blue-500 cursor-pointer' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
