const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const ignore = require('ignore');
const ignoreArray = require('./plugin-zip-ignore-array.cjs');

const directoryToZip = path.resolve(process.cwd());
const folderName = path.basename(directoryToZip);
const outputZipFile = path.join(directoryToZip, `${folderName}.zip`);
let logOnce = false;

// Ignore files/directories
const ig = ignore().add(ignoreArray);

// Create a file to stream archive data to
const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', { zlib: { level: 9 } });

if (fs.existsSync(`${folderName}.zip`)) {
	fs.unlinkSync(`${folderName}.zip`);
}

// eslint-disable-next-line no-console
console.log(`Creating archive for \`${folderName}\` plugin... 🎁\n\n`);

archive.on('error', (err) => {
	throw err;
});

archive.pipe(output);

// archive.on('entry', () => {
// 	// eslint-disable-next-line no-console
// 	console.log('Adding all folders and files in zipped file EXCEPT\n\n');
// });

output.on('close', () => {
	// eslint-disable-next-line no-console
	console.log(`\nDone. \`${folderName}.zip\` is ready! 🎉\n`);
});

const addDirectory = (dirPath) => {
	fs.readdirSync(dirPath).forEach((file) => {
		const fullPath = path.join(dirPath, file);
		const relativePath = path.relative(directoryToZip, fullPath);

		if (ig.ignores(relativePath)) return;

		if (!logOnce) {
			// eslint-disable-next-line no-console
			console.log('Adding all folders and files in zipped file EXCEPT:\n');
			ignoreArray.forEach((dirOrFile) => {
				// eslint-disable-next-line no-console
				console.log(`  Ignored \`${dirOrFile}\`.`);
			});
			logOnce = true;
		}

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
