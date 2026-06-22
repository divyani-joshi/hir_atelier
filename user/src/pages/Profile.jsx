import React, {useEffect, useState} from "react";
import Hedaer from "../common/Hedaer";
import Footer from "../common/Footer";
import api from "../utility/AxiosConfig";


function Profile(){

  return(
    <>
      <Hedaer/>
      <ProfileContent/>
      <Footer/>
    </>
  )

}



function ProfileContent(){

const [profile,setProfile] = useState({});
const [history,setHistory] = useState([]);
const [loading,setLoading] = useState(true);



async function FetchProfile(){

try{

let token = localStorage.getItem("token");

console.log("TOKEN:", token);


let response = await api.get("/user/profile", {

headers:{
  Authorization:`Bearer ${token}`
}

});


console.log("PROFILE:", response.data);


setProfile(response.data.profile);
setHistory(response.data.history);


}catch(e){

console.log("PROFILE ERROR STATUS:", e.response?.status);
console.log("PROFILE ERROR DATA:", e.response?.data);

}

finally{

setLoading(false);

}

}


useEffect(()=>{

FetchProfile();

},[])



if(loading){

return(
<div className="py-40 text-center">
Loading...
</div>
)

}


return(

<div className="
bg-background
text-on-background
font-body-md
overflow-x-hidden
">


<main>


{/* HEADER */}

<section className="
mt-20
px-margin-mobile
md:px-margin-desktop
text-center
">


<span className="
font-label-caps
text-label-caps
text-primary
">

MY ACCOUNT

</span>


<h1 className="
font-display-lg-mobile
md:font-display-lg
text-display-lg-mobile
md:text-display-lg
mt-4
">

Profile & History

</h1>


<div className="
h-[1px]
w-24
bg-primary-container
mx-auto
mt-6
"/>


</section>





{/* PROFILE CARD */}


<section className="
px-margin-mobile
md:px-margin-desktop
mt-16
">


<div className="
max-w-container-max
mx-auto
bg-white
rounded-2xl
shadow-lg
p-10
">


<div className="
flex
flex-col
md:flex-row
items-center
gap-10
">



<div className="
w-36
h-36
rounded-full
overflow-hidden
bg-surface-variant
">


<img

src={
profile.profile_image
?
`http://localhost:8000/${profile.profile_image}`
:
"/profile.png"
}

className="
w-full
h-full
object-cover
"

/>


</div>





<div className="
text-center
md:text-left
">


<h2 className="
font-headline-xl
text-headline-xl
">

{profile.name}

</h2>


<p className="text-secondary mt-3">

{profile.email}

</p>


<p className="text-secondary">

{profile.mobile_no}

</p>


<p className="text-secondary">

{profile.city}

</p>



<button className="
mt-6
bg-primary
text-white
px-10
py-4
rounded-full
font-label-caps
tracking-widest
">

EDIT PROFILE

</button>



</div>



</div>


</div>


</section>






{/* HISTORY */}


<section className="
px-margin-mobile
md:px-margin-desktop
mt-24
mb-24
">


<div className="
max-w-container-max
mx-auto
">


<span className="
font-label-caps
text-label-caps
text-primary
tracking-[0.3em]
">

YOUR ORDERS

</span>


<h2 className="
font-headline-xl
text-headline-xl
mt-4
mb-10
">

Booking History

</h2>





<div className="
grid
grid-cols-1
md:grid-cols-2
gap-gutter
">



{
history.length===0 ?


<div className="text-secondary">

No booking history found

</div>



:


history.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-xl
shadow-md
p-8
border
border-primary/10
"
>



<div className="
flex
justify-between
items-start
">


<h3 className="
font-headline-md
text-headline-md
">

{item.service_title}

</h3>



<span className="
bg-primary/10
text-primary
px-4
py-2
rounded-full
text-sm
">

{item.booking_status}

</span>


</div>





<div className="
mt-6
space-y-2
text-secondary
">


<p>

Payment : {item.payment_status}

</p>


<p>

Booking Date :
{item.booking_date || "Not selected"}

</p>


<p>

Amount :
{item.total_amount || "Pending"}

</p>



</div>



</div>


))


}



</div>


</div>


</section>





</main>


</div>

)

}


export default Profile;