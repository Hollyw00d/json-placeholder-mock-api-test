import { useEffect } from '@wordpress/element'; // eslint-disable-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n'; // eslint-disable-line import/no-unresolved
import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import './editor.scss';
import JsonResultComponent from './components/JsonResult/JsonResultComponent.jsx';

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Edit({ attributes, setAttributes, clientId }) {
	// const wpRestJsonData = `${window.location.origin}/wp-json/jsonplaceholder/v1/jsonplaceholder-option`;
	// const { jsonResult, isErrorMsg } = attributes; // eslint-disable-line react/prop-types

	// // useEffect to fetch data
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch(wpRestJsonData);
	// 			const data = await response.json();
	// 			const jsonplaceholderUrl = data.jsonplaceholder_url;

	// 			if (jsonplaceholderUrl) {
	// 				const fetchedJson = await fetch(jsonplaceholderUrl);
	// 				const contentType = fetchedJson.headers.get('content-type');

	// 				if (!contentType || !contentType.includes('application/json')) {
	// 					throw new Error('Invalid JSON URL');
	// 				}

	// 				const fetchedJsonData = await fetchedJson.json();

	// 				setAttributes({
	// 					jsonResult: fetchedJsonData,
	// 					isErrorMsg: false
	// 				});
	// 			} else {
	// 				throw new Error('No JSON URL found');
	// 			}
	// 		} catch (error) {
	// 			setAttributes({
	// 				jsonResult: { errorMsg: 'JSON data is not loading correctly!' },
	// 				isErrorMsg: true
	// 			});
	// 		}
	// 	};

	// 	if (!jsonResult || isErrorMsg) {
	// 		fetchData();
	// 	}
	// }, [jsonResult, isErrorMsg, setAttributes, wpRestJsonData]);

	return (
		<div {...useBlockProps()}>
			Test
			{/* {isErrorMsg ? (
				<div>Error!</div>
			) : (
				<JsonResultComponent jsonResult={jsonResult} />
			)} */}
		</div>
	);
}
