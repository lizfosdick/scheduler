import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const intSelected = classNames("interviewers__item", {
    'interviewers__item--selected': props.selected
  });

  return (
    <li className={intSelected} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <span>{props.name}</span>}
   </li>

  );
};

