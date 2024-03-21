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
		origin: 'http://localhost:5173/',
		credentials: true,
	})
);
app.use(express.json());

app.post('/api/v1/shorten', async (req, res) => {
	try {
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
		console.error('Failed to fetch URL:', error);
		res.status(500).json({ error: 'Failed to fetch URL' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
