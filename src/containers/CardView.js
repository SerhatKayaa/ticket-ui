import React from 'react';
import {
    Card,
    Icon
} from 'semantic-ui-react';


const CardView = ({ content, index }) => {
    return (
        <Card style={cardContainer}>
            <div style={cardItem}>
                 {
                    content.status === 'opened' 
                    ? <Icon name="ellipsis vertical" color="green" size="big"/>
                    : <Icon name="ellipsis vertical" color="red" size="big"/>
                 }
                <div style={floatRight}>
                    <h6>{content.ticketNo}</h6>
                    <h6>{content.subject}</h6>
                </div>
            </div>
            <div style={cardItem}>
                <h6>Customer:  {content.customer}</h6>
                <h6>Assignee: {content.assignee}</h6>
            </div>
            <div style={cardItem}>
                <h6>Priority:  {content.priority}</h6>
                <h6>Created Date:  {content.createdDate}</h6>
            </div>
        </Card>
    );
}

const cardContainer = {
    width: '100%',
    margin: '10px 5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const floatRight = {
    float: 'right'
}

const cardItem = {
    margin: '10px',
}

export default CardView;