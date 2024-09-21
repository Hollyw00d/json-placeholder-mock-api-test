// eslint-disable-next-line react/prop-types
export default function JsonResultComponent({ jsonResult }) {
	// eslint-disable-next-line react/prop-types
	const jsonResultFirst10 = jsonResult?.slice(0, 10);

	return (
		<div>
			{Array.isArray(jsonResultFirst10) && (
				<h2>First 10 or Less Posts from JSONPlaceholder.org Test JSON API</h2>
			)}

			{/* <h2>First 10 or Less Posts from JSONPlaceholder.org Test JSON API</h2>
			{jsonResultFirst10.map((post) => (
				<div key={post.id}>
					<h3>
						Post ID:
						<br />
						{post.id}
					</h3>
					<h4>
						Post Title:
						<br />
						{post.title}
					</h4>
					<p>
						Post Content: <br />
						{post.content}
					</p>
				</div>
			))} */}
		</div>
	);
}
