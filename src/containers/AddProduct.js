import React, { useState } from 'react';
import { 
    Accordion, 
    Icon, 
    Form, 
    Input,
    Button,
} from 'semantic-ui-react'

const AddProduct = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
        <Accordion styled>
            <Accordion.Title
            active={true}
            onClick={() => visible ? setVisible(false) : setVisible(true)}
            >
                <Icon name='plus' />
                Add Product
            </Accordion.Title>
            <Accordion.Content active={visible}>
                <Form>
                    <Form.Field control={Input} label="Serial Number" />
                    <Form.Field control={Input} label="Product" />
                    <Form.Field control={Input} label="Brand" />
                    <Form.Field control={Input} label="Model" />
                </Form>
                <div style={buttonStyle}>
                    <Button color="green" basic>Create</Button>
                </div>
            </Accordion.Content>
      </Accordion>
        </div>
    );
}


const buttonStyle = {
    margin: '10px 0px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

export default AddProduct;