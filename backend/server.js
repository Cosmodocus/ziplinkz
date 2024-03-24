import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the backend server' });
});

app.options('/api/v1/shorten', cors());

app.use(
	cors({
		origin: '*',
		credentials: true,
	})
);
app.use(express.json());

app.post('/api/v1/shorten', async (req, res) => {
	try {
		// defining the url
		const url = req.body.url;
		if (!url) {
			res.status(400).json({ error: 'URL not provided' });
			return;
		}
		const cleanURIURL = 'https://cleanuri.com/api/v1/shorten';
		const response = await fetch(cleanURIURL, {
			method: 'POST',
			body: JSON.stringify({ url: req.body.url }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();

		if (response.ok) {
			res.status(200).json(data);
		} else {
			res.status(response.status).json(data);
		}
	} catch (error) {
		const blacklistedWebsite = isBlacklisted(req.body.url);
		if (blacklistedWebsite) {
			res.status(403).json({ error: 'Blacklisted website detected' });
			return;
		}
		console.error('Failed to fetch URL:', error);
		res.status(500).json({ error: 'Failed to fetch URL' });
	}
});

function isBlacklisted(url) {
	const blacklistedHostnames = ['elitedateclub.life', 'datingocean.fun'];

	// Extract the hostname from the input URL
	const urlHostname = new URL(url).hostname;

	return blacklistedHostnames.includes(urlHostname);
}
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
