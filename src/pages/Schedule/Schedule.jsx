import React from "react";
import { Link } from "react-router-dom"; // Import Link component from React Router
import PageHeading from "../../components/PageHeading/PageHeading";
import SubHead from "../../components/Heading/SubHead";
import SectionHead from "../../components/Heading/SectionHead";

const Schedule = () => {
  return (
    <div>
      <PageHeading content="Schedule" />
      <div className="bg-white pt-20 pb-10">
        <div className="px-5 text-center">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Time Schedule" />
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <SectionHead
              color="black"
              title="Select The Perfect Time You Need Now "
            />
          </div>
        </div>

        <div className="my-20 font-popins">
          {/* Weekdays List with Alternating Layout */}
          <ul className="bg-sky px-4 py-6 space-y-8 lg:px-20">
            
            {/* Saturday - Image on Left, Text on Right */}
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-2 lg:pl-6 text-center lg:text-left px-6 py-2">
                <p>Monday To Saturday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-black text-white px-4 py-2">4pm-6pm</h5>
                    <h2 className="text-[30px]">Ledies Batch</h2>
                    <p>by Pradum</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-1">
                <img
                  src="Gym_-_Kayla_-_7108-1024x683-27c3a53.jpg"
                  alt="Saturday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>

            {/* Sunday - Text on Left, Image on Right */}
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-1 text-center lg:text-right px-6 py-2">
                <p>Tuesday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                    <h2 className="text-[30px]">Zumba Class</h2>
                    <p>by Armas</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-2">
                <img
                  src="images.jpeg"
                  alt="Sunday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>

            {/* Monday - Image on Left, Text on Right */}
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-2 lg:pl-6 text-center lg:text-left px-6 py-2">
                <p>Wednesday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                    <h2 className="text-[30px]">Stretching</h2>
                    <p>by Gaurav</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-1">
                <img
                  src="190128-exercise-gym-ac-556p.jpg"
                  alt="Monday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>

            {/* Tuesday - Text on Left, Image on Right */}
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-1 text-center lg:text-right px-6 py-2">
                <p>Thursday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                    <h2 className="text-[30px]">Meditation</h2>
                    <p>by Ramkrishna</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-2">
                <img
                  src="MAIN-IMAGE-RESIZED-shutterstock_499280881-1300x600.jpg"
                  alt="Tuesday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>

            {/* Wednesday - Image on Left, Text on Right */}
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-2 lg:pl-6 text-center lg:text-left px-6 py-2">
                <p>Friday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                    <h2 className="text-[30px]">Personal Training</h2>
                    <p>by John</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-1">
                <img
                  src="pngtree-female-preparing-for-workout-at-the-gym-by-stretching-and-warming-up-photo-image_43337824.jpg"
                  alt="Wednesday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>
            <li className="grid grid-cols-1 lg:grid-cols-2 items-center text-[24px] hover:bg-main hover:text-white transition duration-300">
              <div className="lg:order-1 text-center lg:text-right px-6 py-2">
                <p>Saturday</p>
                <Link to="/about">
                  <div>
                    <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                    <h2 className="text-[30px]">Meditation</h2>
                    <p>by Krishna</p>
                  </div>
                </Link>
              </div>
              <div className="lg:order-2">
                <img
                  src="MAIN-IMAGE-RESIZED-shutterstock_499280881-1300x600.jpg"
                  alt="Tuesday Gym Image"
                  className="mx-auto mb-2"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
