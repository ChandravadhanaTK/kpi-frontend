import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { countries } from './country';

const client = axios.create(
  {
      baseURL: "http://localhost:8080/payments",
      headers: {
          get: {
            "Access-Control-Allow-Origin": true
          }
      }
  }
);

function BasicExample() {
  const [post, setPost] = React.useState([]);
  
    React.useEffect(() => {
      client.get().then((response) => {
        console.log(response.data);
        setPost(response.data);
      });
    }, []);
    
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
        {
          post.map(
            (data) => (
              <tr>
                <td> <img src={countries.get(data.country)} alt=" india" width="60" height="60" /> </td>
                <td> {data.noOfPayments} </td>
                <td> {data.totalCredit} </td>
                <td> {data.totalDebit} </td>
              </tr>
                
            )
          )
        }

      </tbody>
    </Table>
  );
}

export default BasicExample;


      