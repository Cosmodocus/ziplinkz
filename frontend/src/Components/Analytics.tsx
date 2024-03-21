import React from 'react';
import AnalyticsImage from '../assets/analyticsimage.jpg';

const Analytics = () => {
	return (
		<section className='py-8 lg:py-20 px-6'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
				<div className='lg:w-1/2  mb-8 lg:mb-0'>
					<img
						src={AnalyticsImage}
						alt='Analytics'
						className='w-full h-auto rounded-lg shadow-md'
					/>
				</div>
				<div className='lg:w-1/2 lg:pl-8'>
					<div className='flex flex-col justify-center h-full'>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-6xl font-bold'>324k viewers</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-6xl font-bold'>189k clicks</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-6xl font-bold'>
								542k conversions
							</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-6xl font-bold'>
								78k engagements
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Analytics;
