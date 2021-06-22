import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./ShowTodo.module.css";
import {
  FcEditImage,
  FcRemoveImage,
  CgRadioCheck,
  FcAcceptDatabase,
} from "react-icons/all";
const ShowTodo = (props) => {
  const {
    _id,
    title,
    status,
    setIsEditing,
    setTitle,
    setId,
    getTodo,
    description,
    setDescription,
  } = props;

  const handleEdit = (id, s, t, desc) => {
    setIsEditing((isEditing) => !isEditing);

    setTitle(t);
    setId(id);
    setDescription(desc);
  };
  const handleDelete = (id) => {
    axios.delete(`/todo/${id}`).then((res) => getTodo());
  };

  const handleToggle = (id) => {
    const payload = {
      status: !status,
    };
    axios.put(`/todo/${id}`, payload).then((res) => getTodo());
  };
  return (
    <>
      <div className={styles.card}>
        <Link to={`/todo/${_id}`} className={styles.titleBtn}>
          <h2>
            {title}
            <span
              onClick={() => handleToggle(_id)}
              className={styles.statusBtn}
            >
              {status ? (
                <CgRadioCheck />
              ) : (
                <FcAcceptDatabase
                  style={{ color: "white", width: "50px", height: "40px" }}
                />
              )}
            </span>
          </h2>
        </Link>
        <div className={styles.descBtn}>
          <p>{description}</p>
        </div>

        <FcEditImage
          onClick={() => handleEdit(_id, status, title, description)}
          className={styles.editBtn}
        />

        <FcRemoveImage
          onClick={() => handleDelete(_id)}
          className={styles.deleteBtn}
        />
      </div>
	
    </>
  );
};

export default ShowTodo;
