import { registerBlockType } from '@wordpress/blocks'; // eslint-disable-line import/no-unresolved
import './style.scss';
import Edit from './edit.js';
import Save from './save.js';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: Edit,
	save: Save
});
