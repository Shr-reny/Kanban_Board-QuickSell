import React from 'react';
import './styling/GroupView.css';
import cards from './cards';

const GroupView = ({ title, tickets }) => {
  return (
    <div className="group-view">
      <h2 className="group-view-title">{title}</h2>
      {tickets.map((ticket) => (
        <cards key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default GroupView;
