import Webinars from '../assets/webinars.jpg';

const FeaturedResource = () => {
	return (
		<section className=' py-32 bg-gray-100'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					{/* Featured Image */}
					<div className=''>
						<img
							src={Webinars}
							alt='Featured Resource'
							className='w-full h-auto rounded-lg shadow-md'
						/>
					</div>
					{/* Featured Content */}
					<div className=''>
						<p className='text-gray-500 uppercase tracking-wider'>
							Featured Video
						</p>
						<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
							Unlock the Power of QR Codes
						</h1>
						<p className='text-lg text-gray-700 mb-6'>
							Discover how QR codes can revolutionize your marketing strategies
							and enhance customer engagement.
						</p>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md'>
							Watch Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedResource;
