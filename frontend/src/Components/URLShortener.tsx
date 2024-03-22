import React, { FormEvent, useState } from 'react';
import CopyClipboard from './CopyClipboard';
import QRCode from 'qrcode.react';

const URLShortener = () => {
	const [url, setURL] = useState('');
	const [shortenedURL, setShortenedURL] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const fetchAPI = async (event: FormEvent) => {
		try {
			event.preventDefault();

			const response = await fetch('http://localhost:3001/api/v1/shorten', {
				method: 'POST',
				body: JSON.stringify({ url }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (response.ok) {
				setIsLoading(true);
				setShortenedURL(data.result_url);
				setError('');
			} else {
				setIsLoading(false);
				setError(data.error || 'Failed to shorten URL');
			}

			if (data.error) {
				setIsLoading(false);
				setError('Invalid URL, please enter a valid URL.');
				setShortenedURL('');
			}
		} catch (error) {
			console.error('Failed to fetch url', error);
			setError('Failed to shorten URL');
			setIsLoading(false);
		}
	};

	return (
		<section className='w-full bg-slate-100 py-24'>
			<div className='w-full flex flex-col text-center items-center justify-center '>
				<h1 className='lg:text-6xl text-4xl font-bold py-4'>URL Shortener</h1>
				<p className='md:max-w-xl max-w-xs md:text-lg leading-[30px] text-center text-gray-600'>
					Thank you for using our URL shortening service! We hope our tool has
					made sharing links a breeze for you.
				</p>
				<form onSubmit={fetchAPI}>
					<div className='flex py-2'>
						<input
							className='border-none outline-none  container py-2 px-6  md:w-[40rem] w-60 rounded-tl-md rounded-bl-md'
							type='text'
							value={url}
							onChange={(event) => setURL(event.target.value)}
							placeholder='Insert the URL you want shortened...'
						/>
						<button className='border px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-tr-md rounded-br-md font-bold'>
							Shrink
						</button>
					</div>
				</form>
				{error && <div className='text-red-500'>{error}</div>}
				<div>
					{isLoading && !shortenedURL && <div>Loading...</div>}
					{shortenedURL && (
						<div className='border-2 px-4 py-2 shadow-sm rounded-md'>
							<div className='flex items-center justify-center gap-2'>
								<span className='font-semibold md:flex hidden'>
									Your Shortened URL:
								</span>{' '}
								<a
									href={shortenedURL}
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline hover:text-gray-900 border-r-2 border-r-gray-600   pr-2'
								>
									{shortenedURL}
								</a>
								<CopyClipboard text={shortenedURL} />
							</div>
						</div>
					)}
					{shortenedURL && (
						<div className=' p-4 w-full flex items-center justify-center container'>
							{shortenedURL && <QRCode value={shortenedURL} />}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default URLShortener;
