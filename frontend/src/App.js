// <-- USING-FORM-HOOK-START -->
import * as React from "react";
import { useForm } from "react-hook-form";
import Heading from "./Heading";

export default function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console(JSON.stringify(data))
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading />
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <select {...register("category")}>
        <option value="">Reason for visit...</option>
        <option value="Covid">Covid</option>
        <option value="General">General</option>
        <option value="Neurological">Neurological</option>
        <option value="Respitory">Respitory</option>
        <option value="Cardiovascular">Cardiovascular</option>
      </select>
      <input type="submit" />
    </form>
  );
}
// <-- USING-FORM-HOOK-END -->


// // <-- USING-STATE-HOOK-START -->
// import React, {useState} from "react";
// import Heading from "./Heading";

// export default function App() {
//   const [ form, setForm ] = useState({
//     firstName: '',
//     lastName: '',
//     category: ''
//   });
//   const { firstName, lastName, category } = form
  
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
//       <select name="category" value={category} onChange={handleChange}>
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