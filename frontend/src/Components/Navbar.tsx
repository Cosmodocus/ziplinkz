import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const handleNavbar: () => void = () => {
		setNavbar(!navbar);
		return undefined;
	};

	return (
		<nav>
			<div className='w-full flex justify-between items-center py-4 px-12 fixed top-0 bg-white shadow-lg z-10'>
				<Link to={'/'}>
					<span className='text-4xl font-bold'>
						Zip<span className='text-blue-500'>Linkz</span>
					</span>
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
							to={'/pricing'}
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
				<div className='md:flex hidden gap-12'>
					<button className='text-gray-800 hover:text-blue-500 font-semibold'>
						<Link to={'/login'}>Log In</Link>
					</button>
					<button className='text-gray-800 hover:text-blue-500 font-semibold'>
						<Link to={'/signup'}>Sign Up</Link>
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
					className='md:hidden flex cursor-pointer'
					size={30}
					onClick={handleNavbar}
				/>
			</div>

			{/* MOBILE RESPONSIVE MENU */}
			{navbar && (
				<div className='w-full flex flex-col bg-white z-10 fixed h-screen  gap-40'>
					<div className='w-full flex justify-between items-center p-4 px-12  '>
						<Link
							to={'/'}
							onClick={handleNavbar}
						>
							<span className='text-4xl font-bold'>
								Zip<span className='text-blue-500'>Linkz</span>
							</span>
						</Link>
						<IoClose
							size={30}
							className='cursor-pointer'
							onClick={handleNavbar}
						/>
					</div>
					<ul
						className='flex flex-col gap-8 text-2xl px-4'
						onClick={handleNavbar}
					>
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
								to={'/pricing'}
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
					<div
						className='flex gap-8 items-center justify-center w-full h-1/3 border-t bg-gray-800 '
						onClick={handleNavbar}
					>
						<button className='text-white  font-semibold bg-gray-500  hover:bg-gray-600 py-2 px-4 rounded-md'>
							<Link to={'/login'}>Log In</Link>
						</button>
						<button className='text-white  font-semibold bg-gray-500 hover:bg-gray-600 py-2 px-4 rounded-md'>
							<Link to={'/signup'}>Sign Up</Link>
						</button>
						<button>
							<Link
								to={'/quote'}
								className='border border-gray-800 text-white  bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded-md'
							>
								Get a Quote
							</Link>
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
