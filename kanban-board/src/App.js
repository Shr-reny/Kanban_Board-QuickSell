import React, { useEffect } from 'react';
import './App.css';
import GroupingCriteria from './src/components/GroupingCriteria';
import GroupView from './src/components/GroupView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './services/api';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return (
    <div style={{ paddingTop: "10px" }}>
      {/* Conditional rendering to check if allTickets has data */}
      {allTickets && allTickets.length > 0 ? (
        <>
          <GroupingCriteria />
          <hr style={{ marginTop: "10px" }} />
          <GroupView />
        </>
      ) : (
        <p>No tickets available.</p> // Message when there are no tickets
      )}
    </div>
  );
};

export default App;
