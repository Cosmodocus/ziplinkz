import React from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
	return (
		<nav className='w-full flex justify-between items-center py-4 px-12 fixed top-0 bg-white shadow-lg'>
			<Link to={'/'}>
				<span className='text-4xl font-bold'>ZipLinkz</span>
			</Link>
			<ul className='md:flex  hidden gap-12'>
				<li>
					<Link
						to={'/'}
						className='text-gray-800 hover:text-blue-500'
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to={'/prices'}
						className='text-gray-800 hover:text-blue-500'
					>
						Pricing
					</Link>
				</li>
				<li>
					<Link
						to={'/resources'}
						className='text-gray-800 hover:text-blue-500'
					>
						Resources
					</Link>
				</li>
			</ul>
			<div className='md:flex  hidden gap-12'>
				<button className='text-gray-800 hover:text-blue-500 font-semibold'>
					Log In
				</button>
				<button className='text-gray-800 hover:text-blue-500 font-semibold'>
					Sign Up
				</button>
				<button>
					<Link
						to={'/quote'}
						className='border border-gray-800 text-gray-800 hover:text-white hover:bg-blue-500 font-semibold py-2 px-4 rounded-md'
					>
						Get a Quote
					</Link>
				</button>
			</div>
			<IoMenu
				className='cursor-pointer md:hidden flex'
				size={35}
			/>
		</nav>
	);
};

export default Navbar;
