import { useState } from '@wordpress/element';
import OnChangeAlert from '../OnChangeAlert/OnChangeAlert.jsx';

// eslint-disable-next-line react/prop-types
export default function Posts({ jsonData }) {
	const posts10OrLess = jsonData.slice(0, 10); // eslint-disable-line react/prop-types
	const [getPosts, setGetPosts] = useState(posts10OrLess);
	const [selectChanged, setSelectChanged] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const selectPostHandler = (e) => {
		const val = e.target.value;
		setSelectedOption(val);

		if (!val) {
			setGetPosts(posts10OrLess);
			return;
		}

		const selectPostID = Number(val);
		const arr = [];
		const postByID = posts10OrLess.find((post) => post.id === selectPostID);
		const postByIdInArr = [...arr, postByID];

		setGetPosts(postByIdInArr);
		setSelectChanged(true);
	};

	const resetBtnHandler = () => {
		setSelectedOption('');
		setGetPosts(posts10OrLess);
	};

	return (
		<div>
			<h2>JSONPlaceholder.org Posts (10 or Less)</h2>

			{posts10OrLess.length > 1 && (
				<>
					<h3>Select Post By ID</h3>

					<p>
						<select
							name="selectPostById"
							onChange={selectPostHandler}
							value={selectedOption}
						>
							<option value="">Show All Posts</option>
							{posts10OrLess.map((post) => (
								<option key={post.id} value={post.id}>
									Post ID: {post.id}
								</option>
							))}
						</select>
					</p>

					<div role="alert" aria-live="polite">
						{selectChanged && (
							<>
								<p>
									<button type="button" onClick={resetBtnHandler}>
										Reset
									</button>
								</p>
								<OnChangeAlert getPosts={getPosts} />
							</>
						)}
					</div>
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
