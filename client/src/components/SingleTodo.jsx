import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./ShowTodo.module.css";
import { CgRadioCheck, FcAcceptDatabase } from "react-icons/all";
import { Link } from "react-router-dom";
const SingleTodo = () => {
  const [todo, setTodo] = useState({});
  const { id } = useParams();

  const getSingleTodo = () => {
    axios.get(`/todo/${id}`).then((res) => setTodo(res.data));
  };

  useEffect(() => {
    getSingleTodo();
  }, [id]);

  const { title, status, description } = todo;

  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.titleBtn}>
          {title}
          <span className={styles.statusBtn}>
            {status ? (
              <CgRadioCheck style={{ width: "30px", height: "30px" }} />
            ) : (
              <FcAcceptDatabase
                style={{ color: "white", width: "50px", height: "40px" }}
              />
            )}
          </span>
        </h1>
        <h3 className={styles.descBtn}>{description}</h3>
      </div>
      <div className={styles.backBtn}>
        <Link to={`/`}>
          <button>Add task</button>
        </Link>
      </div>
    </>
  );
};

export default SingleTodo;
