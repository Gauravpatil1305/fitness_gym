import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserInfo } from "../../../service/storeUserInfo";
import { UserRole } from "../../../constant/user";
import { useDispatch, useSelector } from "react-redux";
import { setUserModal } from "../../../redux/features/modals/modalSlie";

const Sidebar = ({ sidebar }) => {
  // Logged User Information
  const user = getUserInfo();

  const role = user?.role;
  // Url path
  const urlPath = `/dashboard/${role}`;

  // Active Path
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Set Modal Status
  const dispatch = useDispatch();

  return (
    <div
      className={`bg-white h-screen border-r    border-gray min-w-[300px] py-4 px-4 ${
        sidebar ? "block" : "hidden"
      } z-1 md:block absolute md:static`}
    >
      <div className="my-4">
        <p className="text-blackGray ">Management</p>
        {/* Common  */}
        <ul>
          <li
            className={`${
              isActive(`${urlPath}`)
                ? "bg-gray rounded-r-full border-red border-l-4"
                : ""
            }  px-4 my-2 py-2`}
          >
            <Link to={urlPath} className="flex items-center text-blackGray">
              <i class="fa-solid fa-house h-[20px] w-[20px]"></i>{" "}
              <span className="text-[16px]  mx-2">Home</span>
            </Link>
          </li>
        </ul>
        {/* User Menus */}

        {role === UserRole.USER && (
          <ul>
            <li
              className={`${
                isActive(`${urlPath}/meal`)
                  ? "bg-gray rounded-r-full border-red border-l-4"
                  : ""
              }  px-4 my-2 py-2`}
            >
              <Link
                to={`${urlPath}/meal`}
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-scale-unbalanced h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">My Meal</span>
              </Link>
            </li>
            <li
              className={`${
                isActive(`${urlPath}/routine`)
                  ? "bg-gray rounded-r-full border-red border-l-4"
                  : ""
              }  px-4 my-2 py-2`}
            >
              <Link
                to={`${urlPath}/routine`}
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-book h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Routine</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link
                to="/membership"
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-m h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Membership</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/trainer" className="flex items-center text-blackGray">
                <i class="fa-solid fa-person-chalkboard h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Trainer</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/activity" className="flex items-center text-blackGray">
                <i class="fa-solid fa-chart-line h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Activity</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/payments" className="flex items-center text-blackGray">
                <i class="fa-solid fa-file-invoice-dollar h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Payments</span>
              </Link>
            </li>
          </ul>
        )}

        {/* Trainer Menus */}
        {role === UserRole.TRAINER && (
          <ul>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/students" className="flex items-center text-blackGray">
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">My Students</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link
                to="/availability"
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-timeline h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Availabiity</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link
                to="/meal-plan"
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-bowl-food h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Meal Plan</span>
              </Link>
            </li>
          </ul>
        )}

        {/* Admin Options */}

        {role === UserRole.ADMIN && (
          <ul>
            <li
              className={`${
                isActive(`${urlPath}/members`)
                  ? "bg-gray rounded-r-full border-red border-l-4"
                  : ""
              }  px-4 my-2 py-2`}
            >
              <Link
                to={`${urlPath}/members`}
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Members</span>
              </Link>
            </li>
            <li
              className={`${
                isActive(`${urlPath}/trainers`)
                  ? "bg-gray rounded-r-full border-red border-l-4"
                  : ""
              }  px-4 my-2 py-2`}
            >
              <Link
                to={`${urlPath}/trainers`}
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Trainers</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <p
                onClick={() => {
                  dispatch(setUserModal(true));
                }}
                className="cursor-pointer flex items-center text-blackGray"
              >
                <i class="fa-solid fa-user h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Add User</span>
              </p>
            </li>
            <li
              className={`${
                isActive(`${urlPath}/meal-plan`)
                  ? "bg-gray rounded-r-full border-red border-l-4"
                  : ""
              }  px-4 my-2 py-2`}
            >
              <Link
                to={`${urlPath}/meal-plan`}
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-bowl-food h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Meal Plan</span>
              </Link>
            </li>
          </ul>
        )}

        {/* Super Admin */}
        {role === UserRole.SUPER_ADMIN && (
          <ul>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/admins" className="flex items-center text-blackGray">
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Admins</span>
              </Link>
            </li>
            <li
              className={`hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2`}
            >
              <Link to="/members" className="flex items-center text-blackGray">
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Members</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/trainers" className="flex items-center text-blackGray">
                <i class="fa-solid fa-users h-[20px] w-[20px]"></i>
                <span className="text-[16px]  mx-2">Trainers</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link to="/add-user" className="flex items-center text-blackGray">
                <i class="fa-solid fa-user h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Add User</span>
              </Link>
            </li>
            <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
              <Link
                to="/meal-plan"
                className="flex items-center text-blackGray"
              >
                <i class="fa-solid fa-bowl-food h-[20px] w-[20px]"></i>{" "}
                <span className="text-[16px]  mx-2">Meal Plan</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="my-4">
        <p className="text-blackGray ">Settings</p>
        <ul>
          <li className="hover:bg-gray px-4 hover:rounded-r-full hover:border-red hover:border-l-4 my-2 py-2">
            <Link to="/settings" className="flex items-center text-blackGray">
              <i class="fa-solid fa-gear h-[20px] w-[20px]"></i>
              <span className="text-[16px]  mx-2">Genarel Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
