import axios from "axios";
import { use, useEffect, useState } from "react";

//form
//submit and show data

// http://localhost:3000/usres

function Body() {
  const [userData, setUserData] = useState([]);
  const [filterdDAta, setFilterdData] = useState([]);
  let [value, setValue] = useState(0);

  const getUserData = async (value ="") => {
    try {
      let res = await axios.get(`http://localhost:3000/usres?filter=${value}`);
      setUserData(res?.data?.data);
      setFilterdData(res?.data?.data);
      console.log("api call");
    } catch (error) {
      console.error(error);
    }
  };

  const filtetData = (e) => {
    const filter = e.target.value;
    console.log(filter);
    if (filter == "all") setFilterdData(userData);
    else setFilterdData(userData.filter((data) => data?.city == filter));
  };
  useEffect(() => {
    getUserData();
  }, [value]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <button onClick={() => setValue(value + 1)}>Reload {value}</button>
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Users List
      </h1>
      <select onChange={(e) => getUserData(e.target.value)}>
        <option value={""}>All</option>
        {userData?.map((data, i) => (
          <option value={data?.city} key={i}>
            {data?.city}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterdDAta?.map((data, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                {data.name.charAt(0)}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {data.name}
                </h2>
                <p className="text-sm text-gray-500">{data.role}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                📧 <span className="font-medium">{data.email}</span>
              </p>
              <p>
                📍 <span className="font-medium">{data.city}</span>
              </p>
              <p>
                🎂 <span className="font-medium">{data.age} years</span>
              </p>
            </div>

            <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-xl hover:opacity-90 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
