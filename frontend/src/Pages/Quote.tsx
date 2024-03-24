const Quote = () => {
	return (
		<div className='container mx-auto px-4 py-32'>
			<div className='max-w-3xl mx-auto bg-gray-100 p-8'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Let's Get in Touch
				</h2>
				<form>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<div>
							<label
								htmlFor='firstName'
								className='block text-sm font-medium text-gray-700'
							>
								First Name
							</label>
							<input
								type='text'
								id='firstName'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='lastName'
								className='block text-sm font-medium text-gray-700'
							>
								Last Name
							</label>
							<input
								type='text'
								id='lastName'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='companyName'
								className='block text-sm font-medium text-gray-700'
							>
								Company Name
							</label>
							<input
								type='text'
								id='companyName'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='businessEmail'
								className='block text-sm font-medium text-gray-700'
							>
								Business Email Address
							</label>
							<input
								type='email'
								id='businessEmail'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='phoneNumber'
								className='block text-sm font-medium text-gray-700'
							>
								Phone Number
							</label>
							<input
								type='tel'
								id='phoneNumber'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='jobTitle'
								className='block text-sm font-medium text-gray-700'
							>
								Job Title
							</label>
							<input
								type='text'
								id='jobTitle'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='companySize'
								className='block text-sm font-medium text-gray-700'
							>
								Company Size
							</label>
							<input
								type='text'
								id='companySize'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='primaryUseCase'
								className='block text-sm font-medium text-gray-700'
							>
								Primary Use Case
							</label>
							<input
								type='text'
								id='primaryUseCase'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
						<div>
							<label
								htmlFor='country'
								className='block text-sm font-medium text-gray-700'
							>
								Country
							</label>
							<input
								type='text'
								id='country'
								className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
							/>
						</div>
					</div>
					<p className='mt-4 text-sm text-gray-500'>
						By submitting this form, you agree to our{' '}
						<a
							href='#'
							className='font-medium text-blue-500 hover:text-blue-400'
						>
							privacy policy
						</a>
						.
					</p>
					<button
						type='submit'
						className='mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Quote;
