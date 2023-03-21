import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";


const formatSpots = function(spots) {
  let spotsRemaining = "";

  if (spots > 1) {
    spotsRemaining = "spots remaining";
  }
  if (spots === 1) {
    spotsRemaining = "spot remaining"
  }
  if (spots === 0) {
    spots = "no"
    spotsRemaining = "spots remaining"
  }
  return `${spots}` + " " + `${spotsRemaining}`;
}


export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
 });
  const spots = props.spots;

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name) }>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(spots)} </h3>
    </li>
  );
}