import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import Edit from './Edit';
import toast from 'react-hot-toast';


function View() {
  const {task} = useSelector((state) => state.task); 
  const dispatch = useDispatch();

  return (
    <>
      {task?.length > 0 ? (
        task.map((item) => (
          <Card key={item.id} style={{ width: '18rem' }} className="rounded-1 text-light shadow mb-4 ms-4">
            <Card.Img
              style={{ height: '300px' }}
              variant="top"
              src={item.imageUrl} 
              className="img-fluid rounded-top-2"
            />
            <Card.Body className="bg-dark rounded-bottom-5">
              <Card.Title className="text-center mb-3">{item.name}</Card.Title>
              <Card.Text>
                <div className="d-flex flex-column">
                  <span>ID: {item.id}</span>
                  <span>Category: {item.category}</span>
                  <span>Description: {item.description}</span>
                  
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Edit data={item} />
                  <button
      className="btn btn-dark py-2 px-3"
        onClick={() => {
        dispatch(deleteTask(item.id));
        toast.danger("Task Deleted!");
  }}
>
                    <i className="fa-solid fa-trash" style={{ color: '#ff0000' }} />
                  </button>
                  
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h3 className="text-center mt-5">No Tasks Available!</h3>
      )}
    </>
  );
}

export default View;