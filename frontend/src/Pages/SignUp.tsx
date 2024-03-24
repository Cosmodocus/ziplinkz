import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
	return (
		<div className='container mx-auto px-4 py-32 flex items-center justify-center'>
			<div className='border max-w-xl px-24 py-16 shadow-md rounded-md bg-gray-100'>
				<h2 className='text-3xl font-bold text-center mb-4'>Sign Up</h2>
				<form className='max-w-md mx-auto'>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-700'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-sm font-medium text-gray-700'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='confirmPassword'
							className='block text-sm font-medium text-gray-700'
						>
							Confirm Password
						</label>
						<input
							type='password'
							id='confirmPassword'
							className='mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-3'
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mb-4'
					>
						Sign Up
					</button>
				</form>
				<p className='text-center text-gray-600'>
					Already have an account?{' '}
					<Link
						to='/login'
						className='text-blue-500 hover:underline'
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
