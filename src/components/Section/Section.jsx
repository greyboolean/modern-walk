function Section({ heading, children }) {
	return (
		<div>
			<h1>{heading}</h1>
			{children}
		</div>
	);
}

export default Section;
