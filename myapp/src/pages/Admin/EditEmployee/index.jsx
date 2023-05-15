import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEmployeesByID, putEmployees } from '../../../api/requests';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
const EditEmployee = () => {
  const[employee,setEmployee] = useState({name: '', age: '', imgurl: '', salary: '', position: '',surname:""});
  const navigate = useNavigate();
  const{id} = useParams();
  useEffect(()=>{
    getEmployeesByID(id).then(data=>{
      setEmployee(data);
    })
  },[id]);
  function handleChange(e){
    setEmployee({...employee,[e.target.name]:e.target.value});
  }
  async function handleSubmit(e){
    e.preventDefault();
    await putEmployees(id, employee);
    setEmployee({name: '', age: '', imgurl: '', salary: '', position: '',surname:""})
    navigate('/admin');
  }

  const handleUpdated = () => {
    Swal.fire('Has been updated!', 'Has been updated.', 'success');
  };
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input value={employee.name} onChange={(e)=>handleChange(e)} placeholder='employee name' name='name' type='text'/>
        <input value={employee.surname} onChange={(e)=>handleChange(e)} placeholder='employee surname' name='surname' type='text'/>
        <input value={employee.imgurl} onChange={(e)=>handleChange(e)} placeholder='employee imgurl' name='imgurl' type='text'/>
        <input step="any" value={employee.age} onChange={(e)=>handleChange(e)} placeholder='employee age' name='age' type='number'/>
        <input step="any" value={employee.salary} onChange={(e)=>handleChange(e)} placeholder='employee salary' name='salary' type='number'/>
        <input step="any" value={employee.position} onChange={(e)=>handleChange(e)} placeholder='employee position' name='position' type='text'/>
        <button  onClick={handleUpdated}>Add Employee</button>
    </form>
    </>
  )
}

export default EditEmployee
