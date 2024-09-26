// eslint-disable-next-line react/prop-types
export default function OnChangeAlert({ getPosts }) {
	// eslint-disable-next-line react/prop-types
	if (getPosts.length > 1) {
		return <p className="alert-success">Showing All 10 Posts</p>;
	}
	const postId = getPosts[0].id; // eslint-disable-line react/prop-types
	return <p className="alert-success">Showing Post with ID: {postId}</p>;
}
