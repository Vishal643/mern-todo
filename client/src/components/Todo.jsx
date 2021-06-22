import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowTodo from "./ShowTodo";
import styles from "./Todo.module.css";
import ClipLoader from "react-spinners/ClipLoader";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [id, setId] = useState();
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const handleTodo = async () => {
    const payload = {
      title,
      description,
      status,
    };
    try {
      await axios.post("/post-todo", payload);
      setIsloading(false);
      getTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const getTodo = async () => {
    try {
      setIsloading(true);
      const todo = await axios.get("/get-all-todos");
      setTodos([todo.data]);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditTodo = async () => {
    const payload = {
      title,
      description,
      status,
    };
    try {
      await axios.put(`/todo/${id}`, payload);
      setIsloading(false);
      getTodo();
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <h1 className={styles.header}>T O D O</h1>
      <div className={styles.cardcontainer}>
        <input
          type="text"
          placeholder="Enter your todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="Notes..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        {!isEditing ? (
          <button onClick={handleTodo}>Add Task</button>
        ) : (
          <button onClick={handleEditTodo}>Update Task</button>
        )}
      </div>
      {isLoading ?
	  <ClipLoader className={styles.loader}/> 
	  :
      
        <div className={styles.showtodocontainer}>
          {todos?.map((todo) =>
            todo.map((t) => (
              <ShowTodo
                key={t._id}
                {...t}
                setIsEditing={setIsEditing}
                setTitle={setTitle}
                setStatus={setStatus}
                setId={setId}
                getTodo={getTodo}
                setDescription={setDescription}
              />
            ))
          )}
	  
        </div>
}
    </>
  );
};

export default Todo;
