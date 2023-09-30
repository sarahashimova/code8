import React from 'react';
import './table.scss';

function User() {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr className="table-header">
            <th>Ad Soyad</th>
            <th>Tədris Sahəsi</th>
            <th>Telefon nömrəsi</th>
            <th>Müraciət tarixi</th>
            <th>Görüş tarixi</th>
            <th>Status</th>
            <th>Detallı</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td>Rabiyya Huseynzade</td>
            <td>Front-End</td>
            <td>123-456-7890</td>
            <td>2023-09-30</td>
            <td>2023-10-01</td>
            <td><div className='status'>Aktiv</div></td>
            <td>...</td>
          </tr>
          <tr className="table-row">
            <td>Rabiyya Huseynzade</td>
            <td>Front-End</td>
            <td>123-456-7890</td>
            <td>2023-09-30</td>
            <td>2023-10-01</td>
            <td>Aktiv</td>
            <td>...</td>
          </tr>
          <tr className="table-row">
            <td>Rabiyya Huseynzade</td>
            <td>Front-End</td>
            <td>123-456-7890</td>
            <td>2023-09-30</td>
            <td>2023-10-01</td>
            <td>Aktiv</td>
            <td>...</td>
          </tr>
          <tr className="table-row">
            <td>Rabiyya Huseynzade</td>
            <td>Front-End</td>
            <td>123-456-7890</td>
            <td>2023-09-30</td>
            <td>2023-10-01</td>
            <td>Aktiv</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User