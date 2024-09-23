// eslint-disable-next-line react/prop-types
export default function Posts({ jsonData }) {
	const posts10OrLess = jsonData?.slice(0, 10); // eslint-disable-line react/prop-types

	return (
		<div>
			<h2>JSONPlaceholder.org Posts (10 or Less)</h2>
			{posts10OrLess.map((post) => (
				<div key={post.id}>
					<h3>Post ID: {post.id}</h3>
					<h4>Post Title: {post.title}</h4>
					<p>
						Post URL: <br />
						<a href={post.url} target="_blank" rel="noreferrer">
							{post.url}
						</a>
					</p>
					<p>
						Post Thumbnail:
						<br />
						<img src={post.thumbnail} alt={post.title} />
					</p>
				</div>
			))}
		</div>
	);
}
