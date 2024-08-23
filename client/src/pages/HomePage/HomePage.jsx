import React, { useCallback, useContext, useEffect, useState } from 'react';
import './HomePage.scss'
import axios from '../../utils/Axios';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const [text, setText] = useState('');
  const { userId } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  console.log(userId);  

  // Get all Todos for cetain User
  const getTodo = useCallback(async () => {
    try {
      await axios.get('/todo', {
        headers: {
          'Content-Type': 'application/json'
        },
        params: { userId } 
      })
      .then((response) => setTodos(response.data))
    } catch(err) {
      console.log(err);
    }
  }, [userId]);

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  // Create Todo element
  const createTodo = useCallback(async () => {
    // Not send empty field
    if (!text) return null;

    try {
      await axios.post('/todo/add', { text, userId }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setTodos([...todos, response.data]);
        setText('');
        getTodo();
      });
    } catch(err) {
      console.log(err);
    }
  }, [text, userId, todos, getTodo]);

  // Remove Todo elemet
  const removeTodo = useCallback(async (id) => {
    try {    
      await axios.delete(`/todo/delete/${id}`, {id}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {getTodo()});         
    } catch(err) {
      console.log(err);
    }
  }, [getTodo]);

  // Completed Todo
  const completedTodo = useCallback(async (id) => {
    try {
      await axios.put(`/todo/completed/${id}`, {id}, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setTodos([...todos], response.data);
        getTodo();
      });
    } catch(err) {
      console.log(err);
    }
  }, [todos, getTodo]);

    // Completed Todo
    const importantTodo = useCallback(async (id) => {
      try {
        await axios.put(`/todo/important/${id}`, {id}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          setTodos([...todos], response.data);
          getTodo();
        });
      } catch(err) {
        console.log(err);
      }
    }, [todos, getTodo]);

  return (
    // <div className='home_page'>Home Page</div>
    <div className='container'>
      <div className="main-page">
        {/* ADD TASK TITLE */}
        <h5>Add task</h5>
        <form 
          className='form form-logon'
          onSubmit={event => event.preventDefault()}
        >
          <div className="row">
            {/* ADD TASK FIELD */}
            <div className="input-field col s12">
              <input 
                type='text'
                id='text'
                name='input'
                className='validate'
                value={text}
                onChange={e => setText(e.target.value)}
              />
              <label htmlFor="input">Task:</label>
            </div>
            {/* BUTTON */}
            <div className="row flex">
              <button 
                className='waves-effect waves-light btn blue'
                onClick={createTodo}
              >
                Add task
              </button>
            </div>
          </div>
        </form>

        <h5>Active tasks:</h5>
        <div className="todos">
          {
            todos.map((todo, index) => {
              let cls = ['row flex todos-item'];

              if (todo.completed) {
                cls.push('completed');
              }
              
              if (todo.important) {
                cls.push('important');
              }

              return (
                <div className={cls.join(' ')} key={index}>
                  <div className="col todos-num">{ index + 1 }</div>
                  <div className="col todos-text">{ todo.text }</div>
                  <div className="col todos-buttons">
                    {/* Completed */}
                    <i 
                      className="material-icons blue-text" 
                      onClick={() => completedTodo(todo._id)}
                    >
                      check
                    </i>

                    {/* Important */}
                    <i 
                      className="material-icons orange-text"
                      onClick={() => importantTodo(todo._id)}
                    >
                      warning
                    </i>
                    
                    {/* Deleted */}
                    <i 
                      className="material-icons red-text" 
                      onClick={() => removeTodo(todo._id)}
                    >
                      delete
                    </i>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}

export default HomePage;