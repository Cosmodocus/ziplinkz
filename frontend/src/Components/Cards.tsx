import React from 'react';

const Cards = () => {
	return (
		<section className='py-8 lg:py-20 bg-gray-100 px-6'>
			<div className='container mx-auto px-4'>
				<h1 className='text-3xl lg:text-5xl font-bold text-center mb-6 lg:mb-12'>
					Analytics Dashboard
				</h1>
				<p className='text-lg text-center mb-8 lg:mb-16'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='text-xl lg:text-2xl font-semibold mb-4'>
							Analytics Card 1
						</h2>
						<p className='text-gray-700 mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>Feature 1</li>
							<li>Feature 2</li>
							<li>Feature 3</li>
						</ul>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4 w-full lg:w-auto'>
							Action
						</button>
						<a
							href='#'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</a>
					</div>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='text-xl lg:text-2xl font-semibold mb-4'>
							Analytics Card 2
						</h2>
						<p className='text-gray-700 mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>Feature 1</li>
							<li>Feature 2</li>
							<li>Feature 3</li>
						</ul>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4 w-full lg:w-auto'>
							Action
						</button>
						<a
							href='#'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</a>
					</div>
					<div className='bg-white p-6 lg:p-8 rounded-lg shadow-md'>
						<h2 className='text-xl lg:text-2xl font-semibold mb-4'>
							Analytics Card 3
						</h2>
						<p className='text-gray-700 mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<h3 className='text-lg font-semibold mb-2'>Features:</h3>
						<ul className='text-gray-700 mb-4'>
							<li>Feature 1</li>
							<li>Feature 2</li>
							<li>Feature 3</li>
						</ul>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4 w-full lg:w-auto'>
							Action
						</button>
						<a
							href='#'
							className='text-blue-500 hover:underline block text-center'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
