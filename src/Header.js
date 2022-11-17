import React from 'react';
import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover className='table-design'>
      <thead>
        <tr>
          <th>Countries</th>
          <th>Payments made</th>
          <th>Disbursed</th>
          <th>Collected</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src="./images/united-states.png" alt=" india" width="60" height="60" /></td>
          <td>364,528</td>
          <td>$3,332,852,905</td>
          <td>$11,664,521</td>
        </tr>
        <tr>
          <td><img src="./images/canada.png" alt=" india" width="60" height="60" /></td>
          <td>35,443</td>
          <td>$119,300,614</td>
          <td>$498,292</td>
        </tr>
        <tr>
        <td><img src="./images/india.png" alt=" india" width="60" height="60" /></td>
          <td>5,420</td>
          <td>₹ 1,149,640,201</td>
          <td>$ 49,140</td>
        </tr>
        <tr>
        <td><img src="./images/japan.png" alt=" india" width="60" height="60" /></td>
          <td></td>
          <td>¥10,621,158,359</td>
          <td></td>
        </tr>

      </tbody>
    </Table>
  );
}

export default BasicExample;


      