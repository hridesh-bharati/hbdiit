import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { deletePhoto, getPhotos } from "../../../../../api/adminApi/api";

const ProgramPictures = () => {
  const [images, setImages] = useState([]);
  const [loadingId, setLoadingId] = useState(null); // Track which image is being deleted

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await getPhotos('undefined');
      setImages(response.message);
    } catch (error) {
      toast.error("Error fetching images.");
      console.error(error);
    }
  };

  const deleteImage = async (_id) => {
    try {
      setLoadingId(_id); // Set loading state for this image
      const response = await deletePhoto(_id);
      if (response.ackbool === 1) {
        toast.success('Image deleted successfully.');
        setImages(prevImages => prevImages.filter(img => img._id !== _id));
      } else {
        toast.error("Failed to delete image.");
      }
    } catch (error) {
      toast.error("Error deleting image.");
      console.error(error);
    } finally {
      setLoadingId(null); // Reset loading state
    }
  };

  return (
    <div>
      <div className="container text-center text-secondary py-3 h2 fw-bolder text-uppercase" style={{ backgroundColor: '#012C5' }}>
        Delete <span className="text-danger">Gallery Images</span>
      </div>

      <div className="container pb-5">
        <div className="row gallaryImg">
          {images.length === 0 ? (
            <p className="text-center text-muted">No images available.</p>
          ) : (
            images.map((image) => (
              <div className="col-md-3" key={image._id}>
                <div className="card mb-3">
                  <img src={image.url} className="card-img-top" alt={image.name} />
                  <div className="card-body text-start p-2">
                    <h6 className="card-title m-0">{image.name}</h6>
                    <p className="card-text small text-primary m-0">
                      <small>{image.category}</small>
                    </p>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => deleteImage(image._id)}
                    disabled={loadingId === image._id}
                  >
                    {loadingId === image._id ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramPictures;
