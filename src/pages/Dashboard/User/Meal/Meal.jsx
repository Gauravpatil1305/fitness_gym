import React, { useState, useEffect } from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import Table from "../../../../components/Dashboard/Form/Table/Table";
import { useDispatch } from "react-redux";
import { setMealModal } from "../../../../redux/features/modals/modalSlie";
import axios from "axios";
import { getUserInfo } from "../../../../service/storeUserInfo";
import { FaPlus } from "react-icons/fa"; // Import the Plus icon

const PORT = import.meta.env.VITE_BACKEND_PORT;

const UserMeal = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [mealData, setMealData] = useState([]);
  const [mealTitle, setMealTitle] = useState("");
  const [mealDuration, setMealDuration] = useState("");
  const [formVisible, setFormVisible] = useState(false); // State to control form visibility
  const [isCreating, setIsCreating] = useState(false); // Manage loading state

  const tableHead = [
    { index: 0, title: "Name", dataIndex: "mealTitle" },
    { index: 1, title: "Duration", dataIndex: "mealDuration" },
    { index: 2, title: "Start Date", dataIndex: "createdAt" },
  ];

  const fetchMealData = async (user) => {
    try {
      const response = await axios.get(`${PORT}/api/meal/${user.user_id}`);
      const result = response.data[0];
      setMealData(result);
    } catch (err) {
      console.error("Error fetching meal data:", err);
    }
  };

  useEffect(() => {
    // Assuming getUserInfo() is an async function; replace it with actual implementation
    const fetchUser = async () => {
      const userInfo = await getUserInfo();
      setUser(userInfo);
      if (userInfo) fetchMealData(userInfo);
    };

    fetchUser();
  }, []);

  const handleAddMeal = async (e) => {
    e.preventDefault();

    if (!user || !user.user_id) {
      console.error("User information is not available.");
      return;
    }

    setIsCreating(true);

    try {
      const meal = {
        userId: user.user_id,
        mealTitle,
        mealDuration,
        createdAt: new Date().toISOString(),
      };

      const response = await axios.post(`${PORT}/api/meal`, meal, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201 && response.data.success) {
        await fetchMealData(user);
        setMealTitle("");
        setMealDuration("");
        setFormVisible(false); // Hide the form after successful submission
      } else {
        throw new Error("Failed to create meal");
      }
    } catch (error) {
      console.error("Failed to create meal", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div>
      <PageHead title="Meal" />
      <div className=" rounded-xl p-4">
        <button
          onClick={() => setFormVisible(!formVisible)}
          className="flex items-center bg-blue text-white px-2 py-3 rounded-md hover:bg-blue/80 mb-4 transition duration-300"
        >
          <FaPlus className="mr-2" /> {formVisible ? "Close Form" : "Add Meal"}
        </button>

        {formVisible && (
          <form onSubmit={handleAddMeal} className="space-y-4 w-64 bg-white   p-4 rounded-md shadow-md mb-4">
            <div>
              <label className="block text-sm font-poppins font-medium text-blackGray mb-2">Meal Title</label>
              <input
                type="text"
                value={mealTitle}
                onChange={(e) => setMealTitle(e.target.value)}
                required
                className="block w-full rounded-md border border-borderColor bg-whiteGray px-3 py-2 text-base text-blackGray shadow-sm focus:border-blue focus:ring-blue sm:text-sm"
                placeholder="Enter meal title"
              />
            </div>
            <div>
              <label className="block text-sm font-poppins font-medium text-blackGray mb-2">Duration</label>
              <input
                type="text"
                value={mealDuration}
                onChange={(e) => setMealDuration(e.target.value)}
                required
                className="block w-full rounded-md border border-borderColor bg-whiteGray px-3 py-2 text-base text-blackGray shadow-sm focus:border-blue focus:ring-blue sm:text-sm"
                placeholder="Enter duration (e.g., 30 min)"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50"
              disabled={isCreating}
            >
              {isCreating ? "Adding..." : <><FaPlus className="mr-2" /> Add Meal</>}
            </button>
          </form>
        )}

        {mealData.length > 0 && (
          <Table
            tableFor="Routine"
            title="My Meals"
            tableHead={tableHead}
            data={mealData}
            isview={true}
            isviewOption={(data) => dispatch(setMealModal(data))}
          />
        )}
      </div>
    </div>
  );
};

export default UserMeal;
