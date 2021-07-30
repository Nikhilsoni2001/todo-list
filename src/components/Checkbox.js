import React from "react";
import PropTypes from "prop-types";
import { firebase } from "../firebase";

export const Checkbox = ({ id, taskDesc }) => {
  const archivedTask = () => {
    firebase.firestore().collection("tasks").doc(id).update({
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      aria-label={`Mark ${taskDesc} as done?`}
      onClick={() => archivedTask()}
      onKeyDown={() => archivedTask()}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  taskDesc: PropTypes.string.isRequired,
};
