// <--- USING FORM HOOK START --->


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";

export default function App() {
  //USEFORM HOOK WITH DATA BEING PASSED TO STATE IN ORDER TO BE PLACED IN POST REQUEST FETCH
  const { register, handleSubmit } = useForm();
  
  const [patientId, setPatientId] = useState(0)
  const [patients, setPatients] = useState({})
  const [response, setResponse] = useState({})

  console.log(patients.data)
//<--- POST REQUEST FROM USER INPUT FORM TO DATABASE PORT:9292 /PATIENTS/ ENDPOINT START ---> 
  
  
  const onSubmit = (data) => {
    fetch("http://localhost:9292/patients/", {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
      },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setResponse(data)
    })
  };


//<--- POST REQUEST FROM USER INPUT FORM TO DATABASE PORT:9292 /PATIENTS/ ENDPOINT END ---> 

  
//<--- FUNCTIONS POSTING PATIENT ADDED OR NOT TO DOM START --->
  
   
const postSuccesOrFail = () => {
  return !response.error ? response.message : response.error;
}
  
const postPatientAddedOrError = () => {
  return (
    <div className='patient-data'>
      <h3>{postSuccesOrFail()}</h3>
    </div>
  )}

  const postAllPatients = () => {
    console.log("we in there")
    if (patients.data !== undefined) {
      return patients.data.map(patient => {
        // setPatientId(patient.id)
        return (
          //value of button equals id of patient
          <div className='user-card'>
            <h3>{patient.id}</h3>
            <h3>{patient.first_name} {patient.last_name}</h3>
            <h3>{patient.condition}</h3>
            <h3>{patient.is_admitted}</h3>
            <button>Delete</button>
          </div>
        )
      })
    }
  }
  
//<--- FUNCTION POSTING PATIENT ADDED OR ERROR TO DOM END ---> 

  
//<--- FUNCTION GET REQUEST POSTING ALL PATIENTS FOR DELETION START ---> 


const getAllPatients = () => {
  fetch("http://localhost:9292/patients/", {
      headers: {
          'Content-Type': 'application/json',
      } 
  })
  .then(res => res.json())
    .then(patients => {
      setPatients(patients)
    })
}
  
  
//<--- FUNCTION GET REQUEST POSTING ALL PATIENTS FOR DELETION START ---> 


//<--- FUNCTION DELETE REQUEST DELETING PATIENT FROM PORT:9292 /PATIENTS/ ENDPOINT START --->


  const deletePatient = () => {
    fetch("http://localhost:9292/patients/"+ patientId, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        } 
    })
    // setPatients(patients.id)
    //  value of button equals id of patient
}


//<--- DELETE REQUEST DELETING PATIENT FROM PORT:9292 /PATIENTS/ ENDPOINT END --->
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading />
        <input {...register("first_name")} placeholder="First name" autoComplete="off"/>
        <input {...register("last_name")} placeholder="Last name" autoComplete="off"/>
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
      {postPatientAddedOrError()}
      <button className='deleteButton' onClick={getAllPatients}>Delete Patient</button>
      {postAllPatients()}
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