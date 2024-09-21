import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved
import JsonResultComponent from './components/JsonResult/JsonResultComponent.jsx';

// eslint-disable-next-line react/prop-types
export default function Save({ attributes }) {
	const { jsonResult, isErrorMsg } = attributes; // eslint-disable-line react/prop-types

	return (
		<div {...useBlockProps.save()}>
			{/* eslint-disable-next-line react/prop-types */}
			{isErrorMsg ? (
				<div>Error!</div>
			) : (
				<div>
					<JsonResultComponent jsonResult={jsonResult} />
				</div>
			)}
		</div>
	);
}
