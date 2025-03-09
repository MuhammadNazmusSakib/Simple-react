import { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        setPhotos(data.slice(0, 20)); // Get first 20 photos
        setLoading(false);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">Photo Gallery</h2>

      {loading ? (
        <p className="text-center">Loading photos...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="p-2 border rounded-md shadow-md bg-white">
              <img src={photo.thumbnailUrl} alt={photo.title} className="w-full rounded-md" />
              <p className="text-sm text-gray-600 mt-2">{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
