// <--- USING FORM HOOK START --->


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";

export default function App() {
  //USEFORM HOOK WITH DATA BEING PASSED TO STATE IN ORDER TO BE PLACED IN POST REQUEST FETCH
  const { register, handleSubmit } = useForm();

  const [userInfo, setUserInfo] = useState({})
  const onSubmit = (data) => setUserInfo(data);
  console.log(userInfo)


//<--- DELETE REQUEST DELETING PATIENT FROM PORT:9292 /PATIENTS/ ENDPOINT START --->


//   const handleClick = () => {
//     fetch("http://localhost:9292/patients/"+ patient.id, {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//         } 
//     })
//     updateCourses(course.id)
// }


//<--- DELETE REQUEST DELETING PATIENT FROM PORT:9292 /PATIENTS/ ENDPOINT END --->

  
//<--- POST REQUEST FROM USER INPUT FORM TO DATABASE PORT:9292 /PATIENTS/ ENDPOINT START ---> 
  
  
fetch("http://localhost:9292/patients/", {
  method: 'POST',
  headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
  },
body: JSON.stringify({first_name: userInfo.firstName, last_name: userInfo.lastName, condition: userInfo.condition})
}).then(res => res.json()).then(data => {
  console.log(data)
})
  
  
//<--- POST REQUEST FROM USER INPUT FORM TO DATABASE PORT:9292 /PATIENTS/ ENDPOINT END ---> 
  
  
// <--- FUNCTION POSTING PATIENT INFO TO DOM START --->
  

  const postPatientToDom = () => {
    return (
      <div className='user-card'>
        <h3>First Name: { userInfo.firstName }</h3>
        <h3>Last Name: { userInfo.lastName }</h3>
        <h3>Condition: { userInfo.condition }</h3>
      </div>
    )}


 //<--- FUNCTION POSTING PATIENT INFO TO DOM END ---> 
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading />
        <input {...register("firstName")} placeholder="First name" autoComplete="off"/>
        <input {...register("lastName")} placeholder="Last name" autoComplete="off"/>
        <select {...register("condition")}>
          <option value="">Reason for visit...</option>
          <option value="Covid">Covid</option>
          <option value="General">General</option>
          <option value="Neurological">Neurological</option>
          <option value="Respitory">Respitory</option>
          <option value="Cardiovascular">Cardiovascular</option>
        </select>
        <input type="submit" />
      </form>
      <div className='patient-data'>{postPatientToDom()}</div>
    </div>
  );
}


// <--- USING FORM HOOK END --->


// // <--- USING STATE HOOK START --->
// import React, {useState} from "react";
// import Heading from "./Heading";

// export default function App() {
//   const [ form, setForm ] = useState({
//     firstName: '',
//     lastName: '',
//     condition: ''
//   });
//   const { firstName, lastName, condition } = form
  
//   const handleChange = e => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(form)
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Heading />
//       <input name="firstName" placeholder="First name" value={ firstName } onChange={handleChange}/>
//       <input name="lastName" placeholder="Last name" value={ lastName } onChange={handleChange}/>
//       <select name="condition" value={condition} onChange={handleChange}>
//         <option value="">Reason for visit...</option>
//         <option value="Covid">Covid</option>
//         <option value="General">General</option>
//         <option value="Neurological">Neurological</option>
//         <option value="Respitory">Respitory</option>
//         <option value="Cardiovascular">Cardiovascular</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }
// // <-- USING-STATE-END -->