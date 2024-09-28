import React from 'react';
import './styling/cards.css';

const priorityColors = {
  4: '#e53e3e', // Urgent
  3: '#d69e2e', // High
  2: '#3182ce', // Medium
  1: '#38a169', // Low
  0: '#718096', // No priority
};

const cards = ({ ticket }) => {
  const priorityColor = priorityColors[ticket.priority] || '#718096';

  return (
    <div className="card" style={{ borderLeftColor: priorityColor }}>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <div className="priority">Priority: {ticket.priority}</div>
      <div className="status">Status: {ticket.status}</div>
      <div className="user">User: {ticket.user}</div>
    </div>
  );
};

export default cards;
