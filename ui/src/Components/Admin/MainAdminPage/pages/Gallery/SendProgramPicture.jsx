import React, { useState } from "react";
import { toast } from "react-toastify";
import { pushPhoto } from "../../../../../api/adminApi/api";

export default function SendProgramPicture() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isUploadingServer, setIsUploadingServer] = useState(false);

    const clrImageForm = () => {
        setName('');
        setCategory('');
        setImage(null);
        setUrl('');
    };

    const uploadPhoto = async () => {
        if (!image) {
            toast.error("Please select an image.");
            return;
        }
        try {
            setIsUploadingImage(true);
            const data = new FormData();
            data.append("file", image);
            data.append("upload_preset", "hridesh99!");
            data.append("cloud_name", "draowpiml");

            const response = await fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                throw new Error("Failed to upload image.");
            }

            const responseData = await response.json();
            setUrl(responseData.url);
            toast.success("Image uploaded successfully.");
        } catch (error) {
            toast.error("Error uploading image: " + error.message);
        } finally {
            setIsUploadingImage(false);
        }
    };

    const uploadToServer = async () => {
        if (!name || !category || !url) {
            toast.error("Please fill in all fields.");
            return;
        }
        try {
            setIsUploadingServer(true);
            const rspns = await pushPhoto(name, category, url);
            if (rspns.ackbool === 1) {
                toast.success(rspns.message);
                clrImageForm();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsUploadingServer(false);
        }
    };

    return (
        <div className="row m-auto text-center pb-5">
            <div className="container text-center text-secondary border-bottom border-secondary py-3 h2 fw-bolder text-uppercase" style={{ backgroundColor: '#012C5' }}>
                Upload <span className="text-danger">Gallery Images</span>
            </div>
            <div className="container col-md-5 my-lg-5">
                <div className="mb-3 input-group">
                    <input
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <button type="button" className="btn btn-warning" onClick={uploadPhoto} disabled={isUploadingImage}>
                        {isUploadingImage ? (<>  <span className="spinner-border spinner-border-sm me-1"></span> Uploading...
                        </>) : (<><i className="bi bi-upload me-1"></i> Upload</>)}
                    </button>


                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Photo Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={uploadToServer} disabled={isUploadingServer}>
                        {isUploadingServer ? <span className="spinner-border spinner-border-sm"></span> : "Push"}
                    </button>
                </div>
            </div>
        </div>
    );
}
