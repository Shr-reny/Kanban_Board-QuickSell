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
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  const iconMap = {
    "Done": <Done />,
    "In progress": <InProgress />,
    "Backlog" : <Backlog/>,
    "Urgent": <Urgent />,
    "Todo": <ToDo />,
    "Cancelled": <Cancelled />,
    "No priority": <No/>,
    "Low" : <Low/>,
    "Medium" : <Medium/>,
    "High" : <High/>
  };

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                        iconMap[elem[index].title] || <Add />):(
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://i.ibb.co/t4YBFkm/logo.webp"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <Add />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
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
