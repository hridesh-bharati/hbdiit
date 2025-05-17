import React, { useState, useEffect } from "react";
import { getPhotos } from "../../../api/adminApi/api";
import Footer from "../../Footer/Footer";

export default function () {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const rspns = await getPhotos("undefined");
      setImages(rspns.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid text-center py-4 h2 mt-4 fw-bolder text-uppercase">
        Image Gallery
      </div>
      <div className="container-fluid py-5">
        <div className="row gallaryImg">
          {images.map((image, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3 p-1 myshadow">
                <div className="image-container">
                  <img
                    src={image.url}
                    className="card-img-top"
                    alt={image.name}
                  />
                  <div className="overlay">
                    <h1 className="overlay-title">{image.name}</h1>
                    <p className="overlay-category small">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
      <Footer />

      <style>
        {`
        .myshadow {
          position: relative;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }

        .card-img-top {
          transition: transform 0.3s ease;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .image-container:hover .card-img-top {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.55);
          color: white;
          opacity: 0;
          visibility: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .image-container:hover .overlay {
          opacity: 1;
          visibility: visible;
        }

        .overlay-title {
        font-size:"200px
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .overlay-category {
          font-style: italic;
          color: #f0f0f0;
        }

        .gallaryImg .card {
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .gallaryImg .card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
        }
      `}
      </style>
    </div>
  );
}
