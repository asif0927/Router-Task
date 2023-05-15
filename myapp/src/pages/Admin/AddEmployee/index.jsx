import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postEmployees } from '../../../api/requests';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
const AddEmployee = () => {
  const [employee, setEmployee] = useState({ name: '', age: '', imgurl: '', salary: '', position: '', surname: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postEmployees(employee);
      Swal.fire('Success', 'Employee added!', 'success').then(() => {
        navigate('/admin/employees');
      });
    } catch (error) {
      Swal.fire('Error', 'Failed to add employee', 'error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={employee.name} onChange={handleChange} placeholder="Employee name" name="name" type="text" />
        <input value={employee.surname} onChange={handleChange} placeholder="Employee surname" name="surname" type="text" />
        <input value={employee.imgurl} onChange={handleChange} placeholder="Employee imgurl" name="imgurl" type="text" />
        <input step="any" value={employee.age} onChange={handleChange} placeholder="Employee age" name="age" type="number" />
        <input step="any" value={employee.salary} onChange={handleChange} placeholder="Employee salary" name="salary" type="number" />
        <input value={employee.position} onChange={handleChange} placeholder="Employee position" name="position" type="text" />
        <button>Add Employee</button>
      </form>
    </>
  );
};

export default AddEmployee;