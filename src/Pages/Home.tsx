import React from 'react';
import Hero from '../Components/Hero';
import URLShortener from '../Components/URLShortener';
import Analytics from '../Components/Analytics';
import Cards from '../Components/Cards';
import Testimonials from '../Components/Testimonials';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<>
			<Hero />
			{/* <URLShortener /> */}
			<Analytics />
			<Cards />
			<Testimonials />
			<FAQ />
			<Footer />
		</>
	);
};

export default Home;
