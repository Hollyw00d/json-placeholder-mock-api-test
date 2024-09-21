import { useEffect, useState } from '@wordpress/element'; // eslint-disable-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n'; // eslint-disable-line import/no-unresolved
import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import './editor.scss';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Edit({ attributes, setAttributes, clientId }) {
	const wpRestJsonData = `${window.location.origin}/wp-json/jsonplaceholder/v1/jsonplaceholder-option`;
	const { jsonResult, isErrorMsg } = attributes; // eslint-disable-line react/prop-types

	// useEffect to fetch data
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch first JSON data (wpRestJsonData)
				const response = await fetch(wpRestJsonData);
				const data = await response.json();
				const jsonplaceholderUrl = data.jsonplaceholder_url;

				if (jsonplaceholderUrl) {
					// Fetch second JSON data (jsonplaceholderUrl)
					const fetchedJson = await fetch(jsonplaceholderUrl);
					const contentType = fetchedJson.headers.get('content-type');

					if (!contentType || !contentType.includes('application/json')) {
						throw new Error('Invalid JSON URL');
					}

					const fetchedJsonData = await fetchedJson.json();

					// Store successful result
					setAttributes({
						jsonResult: fetchedJsonData,
						isErrorMsg: false
					});
				} else {
					// Handle missing URL
					throw new Error('No JSON URL found');
				}
			} catch (error) {
				// Handle errors and set error state
				setAttributes({
					jsonResult: { errorMsg: 'JSON data is not loading correctly!' },
					isErrorMsg: true
				});
			}
		};

		// Fetch data only if there is no existing valid jsonResult
		if (!jsonResult || isErrorMsg) {
			fetchData();
		}
	}, [jsonResult, isErrorMsg, setAttributes]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div {...useBlockProps()}>
			{/* Display error or success message */}
			{isErrorMsg ? <div>Error!</div> : <div>Success!</div>}
		</div>
	);
}
