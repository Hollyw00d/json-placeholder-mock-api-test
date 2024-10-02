const fs = require('fs');
const path = require('path');
const archiver = require('archiver'); // eslint-disable-line import/no-extraneous-dependencies
const ignore = require('ignore'); // eslint-disable-line import/no-extraneous-dependencies
const ignoreArray = require('./ignore-array.cjs');

const directoryToZip = path.resolve(__dirname);
const folderName = path.basename(directoryToZip);
const outputZipFile = path.join(directoryToZip, `${folderName}.zip`);

// Ignore files/directories
const ig = ignore().add(ignoreArray);

// Create a file to stream archive data to
const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
	// eslint-disable-next-line no-console
	console.log(
		`Success! ${folderName}.zip zipped file is created in your root directory.`
	);
});
archive.on('error', (err) => {
	throw err;
});

archive.pipe(output);

const addDirectory = (dirPath) => {
	fs.readdirSync(dirPath).forEach((file) => {
		const fullPath = path.join(dirPath, file);
		const relativePath = path.relative(directoryToZip, fullPath);

		if (ig.ignores(relativePath)) return;

		const stats = fs.statSync(fullPath);
		if (stats.isDirectory()) {
			addDirectory(fullPath);
		} else {
			archive.file(fullPath, { name: relativePath });
		}
	});
};

addDirectory(directoryToZip);
archive.finalize();
