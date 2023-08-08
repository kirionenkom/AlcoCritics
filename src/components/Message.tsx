interface MessageProps {
	message: string;
}

export default function Message({ message }: MessageProps) {
	return (
		<div className="message-container">
			<p className="message">{message}</p>
		</div>
	);
}
