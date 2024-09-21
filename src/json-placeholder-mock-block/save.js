import { useBlockProps } from '@wordpress/block-editor'; // eslint-disable-line import/no-unresolved

// eslint-disable-next-line react/prop-types
export default function Save({ attributes }) {
	const { jsonPlaceholderUrl } = attributes; // eslint-disable-line react/prop-types

	return <div {...useBlockProps.save()}>{jsonPlaceholderUrl}</div>;
}
