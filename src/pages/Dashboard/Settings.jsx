import React, { useEffect, useState } from "react";
import PageHead from "../../components/Dashboard/Shared/Common/PageHead";
import Filed from "../../components/Dashboard/Button/Filed";
import Input from "../../components/Dashboard/Form/Input/Input";
import { useForm } from "react-hook-form";
import { getUserInfo } from "../../service/storeUserInfo";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const PORT = import.meta.env.VITE_BACKEND_PORT;

// Function to fetch user details from the backend
const fetchUserDetails = async (userId) => {
  const response = await axios.get(`${PORT}/api/user-details/${userId}`);
  return response.data;
};

// Function to update user details
const updateUserDetails = async (userId, data) => {
  const response = await axios.patch(`${PORT}/api/user-details/${userId}`, data);
  return response.data;
};

// Function to change user password
const changeUserPassword = async (userId, data) => {
  const response = await axios.patch(`${PORT}/api/change-password/${userId}`, data);
  return response.data;
};

const Settings = () => {
  // Get User Information
  const user = getUserInfo();

  // User Details Information
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle Tabs
  const [handleTabs, setHandleTabs] = useState("Personal");

  // Get history
  const { value } = useParams();

  useEffect(() => {
    if (value === "change-password") {
      setHandleTabs("Security");
    }
  }, [value]);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const data = await fetchUserDetails(user?.user_id);
        setUserDetails(data);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [user?.user_id]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const updatedData = {
        first_name: data.firstName,
        last_name: data.lastName,
        phone_number: data.phoneNumber,
        address: data.address,
        dob: data.dateOfBirth,
        gender: data.gender,
      };

      console.log("Updated Profile Data:", updatedData);

      await updateUserDetails(user?.user_id, updatedData);
      toast.success("Profile updated successfully");
      reset();
    } catch (error) {
      toast.error("Failed to update profile");
      console.log(error);
    }
  };

  const validatePasswords = (value) => {
    const newPassword = watch("newPassword"); // Get the value of "New Password" field
    return value === newPassword || "Passwords don't match";
  };

  const changePassword = async (data) => {
    const changedPassword = {
      current_password: data.currentPassword,
      new_password: data.newPassword,
      confirm_new_password: data.confirmNewPassword,
    };


    try {
      await changeUserPassword(user?.user_id, changedPassword);
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Failed to change password");
    }
  };

  return (
    <div className="">
      <PageHead title="Settings"></PageHead>
      <ul className="flex mb-6 border-b border-gray">
        <li
          className={`p-2 text-lg font-semibold ${
            handleTabs === "Personal" ? "border-b-2 border-main text-main" : ""
          } mx-2 cursor-pointer`}
          onClick={() => {
            setHandleTabs("Personal");
          }}
        >
          Personal
        </li>
        <li
          className={`p-2 text-lg font-semibold ${
            handleTabs === "Security" ? "border-b-2 border-main text-main" : ""
          } mx-2 cursor-pointer`}
          onClick={() => {
            setHandleTabs("Security");
          }}
        >
          Security
        </li>
      </ul>

      {handleTabs === "Personal" && (
        <div className="bg-white">
          <div className="p-4">
            <div className="md:flex">
              <div className="w-full md:w-3/12">
                <h2 className="font-semibold text-lg">Basic Information</h2>
                <p className="text-lg">Personal Details</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-9/12">
                <div className="grid grid-cols-1 md:grid-cols-2 my-4">
                  <Input
                    hookForm={register("firstName")}
                    name="First Name"
                    defaultValue={userDetails?.first_name || ""}
                  ></Input>
                  <Input
                    hookForm={register("lastName")}
                    name="Last Name"
                    defaultValue={userDetails?.last_name || ""}
                  ></Input>
                  <Input
                    hookForm={register("phoneNumber")}
                    name="Phone Number"
                    defaultValue={userDetails?.phone_number || ""}
                  ></Input>
                  <div className="my-2 px-2">
                    <p className="py-2">Gender:</p>
                    <select
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]"
                      {...register("gender")}
                      defaultValue={userDetails?.gender || ""}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                  <div className="my-2 px-2">
                    <p className="py-2">Date Of Birth</p>
                    <input
                      type="date"
                      className="bg-whiteGray outline-none border border-gray px-4 py-2 w-full text-[16px]"
                      {...register("dateOfBirth")}
                      defaultValue={userDetails?.dob?.split("T")[0] || ""}
                    />
                  </div>
                  <Input
                    hookForm={register("address")}
                    name="Address"
                    defaultValue={userDetails?.address || ""}
                  ></Input>
                </div>
                <div className="flex justify-end mt-8 w-full">
                  <Filed content="Save change" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {handleTabs === "Security" && (
        <div className="bg-white mt-10">
          <div className="p-4">
            <div className="md:flex">
              <div className="w-full md:w-3/12">
                <h2 className="font-semibold text-lg">Security</h2>
                <p className="text-lg">Update Password</p>
              </div>
              <form
                onSubmit={handleSubmit(changePassword)}
                className="w-full md:w-9/12"
              >
                <div className="grid grid-cols-1 my-4">
                  <Input
                    hookForm={register("currentPassword", {
                      required: "Current Password is required",
                    })}
                    name="Current Password"
                  ></Input>
                  <Input
                    hookForm={register("newPassword", {
                      required: "New Password is required",
                    })}
                    name="New Password"
                  ></Input>
                  <Input
                    hookForm={register("confirmNewPassword", {
                      required: "Confirm New Password is required",
                      validate: validatePasswords,
                    })}
                    name="Confirm New Password"
                  ></Input>
                </div>
                {errors.confirmNewPassword && (
                  <p className="text-red">{errors.confirmNewPassword.message}</p>
                )}
                <div className="flex justify-end mt-8 w-full">
                  <Filed content="Update Password" type={"submit"}></Filed>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
