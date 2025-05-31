import React, { useState } from "react";
import { toast } from "react-toastify";
import { pushPhoto } from "../../../../../api/adminApi/api";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SendProgramPicture() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isUploadingServer, setIsUploadingServer] = useState(false);

    const clearForm = () => {
        setName('');
        setCategory('');
        setImage(null);
        setUrl('');
    };

    const uploadPhoto = async () => {
        if (!image) {
            toast.error("Select an image.");
            return;
        }
        setIsUploadingImage(true);
        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", "hridesh99!");
            formData.append("cloud_name", "draowpiml");

            const res = await fetch('https://api.cloudinary.com/v1_1/draowpiml/image/upload', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error?.message || "Upload failed");
            setUrl(data.url);
            toast.success("Image uploaded.");
        } catch (err) {
            toast.error("Upload error: " + err.message);
        } finally {
            setIsUploadingImage(false);
        }
    };

    const uploadToServer = async () => {
        if (!name || !category || !url) {
            toast.error("Fill all fields.");
            return;
        }
        setIsUploadingServer(true);
        try {
            const res = await pushPhoto(name, category, url);
            if (res.ackbool === 1) {
                toast.success(res.message);
                clearForm();
            }
        } catch (err) {
            toast.error("Server error.");
        } finally {
            setIsUploadingServer(false);
        }
    };

    return (
        <div className="container bg-white" style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
            <h3 className="text-center bg-dark text-white p-2">Upload Gallery Image</h3>
            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
            <button className="btn btn-primary mt-2" onClick={uploadPhoto} disabled={isUploadingImage}>
                {isUploadingImage ? "Uploading..." : "Upload"}
            </button>
            <input
                type="text"
                className="form-control mt-3"
                placeholder="Photo Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <button className="btn btn-success mt-3" onClick={uploadToServer} disabled={isUploadingServer}>
                {isUploadingServer ? "Saving..." : "Push to Server"}
            </button>
        </div>
    );
}
