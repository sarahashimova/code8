import React from 'react';
import './table.scss';

function User() {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr className="table-header">
            <th>Name Surname</th>
            <th>Occupation</th>
            <th>Mobile Number</th>
            <th>Date 1</th>
            <th>Date 2</th>
            <th>Status</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td>John Doe</td>
            <td>Engineer</td>
            <td>123-456-7890</td>
            <td>2023-09-30</td>
            <td>2023-10-01</td>
            <td>
              <div className="status">
                <span className="status-circle red"></span>
                <span className="status-circle blue"></span>
                <span className="status-circle green"></span>
              </div>
            </td>
            <td>...</td>
          </tr>
          {/* Add more rows with user data here */}
        </tbody>
      </table>
    </div>
  )
}

export default User