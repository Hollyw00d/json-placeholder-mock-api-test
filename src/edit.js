/* eslint-disable import/extensions, react/react-in-jsx-scope, react/jsx-filename-extension */
import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import App from './components/App/App.jsx';

import './editor.scss';

export default function Edit() {
	const isEditPage = true;

	return (
		<div {...useBlockProps()}>
			<App isEditPage={isEditPage} />
		</div>
	);
}
