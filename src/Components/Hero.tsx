import React from 'react';
import Google from '../assets/google-workspace.svg';
import HootSuite from '../assets/hootsuite.svg';
import MailGun from '../assets/mailgun.svg';
import Meta from '../assets/meta.svg';
import UserTesting from '../assets/user-testing.svg';
import HeroImage from '../assets/heroimage.jpg';

const Hero = () => {
	return (
		<header className='md:py-30 pt-40'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center '>
				<div className='lg:w-1/2 py-4'>
					<h1 className='text-4xl lg:text-6xl font-bold mb-6'>
						Shorten Your Links with Ease
					</h1>
					<p className='text-lg lg:text-xl mb-8'>
						ZipLinkz makes it simple to create short, memorable URLs that are
						perfect for sharing on social media, emails, and more. Start
						shrinking your links today!
					</p>
					<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg'>
						Get Started
					</button>
				</div>
				<div className='lg:w-1/2'>
					<img
						className='w-full'
						src={HeroImage}
						alt='Shorten Your Links'
					/>
				</div>
			</div>
			<div className='container mx-auto px-4 flex justify-center items-center mt-8 flex-wrap'>
				<img
					src={Google}
					alt='Google'
					className='w-16 h-16 mx-4 my-4 lg:w-32 lg:h-32 lg:mx-8 lg:my-0'
				/>
				<img
					src={HootSuite}
					alt='HootSuite'
					className='w-16 h-16 mx-4 my-4 lg:w-32 lg:h-32 lg:mx-8 lg:my-0'
				/>
				<img
					src={MailGun}
					alt='MailGun'
					className='w-16 h-16 mx-4 my-4 lg:w-32 lg:h-32 lg:mx-8 lg:my-0'
				/>
				<img
					src={Meta}
					alt='Meta'
					className='w-16 h-16 mx-4 my-4 lg:w-32 lg:h-32 lg:mx-8 lg:my-0'
				/>
				<img
					src={UserTesting}
					alt='UserTesting'
					className='w-16 h-16 mx-4 my-4 lg:w-32 lg:h-32 lg:mx-8 lg:my-0'
				/>
			</div>
		</header>
	);
};

export default Hero;
