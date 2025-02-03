import { useBlockProps } from '@wordpress/block-editor';
import App from './components/App/App.jsx'; // eslint-disable-line import/extensions

import './editor.scss';

export default function Edit() {
	const isEditPage = true;

	/* eslint-disable react/jsx-filename-extension */
	return (
		<div {...useBlockProps()}>
			<App isEditPage={isEditPage} />
		</div>
	);
	/* eslint-enable react/jsx-filename-extension */
}
