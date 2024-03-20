import React from 'react';

const Analytics = () => {
	return (
		<section className='py-8 lg:py-20'>
			<div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
				<div className='lg:w-1/2 lg:pr-8 mb-8 lg:mb-0'>
					<img
						src='https://via.placeholder.com/600x400'
						alt='Analytics'
						className='w-full h-auto rounded-lg shadow-md'
					/>
				</div>
				<div className='lg:w-1/2 lg:pl-8'>
					<div className='flex flex-col'>
						<div className='mb-4 flex items-center'>
							<h1 className='text-2xl lg:text-3xl font-semibold mr-2'>
								Quick Analytics 1:
							</h1>
							<span className='text-lg lg:text-2xl font-bold'>
								324k viewers
							</span>
						</div>
						<div className='mb-4 flex items-center'>
							<h1 className='text-2xl lg:text-3xl font-semibold mr-2'>
								Quick Analytics 2:
							</h1>
							<span className='text-lg lg:text-2xl font-bold'>189k clicks</span>
						</div>
						<div className='mb-4 flex items-center'>
							<h1 className='text-2xl lg:text-3xl font-semibold mr-2'>
								Quick Analytics 3:
							</h1>
							<span className='text-lg lg:text-2xl font-bold'>
								542k conversions
							</span>
						</div>
						<div className='mb-4 flex items-center'>
							<h1 className='text-2xl lg:text-3xl font-semibold mr-2'>
								Quick Analytics 4:
							</h1>
							<span className='text-lg lg:text-2xl font-bold'>
								78k engagements
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Analytics;
