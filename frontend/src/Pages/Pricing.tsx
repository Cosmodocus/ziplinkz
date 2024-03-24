import React from 'react';
import PriceHead from '../Components/PriceHead';
import PriceCards from '../Components/PriceCards';
import DetailedPricing from '../Components/DetailedPricing';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';

const Pricing = () => {
	return (
		<>
			<PriceHead />
			<PriceCards />
			<CTA />
			<Footer />
		</>
	);
};

export default Pricing;
