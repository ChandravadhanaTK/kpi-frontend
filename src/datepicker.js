
import React, { useState } from "react";
import {Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

const Example = () => {
    
    const [value, setValue] = useState(moment().format('YYYY-MM-DD'))
    
    const onChangeDate = e => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setValue(newDate);
        console.log(newDate); //value picked from date picker
      };

    return (
        <React.Fragment>
            <div style={{float: 'right', marginRight:20}}>
                <Form.Group controlId="paymentDate">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="paymentDate" placeholder="Payment Date" value={value}
        onChange={onChangeDate}/>
                </Form.Group>
            </div>
        </React.Fragment>
        
    );
  };


export default Example;