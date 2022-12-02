import React from "react";

const DetailImage = ({ image, title }) => {
  //const backgroundString = `--background: url(${image})`
  return (
    <div className="detail-image"
        style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
        height: "250px",
        width: "100%"
      }}
    
    >
      
      <div>
        <h1 className="">{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;