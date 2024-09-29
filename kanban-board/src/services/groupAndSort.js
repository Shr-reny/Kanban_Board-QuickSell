  export const sortTickets = (groupedTickets, sortOrder) => {
    Object.keys(groupedTickets).forEach((key) => {
      groupedTickets[key].sort((a, b) => {
        if (sortOrder === 'priority') {
          return b.priority - a.priority;
        } else if (sortOrder === 'title') {
          return a.title.localeCompare(b.title); 
        }
        return 0;
      });
    });
  
    return groupedTickets;
  };
  
  // src/services/groupAndSort.js

export const groupBy = (tickets, grouping) => {
  if (!Array.isArray(tickets)) return {}; // Ensure tickets is an array

  const grouped = tickets.reduce((acc, ticket) => {
    let key;
    switch (grouping) {
      case 'status':
        key = ticket.status || 'Unknown'; // Default to 'Unknown' if no status is provided
        break;
      case 'user':
        key = ticket.assignedUser || 'Unassigned'; // Default to 'Unassigned'
        break;
      case 'priority':
        key = ticket.priority || 'No Priority'; // Default to 'No Priority'
        break;
      default:
        key = 'Unknown';
    }
    
    // Initialize the array for this key if it doesn't exist
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    
    return acc;
  }, {});

  return grouped;
};

// Your existing sortTickets function can remain unchanged
