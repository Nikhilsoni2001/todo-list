import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useProjectsValue, useSelectedProjectsValue } from "../context";
import { firebase } from "../firebase";

export const IndividualProject = ({ project }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { projects, setProjects } = useProjectsValue();
  const { setSelectedProjects } = useSelectedProjectsValue();

  const deleteProject = (docId) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(docId)
      .delete()
      .then(() => setProjects([...projects]));
    setSelectedProjects("INBOX");
  };
  return (
    <>
      <span className="sidebar__dot">•</span>
      <span className="sidebar__project-name">{project.name}</span>
      <span
        className="sidebar__project-delete"
        data-testid="delete-project"
        onClick={() => setShowConfirm(!confirm)}
      >
        <FaTrashAlt />
        {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal-inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >
                Delete
                <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
              </button>
            </div>
          </div>
        )}
      </span>
    </>
  );
};