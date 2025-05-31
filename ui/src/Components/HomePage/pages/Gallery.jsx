import React, { useState, useEffect } from "react";
import { getPhotos } from "../../../api/adminApi/api";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getPhotos("undefined");
      setImages(response.message);
    } catch (err) {
      setError("Failed to load images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (image) => setSelectedImage(image);
  const handleCloseModal = () => setSelectedImage(null);

  return (
    <div>
      <div className="text-center py-4 mt-4 text-white" style={{
        background: "linear-gradient(90deg,rgba(10, 74, 184, 0.66) 0%,rgba(21, 79, 160, 0.78) 100%) , url(images/vender/contactbg.png) "
      }}>
        <h2 className="fw-bolder text-uppercase" >Image Gallery</h2>
        <p className="text-light">Browse through a collection of categorized images.</p>
        <button className="btn btn-warning my-3 rounded-0" onClick={fetchImages}>
          Reload Gallery
        </button>
        {error && <p className="text-danger">{error}</p>}
      </div>
      <div className="container py-5">
        <div className="row gallery-img">
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : (
            images.map((image, index) => (
              <div className="col-md-4 col-sm-6 mb-4" key={index}>
                <ImageCard image={image} onClick={() => handleImageClick(image)} />
              </div>
            ))
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="img-fluid modal-image"
            />
            <p className="text-white mt-2">{selectedImage.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageCard({ image, onClick }) {
  return (
    <div className="card shadow-sm border-0 rounded-lg overflow-hidden">
      <div className="image-container" onClick={onClick}>
        <img
          src={image.url}
          className="card-img-top"
          alt={image.name || "Image"}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-truncate">{image.name}</h5>
        <p className="card-text text-muted small">
          {image.category || "No description available."}
        </p>
      </div>
      <style>
        {`
        /* General Styling for the Gallery */
.gallery-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Prevent overlap and space out the images */
}

.gallery-img .card {
  width: 100%;
  max-width: 100%;
  transition: transform 0.3s ease;
  height: 100%;
}

.gallery-img .card:hover {
  transform: scale(1.05); /* Slight zoom effect on hover */
}

/* Ensuring the images maintain a clean aspect ratio */
.image-container {
  position: relative;
  overflow: hidden;
  height: 200px; /* Ensure cards have a fixed height */
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images cover the entire container without distortion */
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  text-align: center;
  position: relative;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  margin-bottom: 1rem;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4747;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.close-button:hover {
  background: #e04040;
}

        `}
      </style>
    </div>
  );
}
