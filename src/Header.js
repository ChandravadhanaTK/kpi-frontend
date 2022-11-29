import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { countries } from './country';
import {Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

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
  const [selectedDate, setSelectedDate] = React.useState(moment().format('YYYY-MM-DD'));
  
    React.useEffect(() => {
      client.get('', {
        params:{
          paymentDate: selectedDate,
        }
        
      }).then((response) => {
        console.log(response.data);
        setPost(response.data);
      });
    }, [selectedDate]);
    
  return (
    <div>
      {/* move this date picker functionality to separate component */}
      <div style={{float: 'right', marginRight:20}}>
          <Form.Group controlId="paymentDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" name="paymentDate" placeholder="Payment Date" value={selectedDate} onChange={e => setSelectedDate(moment(e.target.value).format('YYYY-MM-DD'))} />
          </Form.Group>
      </div>
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
     </div>
    
  );
}

export default BasicExample;


      