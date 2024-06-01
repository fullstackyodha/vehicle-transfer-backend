import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

export function uploadImage(
    file: string,
    folderName: string,
    public_id?: string,
    overwrite?: boolean,
    invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
    return new Promise((resolve) => {
        // Cloudinary Upload function
        cloudinary.v2.uploader.upload(
            file,
            {
                public_id: `${folderName}/${public_id}`,
                overwrite,
                invalidate,
                resource_type: 'image'
            },
            (err: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
                if (err) resolve(err);
                resolve(result);
            }
        );
    });
}
