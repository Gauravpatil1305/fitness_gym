import mainVideo from "../../assets/videos/main.mp4";

const HeroVideo = ({ video, setVideo }) => {
  const handleCancel = () => {
    setVideo(false); // This will close the video
  };

  return (
    <div className="h-screen w-full bg-[#000000d9] p-2 fixed top-0 z-50">
      <h2
        onClick={handleCancel}
        className="text-center py-4 text-white mt-[100px] text-[30px] cursor-pointer"
      >
        X
      </h2>
      <video
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg shadow-lg"
        autoPlay
        controls
        volume={0.2}
      >
        <source src={mainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={handleCancel}
        className="absolute top-[20px] right-[20px] bg-red-500 text-white p-2 rounded cursor-pointer"
      >
        Cancel
      </button>
    </div>
  );
};

export default HeroVideo;

