import React from 'react';
import CTA from '../Components/CTA';
import Footer from '../Components/Footer';
import ResourceCards from '../Components/ResourceCards';
import FeaturedResource from '../Components/FeaturedResource';

const Resources = () => {
	return (
		<>
			<FeaturedResource />
			<ResourceCards />
			<CTA />
			<Footer />
		</>
	);
};

export default Resources;
