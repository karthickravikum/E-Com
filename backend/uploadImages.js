import { v2 as cloudinary } from "cloudinary";
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadImage = async (imagePath) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'shopease_products',
        });
        console.log(`Uploaded ${path.basename(imagePath)} to ${result.secure_url}`);
        return result.secure_url;
    } catch (error) {
        console.error(`Error uploading ${imagePath}:`, error);
        return null;
    }
};

const uploadAllImages = async () => {
    const assetsDir = '../frontend/src/assets';
    const imageFiles = fs.readdirSync(assetsDir)
        .filter(file => file.startsWith('p_img') && file.endsWith('.png'));

    console.log(`Found ${imageFiles.length} product images to upload`);
    
    const uploadResults = {};
    for (const file of imageFiles) {
        const imagePath = path.join(assetsDir, file);
        const url = await uploadImage(imagePath);
        if (url) {
            uploadResults[file] = url;
        }
    }

    // Save the URLs to a file
    fs.writeFileSync('productImageUrls.json', JSON.stringify(uploadResults, null, 2));
    console.log('Saved image URLs to productImageUrls.json');
};

uploadAllImages().catch(console.error);
