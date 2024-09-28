import React from 'react';
import './styling/GroupingCriteria.css';
import Select from 'react-select';

const options = [
  { value: 'status', label: 'By Status' },
  { value: 'user', label: 'By User' },
  { value: 'priority', label: 'By Priority' }
];

const GroupingCriteria = ({ onChange }) => {
  return (
    <div className="grouping-criteria">
      <Select
        options={options}
        onChange={onChange}
        defaultValue={options[0]}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: '#ccc',
          }),
        }}
      />
    </div>
  );
};

export default GroupingCriteria;
