import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import App from './components/App/App.jsx';

import './editor.scss';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<App />
		</div>
	);
}
