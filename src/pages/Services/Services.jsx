import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { FaDumbbell, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";
import SubHead from "../../components/Heading/SubHead";
import SectionHead from "../../components/Heading/SectionHead";

const plans = [
  {
    title: "Regular Plan",
    price: "₹1199",
    duration: "Monthly",
    type: "men",
  },
  {
    title: "Bronze Plan",
    price: "₹3199",
    duration: "3 Months",
    type: "men",
  },
  {
    title: "Silver Plan",
    price: "₹5999",
    duration: "6 Months",
    type: "men",
  },
  {
    title: "Gold Plan",
    price: "₹9999",
    duration: "12 Months",
    type: "men",
  },
  {
    title: "Couple Plan",
    price: "₹13999",
    duration: "12 Months",
    type: "men",
  },
  {
    title: "Regular Plan",
    price: "₹799",
    duration: "Monthly",
    type: "women",
  },
  {
    title: "Bronze Plan",
    price: "₹2399",
    duration: "3 Months",
    type: "women",
  },
  {
    title: "Silver Plan",
    price: "₹4499",
    duration: "6 Months",
    type: "women",
  },
  {
    title: "Gold Plan",
    price: "₹5999",
    duration: "12 Months",
    type: "women",
  },
  {
    title: "Couple Plan",
    price: "₹13999",
    duration: "12 Months",
    type: "women",
  },
  {
    title: "Regular Plan",
    price: "₹1000",
    duration: "Monthly",
    type: "group",
  },
  {
    title: "Bronze Plan",
    price: "₹3000",
    duration: "3 Months",
    type: "group",
  },
  {
    title: "Silver Plan",
    price: "₹4999",
    duration: "6 Months",
    type: "group",
  },
  {
    title: "Gold Plan",
    price: "₹9999",
    duration: "12 Months",
    type: "group",
  },
];

const Services = () => {
  // Filter plans by type
  const menPlans = plans.filter((plan) => plan.type === "men");
  const womenPlans = plans.filter((plan) => plan.type === "women");
  const groupPlans = plans.filter((plan) => plan.type === "group");

  return (
    <div>
      <PageHeading content="Services" />
      {/* Services */}
      <div className="bg-fixed bg-cover bg-center pt-20 pb-10">
        <div className="px-5">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Push Your Limits Forward We Offer To You"
            />
            <div className="lg:w-3/12">
              <Button>
                <Link to="/login" className="md:px-2">
                  Become A Member
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center">
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="Health Caring"
            description="Believe in the power of your own strength. Your fitness journey starts now."
            path="/services"
            content="Discover more About us"
          />
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="QUALITY EQUIPMENT"
            description="Experience the difference that premium equipment makes."
            path="/services"
            content="Discover more About us"
          />
          <ServiceCard
            icon="fa-solid fa-dumbbell"
            title="Gym Strategies"
            description="Our gym’s success strategy is built on innovation, motivation, and dedication."
            path="/services"
            content="Discover more About us"
          />
        </div>
      </div>

      {/* Membership Plans */}
      <div className="py-16 bg-gray-100">
        {/* Men's Gym Membership */}
        <div className="mb-16">
          <h2 className="text-center text-3xl font-bold mb-8">Men’s Gym Membership</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {menPlans.map((plan, index) => (
              <div
                key={index}
                className="w-64 p-6 bg-white shadow-lg rounded-lg text-center border transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-500 mb-2">{plan.duration}</p>
                <p className="text-2xl font-bold text-main">{plan.price}</p>
                <button className="mt-4 px-4 py-2 bg-main text-white rounded-full hover:bg-gray-900 transition duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Women's Gym Membership */}
        <div className="mb-16">
          <h2 className="text-center text-3xl font-bold mb-8">Women’s Gym Membership</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {womenPlans.map((plan, index) => (
              <div
                key={index}
                className="w-64 p-6 bg-white shadow-lg rounded-lg text-center border transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-500 mb-2">{plan.duration}</p>
                <p className="text-2xl font-bold text-main">{plan.price}</p>
                <button className="mt-4 px-4 py-2 bg-main text-white rounded-full hover:bg-gray-900 transition duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Group Gym Membership */}
        <div>
          <h2 className="text-center text-3xl font-bold mb-8">Group Gym Membership (Members more than 3)</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {groupPlans.map((plan, index) => (
              <div
                key={index}
                className="w-64 p-6 bg-white shadow-lg rounded-lg text-center border transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-500 mb-2">{plan.duration}</p>
                <p className="text-2xl font-bold text-main">{plan.price}</p>
                <button className="mt-4 px-4 py-2 bg-main text-white rounded-full hover:bg-gray-900 transition duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;