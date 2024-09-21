import { useState, useMemo } from '@wordpress/element'; // eslint-disable-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n'; // eslint-disable-line import/no-unresolved
import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import './editor.scss';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Edit({ attributes, setAttributes, clientId }) {
	const [jsonVal, setJsonVal] = useState(null);
	const wpRestJsonData = `${window.location.origin}/wp-json/jsonplaceholder/v1/jsonplaceholder-option`;

	const { jsonPlaceholderUrl } = attributes; // eslint-disable-line react/prop-types

	// useMemo to fetch data only when jsonplaceholderUrl changes
	useMemo(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(wpRestJsonData);
				const data = await response.json();
				const jsonplaceholderUrl = data.jsonplaceholder_url;
				setJsonVal(jsonplaceholderUrl);
				if (jsonplaceholderUrl) {
					setAttributes({ jsonPlaceholderUrl: jsonplaceholderUrl });
				}
			} catch (error) {
				setJsonVal('JSON data not loading correctly!');
				setAttributes({
					jsonPlaceholderUrl: 'JSON data not loading correctly!'
				});
			}
		};

		if (!jsonPlaceholderUrl) {
			fetchData();
		}
	}, [jsonVal, jsonPlaceholderUrl, setAttributes]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div {...useBlockProps()}>
			{jsonPlaceholderUrl && <div>{jsonPlaceholderUrl}</div>}
		</div>
	);
}
