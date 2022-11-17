
import React, { useState } from "react";
//import DatePicker from "react-datepicker";
import {Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <React.Fragment>
            <div style={{float: 'right', marginRight:20}}>
                <Form.Group controlId="paymentDate">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="paymentDate" placeholder="Payment Date" selected={startDate} onChange={(date) => setStartDate(date)}/>
                </Form.Group>
            </div>
        </React.Fragment>
        
    );
  };


export default Example;