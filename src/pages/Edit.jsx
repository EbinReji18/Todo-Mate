import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/taskSlice';

function Edit({ data }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const [val, setVal] = useState({
        id: "", name: "", category: "", description: "", imageUrl: ""
    });

    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        setVal({ 
            id: data.id, 
            name: data.name, 
            category: data.category,
            description: data.description, 
            imageUrl: data.imageUrl 
        });
    };

    const handleUpdate = () => {
        const { id, name, category, description,imageUrl,  } = val;
        if (!id || !name || !category || !description || !imageUrl) {
            toast.error("Please enter valid inputs");
        } else {
            dispatch(updateTask(val)); // Dispatch the updated product data
            toast.success("Task updated successfully!");
            handleClose();
            setVal({  id: "", name: "", category: "", description: "", imageUrl: "" });
        }
    };

    return (
        <>

           <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-xl" />
            </button> 

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>

          
          <FloatingLabel controlId="name" val="Task Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Task Name"
              value={val.name} 
              onChange={(e) => setVal({ ...val, name: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="category" label="Category" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Category"
              value={val.category} 
              onChange={(e) => setVal({ ...val, category: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="description" label="description" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Description"
              value={val.description} 
              onChange={(e) => setVal({ ...val, description: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel controlId="imageUrl" label="Image URL" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Image Url"
              value={val.imageUrl} 
              onChange={(e) => setVal({ ...val, imageUrl: e.target.value })}
            />
          </FloatingLabel>


          {/* <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-pen-to-square fa-xl" />
            </button> */}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;