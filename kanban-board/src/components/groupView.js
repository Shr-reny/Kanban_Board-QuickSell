import React from "react";
import { useSelector } from "react-redux";
import {ReactComponent as Done} from "./icons/Done.svg";
import {ReactComponent as Add} from "./icons/add.svg";
import {ReactComponent as InProgress} from "./icons/in-progress.svg";
import {ReactComponent as ToDo} from "./icons/To-do.svg";
import {ReactComponent as Backlog} from "./icons/Backlog.svg";
import {ReactComponent as Cancelled} from "./icons/Cancelled.svg";
import {ReactComponent as Urgent} from "./icons/SVG - Urgent Priority colour.svg";
import {ReactComponent as No} from "./icons/No-priority.svg";
import {ReactComponent as Low} from "./icons/Img - Low Priority.svg";
import {ReactComponent as Medium} from "./icons/Img - Medium Priority.svg";
import {ReactComponent as High} from "./icons/Img - High Priority.svg";
import "./styling/GroupView.css";
import Card from "./cards";

const GroupView = () => {
  // Accessing selectedData and user from the Redux store (SelectDataReducer)
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  // Mapping status and priority to corresponding icons
  const iconMap = {
    "Done": <Done />,
    "In progress": <InProgress />,
    "Backlog" : <Backlog />,
    "Urgent": <Urgent />,
    "Todo": <ToDo />,
    "Cancelled": <Cancelled />,
    "No priority": <No />,
    "Low" : <Low />,
    "Medium" : <Medium />,
    "High" : <High />
  };

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {/* Loop through the selectedData array */}
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {/* Display an icon if grouping is not by user */}
                    {!user ? (
                        iconMap[elem[index].title] || <Add />
                    ) : (
                        " " // Placeholder for user grouping
                    )}
                    {/* Display the title of the group and the count of items */}
                    <span>
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    {/* Display an Add button and ellipsis for future actions */}
                    <Add />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {/* Loop through each ticket/task under this group and render a Card */}
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      // Pass data to the Card component (id, title, tags, name)
                      <Card 
                        id={elem.id} 
                        title={elem.title} 
                        tag={elem.tag} 
                        name={elem.title || "Undefined"}  // Pass name or "Undefined" if not available
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default GroupView;
