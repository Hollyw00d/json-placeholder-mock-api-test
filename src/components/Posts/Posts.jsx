import { useState } from '@wordpress/element';

// eslint-disable-next-line react/prop-types
export default function Posts({ jsonData }) {
	const posts10OrLess = jsonData?.slice(0, 10); // eslint-disable-line react/prop-types
	const [getPosts, setGetPosts] = useState(posts10OrLess);

	const selectPostHandler = (e) => {
		const selectPostID = e.target.value;
		console.log(selectPostID);
		const arr = [];
		const postByID = posts10OrLess.find((post) => (post.id = selectPostID));
		console.log(postByID);
		console.log(Array.isArray(arr));

		const postByIdInArr = [...arr, postByID];
		console.log(postByIdInArr);
		console.log(Array.isArray(postByIdInArr));
		setGetPosts(postByIdInArr);

		// console.log(postByIDInArr);
	};

	return (
		<div>
			<h2>JSONPlaceholder.org Posts (10 or Less)</h2>

			{getPosts.length > 1 && (
				<>
					<h3>Select Post By ID</h3>

					<p>
						<select name="selectPostById" onChange={selectPostHandler}>
							{getPosts.map((post) => (
								<option key={post.id} value={post.id}>
									Post ID: {post.id}
								</option>
							))}
						</select>
					</p>
				</>
			)}

			<h3>Posts</h3>
			{getPosts.map((post) => (
				<div key={post.id}>
					<h4>Post ID: {post.id}</h4>
					<h5>Post Title: {post.title}</h5>
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
