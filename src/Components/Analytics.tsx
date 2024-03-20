import React from 'react';
import AnalyticsImage from '../assets/analyticsimage.jpg';

const Analytics = () => {
	return (
		<section className='py-8 lg:py-20'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
				<div className='lg:w-1/2 lg:pr-8 mb-8 lg:mb-0'>
					<img
						src={AnalyticsImage}
						alt='Analytics'
						className='w-full h-auto rounded-lg shadow-md'
					/>
				</div>
				<div className='lg:w-1/2 lg:pl-8'>
					<div className='flex flex-col justify-center h-full'>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-4xl font-semibold'>
								Quick Analytics 1:{' '}
								<span className='text-xl lg:text-2xl font-bold'>
									324k viewers
								</span>
							</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-4xl font-semibold'>
								Quick Analytics 2:{' '}
								<span className='text-xl lg:text-2xl font-bold'>
									189k clicks
								</span>
							</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-4xl font-semibold'>
								Quick Analytics 3:{' '}
								<span className='text-xl lg:text-2xl font-bold'>
									542k conversions
								</span>
							</h1>
						</div>
						<div className='mb-4'>
							<h1 className='text-3xl lg:text-4xl font-semibold'>
								Quick Analytics 4:{' '}
								<span className='text-xl lg:text-2xl font-bold'>
									78k engagements
								</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Analytics;
