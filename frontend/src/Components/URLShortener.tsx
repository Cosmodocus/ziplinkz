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
			<div className=' flex-col text-center items-center justify-center '>
				<h1 className='lg:text-6xl text-4xl font-bold py-2'>URL Shortener</h1>
				<form onSubmit={fetchAPI}>
					<input
						className='border outline-none md:max-w-lg max-w-sm container py-2 px-4'
						type='text'
						value={url}
						onChange={(event) => setURL(event.target.value)}
						placeholder='Insert your URL'
					/>
					<button className='border px-4 py-2'>Shrink</button>
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
