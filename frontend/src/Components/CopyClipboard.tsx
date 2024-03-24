import { FaCopy } from 'react-icons/fa';

type CopyClipboardProps = {
	text: string;
};

const CopyClipboard = ({ text }: CopyClipboardProps) => {
	const handleCopy = () => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				console.log('text copied!', text);
			})
			.catch((err) => {
				console.error('error, text not copied', err);
			});
	};

	return (
		<button onClick={handleCopy}>
			<FaCopy size={20} />
		</button>
	);
};

export default CopyClipboard;
