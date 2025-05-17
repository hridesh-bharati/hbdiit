
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling

const LiveChat = () => {
  useEffect(() => {
    // Dynamically load Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/6823658fbb22b7190a872d24/1ir549ei9';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document body
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this only runs once when the component mounts.

  // Function to open the Tawk chat window
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // Toggle chat visibility
    } else {
      console.error("Tawk API is not ready yet.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Our Website</h1>
      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={openChat}>
          Chat with Us
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
