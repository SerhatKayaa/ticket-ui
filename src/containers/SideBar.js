import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Content from './Content';

import {
    Segment, 
    Button, 
    Sidebar, 
    Ref, 
    Form, 
    Input,
    TextArea,
} from 'semantic-ui-react';

const SideBar = () => {
    const segmentRef = React.useRef();
    const visible = useSelector(state => state.sidebarVisibility)
    const dispatch = useDispatch();
    return (
        <Sidebar.Pushable as={Segment.Group} raised>
            <Sidebar
                as={Segment}
                animation='overlay'
                icon='labeled'
                direction='right'
                onHide={() => dispatch({ type: 'GET_VISIBILITY', payload: false})}
                vertical
                target={segmentRef}
                visible={visible}
                width='wide'
            >
                <Segment style={slideBar}>
                    <h3> Create New Ticket</h3>
                    <Form>
                        <Form.Field control={Input} label="Subject" />
                        <Form.Field control={Input} label="Customer" />
                        <Form.Field control={Input} label="Assignee" />
                        <Form.Field control={TextArea} label="Description"/>
                    </Form>
                    <label style={labelFont}>Upload File</label><br />
                    <Button basic style={uploadButton}>+</Button>
                    <div style={spaceBetween}>
                        <Button as={Link} to="/new_ticket" basic>More detail</Button>
                        <Button>Create</Button>
                    </div>
                </Segment>
            </Sidebar>

            <Ref innerRef={segmentRef}>
                <Segment>
                    <Content />
                </Segment>
            </Ref>
        </Sidebar.Pushable>
    );
}

const slideBar = {
    width: '100%',
    height: '100%'
}

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

const spaceBetween = {
    margin: '10px 0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export default SideBar;