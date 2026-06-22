import React from 'react'
import { useState } from 'react';
import api from '../../../user/src/utility/AxiosConfig';
import { useEffect } from 'react';

function User() {
  return (
    <div>
      <UserContent/>
    </div>
  )
}

function UserContent(){
  const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
async function FetchUsers() {
  try {
    setLoading(true);

    const response = await api.get("/admin/getusers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setUsers(response.data.users || []);
  } catch (e) {
    console.log(e);
    setError(e.response?.data?.message || e.message);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  FetchUsers();
}, []);
    return(
        <>
            <div className='font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container'>
  <main className="lg:ml-[280px] min-h-screen">
    <div className='p-gutter max-w-container-max mx-auto space-y-lg'>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
        <div>
          <nav className="flex items-center gap-2 mb-2 text-on-surface-variant">
            <a className="font-label-md hover:text-primary" href="#">Dashboard</a>
            <span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
            <span className="font-label-md text-primary font-bold">Users</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">User Catalog</h2>
          <p className="font-body-md text-on-surface-variant">Manage your luxury inventory, pricing, and stock levels.</p>
        </div>
       
      </div>
    </div>
    
    {/* Content Canvas */}
    <div className="p-gutter max-w-container-max mx-auto">
   
      {/* Data Table Container */}
      <div className="bg-surface-container-lowest rounded-b-xl border-x border-b border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/20">
              <tr>
                <th className="px-lg py-4 font-label-md text-label-md text-on-surface-variant/70 tracking-wider">
                  <div className="flex items-center gap-2">
                    USER INFO
                    <span className="material-symbols-outlined text-sm" data-icon="unfold_more">unfold_more</span>
                  </div>
                </th>
                <th className="px-lg py-4 font-label-md text-label-md text-on-surface-variant/70 tracking-wider">ROLE</th>
                <th className="px-lg py-4 font-label-md text-label-md text-on-surface-variant/70 tracking-wider">JOIN DATE</th>
                <th className="px-lg py-4 font-label-md text-label-md text-on-surface-variant/70 tracking-wider">STATUS</th>
                <th className="px-lg py-4 font-label-md text-label-md text-on-surface-variant/70 tracking-wider text-right">ACTIONS</th>
              </tr>
            </thead>
          <tbody className="divide-y divide-outline-variant/20">

{loading ? (
<tr>
<td colSpan={5} className="text-center py-6">
Loading...
</td>
</tr>
) : error ? (
<tr>
<td colSpan={5} className="text-center py-6 text-red-500">
{error}
</td>
</tr>
) : users.length > 0 ? (

users.map((value,index)=>(
<tr
key={value._id}
className="user-row transition-colors group"
>

<td className="px-lg py-lg">

<div className="flex items-center gap-4">

<div className="h-12 w-12 rounded-xl bg-surface-container flex items-center justify-center font-bold text-primary">
{value.name?.charAt(0)}
</div>

<div>
<p className="font-headline-md text-body-lg font-bold text-on-surface">
{value.name}
</p>

<p className="text-on-surface-variant text-sm">
{value.email}
</p>

</div>

</div>

</td>

<td className="px-lg py-lg">

<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase">
{value.role || "User"}
</span>

</td>

<td className="px-lg py-lg">

<p className="text-on-surface text-sm">
{new Date(value.created_at).toLocaleDateString()}
</p>

</td>

<td className="px-lg py-lg">

<span className="flex items-center gap-1.5 text-xs font-bold text-green-600">

<span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>

Active

</span>

</td>

<td className="px-lg py-lg text-right">

<button className="p-2 rounded-lg hover:bg-surface-container-high">

<span className="material-symbols-outlined">
more_vert
</span>

</button>

</td>

</tr>
))

) : (

<tr>
<td colSpan={5} className="text-center py-6">
No Users Found
</td>
</tr>

)}

</tbody>
          </table>
        </div>
       
      </div>
     
    </div>
    {/* Footer */}
    <footer className="mt-2xl py-lg border-t border-outline-variant/20 px-gutter w-full max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
      <p className="text-xs text-on-surface-variant font-label-md">© 2024 HiR Atelier Luxury Administration. All rights reserved.</p>
      <div className="flex items-center gap-xl text-xs font-label-md text-on-surface-variant">
        <a className="hover:text-primary transition-colors" href="#">Security Policy</a>
        <a className="hover:text-primary transition-colors" href="#">Privacy Guide</a>
        <a className="hover:text-primary transition-colors" href="#">System Status</a>
      </div>
    </footer>
  </main>
  {/* Contextual Floating Action Button (Only for specific pages) */}
  <button className="fixed bottom-8 right-8 lg:hidden w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-transform">
    <span className="material-symbols-outlined" data-icon="person_add">person_add</span>
  </button>
</div>

        </>
    )
}

export default User
