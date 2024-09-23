import { useState } from '@wordpress/element';

export default function App() {
	const [name, setName] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	};

	return (
		<div className="wp-block-create-block-react-on-frontend-block">
			<h2>
				Hello <span className="mark-text">{name}</span> in React app
			</h2>
			<input type="text" onChange={handleChange} placeholder="name" />
		</div>
	);
}
