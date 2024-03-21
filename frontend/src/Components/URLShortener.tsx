import React, { useState } from 'react';

const URLShortener = () => {
	const [url, setURL] = useState('');
	const [shortenedURL, setShortenedURL] = useState('');
	const [error, setError] = useState('');

	const fetchAPI = async (event: any) => {
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
				setShortenedURL(data.result_url);
				setError('');
			} else {
				setError(data.error || 'Failed to shorten URL');
			}
		} catch (error) {
			console.error('Failed to fetch url', error);
			setError('Failed to shorten URL');
		}
	};

	return (
		<section className='w-full bg-slate-100 py-24'>
			<div className='w-full flex flex-col text-center items-center justify-center '>
				<h1 className='lg:text-6xl text-4xl font-bold py-4'>URL Shortener</h1>
				<form onSubmit={fetchAPI}>
					<div className='flex py-2'>
						<input
							className='border outline-none  container py-4 px-6  md:w-[40rem] w-60'
							type='text'
							value={url}
							onChange={(event) => setURL(event.target.value)}
							placeholder='Insert your URL'
						/>
						<button className='border px-6 py-4'>Shrink</button>
					</div>
				</form>
				{error && <div className='text-red-500'>{error}</div>}
				<div>
					{shortenedURL && (
						<div>
							Shortened URL:{' '}
							<a
								href={shortenedURL}
								target='_blank'
								rel='noopener noreferrer'
							>
								{shortenedURL}
							</a>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default URLShortener;
