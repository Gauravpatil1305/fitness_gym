import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import serviceImage from "../../assets/gallery/service.png";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  FaDumbbell,
  FaHeartbeat,
  FaICursor,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import MainButton from "../../components/Buttons/MainButton";
import SubHead from "../../components/Heading/SubHead";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import SectionHead from "../../components/Heading/SectionHead";
const Services = () => {
  return (
    <div>
      <PageHeading content="Services" />
      {/* Services */}
      <div
        className="bg-fixed bg-cover bg-center pt-20 pb-10"
       >
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
          <SectionHead
              color="black"
              title="Push Your Limits Forward We Offer To You "
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link to="/login" className="md:px-2">
                  Become A Member
                </Link>
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="health caring"
            description="Believe in the power of your own strength. With dedication and perseverance, there’s nothing you can’t achieve. Your fitness journey starts now."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="QUALITY EQUIPMENT"
            status="active"
            description="Experience the difference that premium equipment makes. At our gym, we invest in the best so you can focus on what matters most: your health and fitness."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="gym strategies"
            description="Our gym’s success strategy is built on three pillars: innovation, motivation, and dedication. We continuously update our methods to provide you with the best tools and support to reach your fitness goals."
            path="/services"
            content="Discover more About us"
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
