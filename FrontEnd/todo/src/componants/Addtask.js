import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './addtask.css';

export default function Addtask() {
  const [data, setData] = useState({ id: "", Note: "", date: "" });
  const navigate = useNavigate();


  const generateId = () => {
    return Math.floor(Math.random() * 1000).toString();
  };


  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!data.Note) {
      alert("Please enter the task title.");
      return;
    }


    const finalData = {
      ...data,
      id: data.id || generateId(),
      date: data.date || getCurrentDate()  
    };

    const apiUrl = "http://localhost:5500/notes";
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(finalData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      navigate('/my_task');
    });
  };

  return (
    <div className="form-container">
      <form className="add-task-form" onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <div className="form-group">
          <label>Task ID</label>
          <input
            type="text"
            placeholder="Enter task ID"
            value={data.id}
            onChange={(e) => setData({ ...data, id: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            required
            value={data.Note}
            onChange={(e) => setData({ ...data, Note: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={data.date}
            required
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <button type="submit" className="submit-btn">Add</button>
      </form>
    </div>
  );
}
