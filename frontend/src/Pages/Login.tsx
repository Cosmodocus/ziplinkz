import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
	return (
		<div className='container mx-auto px-4 py-32 flex items-center justify-center'>
			<div className='border max-w-xl px-24 py-16 rounded-md bg-gray-100 shadow-md'>
				<h2 className='text-3xl font-bold text-center mb-8'>Login</h2>
				<form className='max-w-md mx-auto'>
					<div className='mb-6'>
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
					<div className='mb-6'>
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
					<button
						type='submit'
						className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full mb-4'
					>
						Login
					</button>
				</form>
				<p className='text-center text-gray-600'>
					Don't have an account?{' '}
					<Link
						to='/signup'
						className='text-blue-500 hover:underline'
					>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
