export const groupBy = (tickets, criteria) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[criteria] || 'No Data';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(ticket);
      return acc;
    }, {});
  };
  

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
  