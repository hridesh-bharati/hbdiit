import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { deletePhoto, getPhotos } from "../../../../../api/adminApi/api";

const ProgramPictures = () => {
  const [images, setImages] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await getPhotos("undefined");
      setImages(response.message);
    } catch (error) {
      toast.error("Error fetching images.");
    }
  };

  const deleteImage = async (_id) => {
    try {
      setLoadingId(_id);
      const response = await deletePhoto(_id);
      if (response.ackbool === 1) {
        toast.success("Image deleted.");
        setImages((prev) => prev.filter((img) => img._id !== _id));
      } else {
        toast.error("Failed to delete.");
      }
    } catch (error) {
      toast.error("Delete error.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      <header className="py-4 text-center text-uppercase fw-bold h3 text-white" style={{ backgroundColor: "#012C5F" }}>
        Delete <span className="text-danger">Gallery Images</span>
      </header>

      <main className="container py-5">
        {images.length === 0 ? (
          <p className="text-center text-muted">No images available.</p>
        ) : (
          <div className="row g-4">
            {images.map((image) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={image._id}>
                <div className="card border-0 shadow position-relative h-100">
                  <img
                    src={image.url}
                    className="card-img-top"
                    alt={image.name || "Gallery"}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <button
                      className="btn btn-danger btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "32px", height: "32px" }}
                      onClick={() => deleteImage(image._id)}
                      disabled={loadingId === image._id}
                      title="Delete"
                    >
                      {loadingId === image._id ? (
                        <div className="spinner-border spinner-border-sm" role="status" />
                      ) : (
                        <i className="bi bi-trash-fill"></i>
                      )}
                    </button>
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title mb-1">{image.name}</h6>
                    <p className="card-text text-muted small mb-0">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProgramPictures;
