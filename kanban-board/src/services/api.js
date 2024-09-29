import axios from 'axios';

export const fetchAllData = () => async (dispatch) => {
    try {
        // Dispatching an action to indicate that the data request has started
        dispatch({ type: 'DATA_REQUEST' });
        
        // Making an API request to fetch data from the specified URL
        const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        
        // Dispatching an action to store the fetched data in the Redux store
        dispatch({ type: 'DATA_SUCCESS', payload: data });
    } catch (error) {
        // Dispatching an action to handle errors in case the API request fails
        dispatch({ type: 'DATA_FAILURE' });
    }
};

export const selectData = (group, allTickets, orderValue) => async (dispatch) => {
    try {
        // Dispatching an action to indicate that the data selection request has started
        dispatch({ type: 'SELECT_DATA_REQUEST' });

        let user = false;
        let mySet = new Set();
        let arr = [], selectedData = [];

        // Default statuses for grouping by 'status'
        const defaultStatusValues = ["Done", "Cancelled", "ToDo", "InProgress", "Backlog"];

        // Grouping data by 'status'
        if (group === 'status') {
            allTickets.forEach((elem) => {
                // Collecting all unique statuses
                mySet.add(elem.status);
            });

            arr = [...mySet]; // Converting set into an array

            // Handling cases where fewer than 5 statuses are found
            const uniqueStatusCount = arr.length;
            if (uniqueStatusCount < 5) {
                const remainingStatuses = defaultStatusValues.filter(status => !arr.includes(status));
                arr = [...arr, ...remainingStatuses.slice(0, 5 - uniqueStatusCount)];
            }

            // Organizing tickets by status
            arr.forEach((elem, index) => {
                let filteredTickets = allTickets.filter((fElem) => {
                    return elem === fElem.status;
                });
                selectedData.push({
                    [index]: {
                        title: elem,
                        value: filteredTickets
                    }
                });
            });
        } 
        // Grouping data by 'user'
        else if (group === 'user') {
            user = true;
            allTickets?.allUser?.forEach((elem, index) => {
                // Filtering tickets by userId
                let userTickets = allTickets?.allTickets?.filter((Felem) => {
                    return elem.id === Felem.userId;
                });

                selectedData.push({
                    [index]: {
                        title: elem.name, // User's name as the group title
                        value: userTickets
                    }
                });
            });
        } 
        // Grouping data by 'priority'
        else {
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((elem, index) => {
                // Filtering tickets by priority
                let priorityTickets = allTickets.filter((fElem) => {
                    return index === fElem.priority;
                });

                selectedData.push({
                    [index]: {
                        title: elem, // Priority as the group title
                        value: priorityTickets
                    }
                });
            });
        }

        // Sorting data by title if the order is by title
        if (orderValue === "title") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        // Sorting data by priority if the order is by priority
        if (orderValue === "priority") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => b.priority - a.priority);
            });
        }

        // Dispatching action with the selected and grouped data
        dispatch({ type: 'SELECT_DATA_SUCCESS', payload: { selectedData, user } });
    } catch (error) {
        // Handling errors and dispatching failure action
        dispatch({ type: 'SELECT_DATA_FAILURE', payload: error.message });
    }
};

