import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';

export const uploadFile = (req, res) => {
    const form = formidable({ multiples: true });
    form.uploadDir = path.join(__dirname, '../../src/imgs/');
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (!files.file) {
            return res.status(400).send('No files were uploaded.');
        }

        let uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
        let uploadedFileNames = [];

        uploadedFiles.forEach((uploadedFile) => {
            let fileExtension = path.extname(uploadedFile.originalFilename);
            let randomFileName = uuidv4() + fileExtension;
            let uploadPath = path.join(form.uploadDir, randomFileName);

            uploadedFileNames.push(randomFileName);

            fs.rename(uploadedFile.filepath, uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        });

        return res.status(200).json({ fileNames: uploadedFileNames });
    });
};

