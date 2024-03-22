import React, { useState } from 'react';
import { faqs, FAQItem } from '../data';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
	const [selected, setSelected] = useState<number | null>(null);

	const handleSelected = (id: number) => {
		setSelected(selected === id ? null : id);
	};

	return (
		<section className='container mx-auto px-4 py-8 max-w-screen-md'>
			<h1 className='text-3xl font-semibold mb-6 '>
				Frequently Asked Questions
			</h1>
			<div>
				{faqs.map((faq: FAQItem) => (
					<div
						key={faq.id}
						onClick={() => handleSelected(faq.id)}
						className='  rounded-lg overflow-hidden mb-4  border'
					>
						<div className='flex justify-between items-center cursor-pointer bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out py-4 px-6'>
							<h2 className='text-lg font-semibold'>{faq.question}</h2>
							<FaChevronDown
								className={`transform ${
									selected === faq.id ? 'rotate-180' : 'rotate-0'
								} transition-transform duration-300`}
							/>
						</div>
						{selected === faq.id && (
							<div className='py-4 px-6'>
								<p className='text-gray-600'>{faq.answer}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
