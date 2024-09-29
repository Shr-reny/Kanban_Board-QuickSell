import React, { useEffect, useState } from "react";
import "./styling/GroupingCriteria.css";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../services/api";
import { AiOutlineUnorderedList } from "react-icons/ai";

// Helper function to get the group value from localStorage or return the default 'status'
const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

// Helper function to get the order value from localStorage or return the default 'priority'
const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const GroupingCriteria = () => {
  // State to control display of grouping/order dropdown menu
  const [displayOnClick, setDisplayOnClick] = useState(false);
  
  // Initialize the dispatch function for redux actions
  const dispatch = useDispatch();

  // Get ticket and user data from Redux store
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);

  // State to store the selected grouping criteria (status/user/priority)
  const [groupValue, setGroupValue] = useState(getGroup());

  // State to store the selected ordering criteria (priority/title)
  const [orderValue, setOrderValue] = useState(getOrder());

  // Function to handle changes in the dropdown menus for grouping and ordering
  const handleGroupValue = (e, isGroup) => {
    if (isGroup) {
      // Update group value when the group dropdown changes
      setGroupValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("group", e.target.value); // Save group value to localStorage
    } else {
      // Update order value when the order dropdown changes
      setOrderValue(e.target.value);
      setDisplayOnClick(!displayOnClick);
      localStorage.setItem("order", e.target.value); // Save order value to localStorage
    }
  };

  // useEffect hook to dispatch selectData action whenever groupValue or orderValue changes
  useEffect(() => {
    // Dispatch action with all tickets and users when group is 'user'
    if (groupValue === 'user') {
      dispatch(selectData(groupValue, { allTickets, allUser }, orderValue));
    } else {
      // Dispatch action with only tickets for other groups
      dispatch(selectData(groupValue, allTickets, orderValue));
    }
  }, [allTickets, dispatch, groupValue, allUser, orderValue]);

  return (
    <div className="top-header" style={{ paddingLeft: "10px" }}>
      <div className="displayButton">
        {/* Button to toggle the display of dropdown menus */}
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <AiOutlineUnorderedList /> Display
        </button>

        {/* Conditionally render the dropdown menus for grouping and ordering */}
        {displayOnClick && (
          <>
            <div className="dropOnClick flex-gap-10 p-10">
              {/* Dropdown for grouping options */}
              <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select
                  value={groupValue}
                  onChange={(e) => handleGroupValue(e, true)}
                  className="selectStyle"
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              {/* Dropdown for ordering options */}
              <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select
                  value={orderValue}
                  onChange={(e) => handleGroupValue(e, false)}
                  className="selectStyle"
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GroupingCriteria;
