import React,{ useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import toast from 'react-hot-toast';
function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: "", name: "", category: "", description: "", imageUrl: ""
  })

  const handleDispatch = () => {
    const { id, name, category, description,imageUrl } = input;
    if (!id || !name || !category || !description || !imageUrl) {
      toast.error("Please fill all fields");
    } 
    else {
      console.log(input)
      dispatch(addTask(input));
      handleClose()
      // toast.success("Task added successfully");
    }
  }

  return (

    <>
      <button className=' add btn btn-dark mb-4 ' onClick={handleShow}>Add Task </button>


      <Modal show={show} 
      onHide={handleClose} 
      backdrop="static" 
      keyboard={false}>

        <Modal.Header closeButton className='bg-light'>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-light'>
          <FloatingLabel controlId="id" label="Task ID" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, id: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="name" label="Task Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, category: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="description" label="Description" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, description: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="imageUrl" label="Image URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setInput({ ...input, imageUrl: e.target.value })}
            />
          </FloatingLabel>
          
          {/* <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-xl" />
          </button> */}
          
        </Modal.Body>
        <Modal.Footer className='bg-light'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDispatch}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add