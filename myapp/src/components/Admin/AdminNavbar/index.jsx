import React from 'react';
import { Link } from 'react-router-dom';
import style from "./index.module.css";

const AdminNavbar = () => {
  return (
    <>
    <div className={style.maindiv}>
      <p className={style.paragraph}>React-App | routing |Admin</p>
    <ul className={style.ahd}>
        <li>
          <Link to='/'>EmployeesAdmin</Link>
        </li>
        <li>
          <Link to='/add-employees'>EmployeesAdd</Link>
        </li>
        <li>
        <Link to='employees/edit/:id'>EmployeesEdit</Link>
        </li>
    </ul>
    </div>
    </>
  )
}

export default AdminNavbar
