import React from "react";

const GoogleMap = () => {
  return (
    <>
      <iframe
        className="w-full h-96 shadow-md shadow-gray-400"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11542.864827120442!2d-79.8058491!3d43.6748717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b14f4961f6e83%3A0x5630e41c061ff5df!2sYaseen%20Musalla!5e0!3m2!1sen!2sca!4v1733168054764!5m2!1sen!2sca"
        loading="lazy"
      ></iframe>
    </>
  );
};

export default GoogleMap;
