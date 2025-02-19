import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import gallery1 from "../../assets/gallery/WhatsApp Image 2025-02-13 at 22.10.56_b3db3a83.jpg";
import gallery2 from "../../assets/gallery/WhatsApp Image 2025-02-13 at 22.10.55_d971b34a.jpg";
import galleryVideo from "../../assets/gallery/WhatsApp Video 2025-02-13 at 22.25.28_6b54085d.mp4";

const Gallery = () => {
  return (
    <div>
      <PageHeading content="Our Gallery" />
      <section className="overflow-hidden text-gray-700 mb-10">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gallery1}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gallery2}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[400px]">
              <video
                controls
                className="block object-cover object-center w-full h-full rounded-lg"
              >
                <source src={galleryVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;