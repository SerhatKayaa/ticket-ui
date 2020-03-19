import React, { useState } from 'react';
import {
    Segment, 
    Button,
    Form,
    Input,
    TextArea,
    Checkbox,
} from 'semantic-ui-react';
import AddProduct from '../containers/AddProduct';

const CreateNewTicket = () => {
    const [visible, setVisible] = useState(false);
    return (
       <Segment.Group horizontal style={segmentContainer}>
            <Segment>
                <h3> Create New Ticket</h3>
                <Form>
                    <Form.Field control={Input} label="Subject" />
                    <Form.Field control={Input} label="Customer" />
                    <Form.Field control={Input} label="Assignee" />
                    <Form.Field control={TextArea} label="Description"/>
                </Form>
                <label style={labelFont}>Upload File</label><br />
                <Button basic style={uploadButton}>+</Button>
                <div style={buttonStyle}>
                    <Button color="green" basic>Create</Button>
                </div>
                <div>
                    <p>If you have product module, you can click right here ! </p>
                    <Checkbox checked={visible} onChange={() => visible ? setVisible(false) : setVisible(true)} toggle />
                </div>
            </Segment>
            {visible 
            ?
                <Segment>
                    <AddProduct />
                </Segment>
            : null}
                
       </Segment.Group>
    );
};

const segmentContainer = {
    width: '80%',
    margin: '20px auto'
};

const labelFont = {
    marginTop: '10px',
    fontSize: '.92857143em',
    fontWeight: '700',
}

const uploadButton = {
    width: '100%',
    height: '90px',
    fontSize: '30px',
    fontWeight: 'bold',
}

const buttonStyle = {
    margin: '10px 0px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

export default CreateNewTicket;