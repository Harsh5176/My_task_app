import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Card.css';  

export default function Card({ id, date, Note }) { 
  const [modalShow, setModalShow] = useState(false);

  const handleDelete = () => {
    alert("Your task has been marked as completed.");
  };

  return (
    <>
      <div className="todo-card">
        <div className="header">To-Do Item <span>{id}</span></div>
        <div className="date">Created on:{date}</div>  
        <div className="description">{Note}</div>
        <div className="footer">
          <button className="btn btn-primary" onClick={() => setModalShow(true)}>Edit</button>
          <button onClick={handleDelete} className="btn btn-success">Complete</button>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        task={Note}
        date={date}  
        id={id}
      />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  const [edittask, setEditTask] = useState(props.task);
  const [editDate, setEditDate] = useState(props.date);  // Separate state for date

  const handleUpdate = () => {
    const apiUrl = `http://localhost:5500/notes/${props.id}`;
    fetch(apiUrl, {
      method: "PATCH",
      body: JSON.stringify({ Note: edittask, date: editDate }),  
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      props.onHide();
    })
    .catch(err => console.error("Error updating task:", err));
  };

  const handleDelete = () => {
    const apiUrl = `http://localhost:5500/notes/${props.id}`;
    fetch(apiUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(() => {
      props.onHide();
    })
    .catch(err => console.error("Error deleting task:", err));
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Task</label>
          <input 
            type='text' 
            value={edittask} 
            onChange={(e) => setEditTask(e.target.value)} 
          />
        </div>
        <div>
          <label>Date</label>
          <input 
            type='text' 
            value={editDate} 
            onChange={(e) => setEditDate(e.target.value)} 
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpdate} className='btn btn-dark'>Update</Button>
        <Button onClick={handleDelete} className='btn btn-danger'>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}
