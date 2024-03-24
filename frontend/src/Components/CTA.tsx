import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTA = () => {
	return (
		<section className='bg-blue-500 py-12 lg:py-16 text-center'>
			<h1 className='text-3xl lg:text-4xl font-semibold text-white mb-6'>
				Choose ZipLinkz Now
			</h1>
			<button className='bg-white text-blue-500 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300'>
				<Link to='/signup'>Get Started</Link>
			</button>
		</section>
	);
};

export default CTA;
