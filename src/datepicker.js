
import React from "react";
import {Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

const Example = () => {
    
    const [value, setValue] = React.useState(moment().format('YYYY-MM-DD'))

    return (
        <React.Fragment>
            <div style={{float: 'right', marginRight:20}}>
                <Form.Group controlId="paymentDate">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control type="date" name="paymentDate"  placeholder="Payment Date" value={value} onChange={e => setValue(moment(e.target.value).format('YYYY-MM-DD'))} />
                </Form.Group>
            </div>
        </React.Fragment>
        
    );
  };


export default Example;