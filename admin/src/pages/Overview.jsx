import React, { useEffect, useState } from "react";
import api from "../../../user/src/utility/AxiosConfig";

function Overview() {
  return (
    <div>
      <OverviewContent />
    </div>
  );
}

function OverviewContent() {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    FetchDashboard();
  }, []);

  async function FetchDashboard() {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    // Users
    const userRes = await api.get("/admin/getusers", { headers });
    console.log("Users:", userRes.data);
    setUsers(userRes.data.users || []);

    // Bookings
    const bookingRes = await api.get("/admin/getbooking", { headers });
    console.log("Bookings:", bookingRes.data);
    setBookings(bookingRes.data.booking || []);

    // Services
    const serviceRes = await api.get("/user/getservices", { headers });
    console.log("Services:", serviceRes.data);
    setServices(serviceRes.data.services || []);

    // Blogs
    const blogRes = await api.get("/user/getblogs", { headers });
    console.log("Blogs:", blogRes.data);
    setBlogs(blogRes.data.blogs || []);

  } catch (e) {
    console.log("Dashboard Error:", e);
    console.log("Response:", e.response?.data);
  }
}

  return (
    <div className="bg-background min-h-screen lg:ml-[280px]">

      {/* Header */}

      <header className="sticky top-0 bg-white shadow-sm z-40 h-20 flex justify-between items-center px-8">

        <div>
          <h2 className="text-3xl font-bold">
            Dashboard
          </h2>

          <p className="text-gray-500">
            Welcome Back Admin
          </p>
        </div>

      

      </header>

      <div className="p-8">

        {/* Cards */}

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all">
    <p className="text-gray-500 text-sm">Total Users</p>
    <h2 className="text-5xl font-bold text-[#A38F7A] mt-3">
      {users.length}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all">
    <p className="text-gray-500 text-sm">Total Bookings</p>
    <h2 className="text-5xl font-bold text-[#A38F7A] mt-3">
      {bookings.length}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all">
    <p className="text-gray-500 text-sm">Total Services</p>
    <h2 className="text-5xl font-bold text-[#A38F7A] mt-3">
      {services.length}
    </h2>
  </div>

  <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all">
    <p className="text-gray-500 text-sm">Total Blogs</p>
    <h2 className="text-5xl font-bold text-[#A38F7A] mt-3">
      {blogs.length}
    </h2>
  </div>

</div>

        {/* Recent Bookings */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-5 border-b">

            <h2 className="text-xl font-semibold">
              Recent Bookings
            </h2>

          </div>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left p-4">
                  Customer
                </th>

                <th className="text-left p-4">
                  Service
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Payment
                </th>

              </tr>

            </thead>

            <tbody>

              {bookings.slice(0,5).map((item)=>(
                <tr key={item._id} className="border-b">

                  <td className="p-4">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.service_title}
                  </td>

                  <td className="p-4">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                      {item.booking_status}

                    </span>

                  </td>

                  <td className="p-4">

                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">

                      {item.payment_status}

                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Latest Users */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-5 border-b">

            <h2 className="text-xl font-semibold">
              Latest Users
            </h2>

          </div>

          <div className="divide-y">

            {users.slice(0,5).map((user)=>(
              <div
              key={user._id}
              className="flex justify-between items-center p-5">

                <div>

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-gray-500">
                    {user.email}
                  </p>

                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                  Active

                </span>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Overview;