import React, { useEffect, useState } from 'react';
import './styling/KanbanBoard.css';
import GroupView from './GroupView'; 
import GroupingCriteria from './GroupingCriteria'; 
import { fetchTickets } from '../services/api';
import { groupBy, sortTickets } from '../services/groupAndSort';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sortOrder, setSortOrder] = useState('priority');

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
    };

    loadTickets();
  }, []);

  const groupedTickets = groupBy(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sortOrder);

  const handleGroupingChange = (selectedOption) => {
    setGrouping(selectedOption.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="kanban-board">
      <div className="kanban-controls">
        <GroupingCriteria onChange={handleGroupingChange} />
        <select
          onChange={handleSortChange}
          value={sortOrder}
          className="sort-selector"
        >
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="kanban-columns">
        {Object.keys(sortedTickets).map((group, index) => (
          <GroupView key={index} title={group} tickets={sortedTickets[group]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
