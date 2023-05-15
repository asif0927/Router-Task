import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { postEmployee } from "../../../api/requests";
import Swal from "sweetalert2";

const AddEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    surname: "",
    age: "",
    salary: "",
    position: "",
    imgurl: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    newEmployee.id = nanoid();
    console.log(newEmployee);
    await postEmployee(newEmployee);
    setNewEmployee({
      name: "",
      surname: "",
      age: "",
      salary: "",
      position: "",
      imgurl: "",
    });
    navigate("/admin");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  return (
   <>
   <form onSubmit={handleSubmit}>
        <input value={newEmployee.name} onChange={handleChange} placeholder="Employee name" name="name" type="text" />
        <input value={newEmployee.surname} onChange={handleChange} placeholder="Employee surname" name="surname" type="text" />
        <input value={newEmployee.imgurl} onChange={handleChange} placeholder="Employee imgurl" name="imgurl" type="text" />
        <input step="any" value={newEmployee.age} onChange={handleChange} placeholder="Employee age" name="age" type="number" />
        <input step="any" value={newEmployee.salary} onChange={handleChange} placeholder="Employee salary" name="salary" type="number" />
        <input value={newEmployee.position} onChange={handleChange} placeholder="Employee position" name="position" type="text" />
        <button>Add Employee</button>
      </form>
   </>
  )
}

export default AddEmployee

