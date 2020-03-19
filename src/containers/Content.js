import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import ListView from './ListView';
import CardView from './CardView';
import {
    Table,
    Input,
} from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const titles = ['Ticket No', 'Subject', 'Customer', 'Assignee', 'Priority'];
const tableContents = [
    {
        "status": 'opened',
        "ticketNo": '#1234',
        "subject": "Lamb Change",
        "description": "Lamb is broken, has to be changed",
        "customer": "Someone",
        "assignee": "Person",
        "priority": "High",
        "createdDate": "20.20.2020"
    },
    {
        "status": 'closed',
        "ticketNo": '#12434',
        "subject": "Lamb Change",
        "description": "Lamb is broken, has to be changed",
        "customer": "Someone",
        "assignee": "Person",
        "priority": "High",
        "createdDate": "20.20.2020"
    },
    {
        "status": 'closed',
        "ticketNo": '#12434',
        "subject": "Lamb Change",
        "description": "Lamb is broken, has to be changed",
        "customer": "Someone",
        "assignee": "Person",
        "priority": "High",
        "createdDate": "20.20.2020"
    },
]

const Content = () => {
    const [startDate, setDate] = useState(new Date());
    const listViewVisibility = useSelector(state => state.listView);
    const filterVisibility = useSelector(state => state.filterView);

    return (
      <div>
         <Table fixed={true}>
            <Table.Header>
                <Table.Row>
                    {titles.map((title) => 
                    <Table.HeaderCell>{title}<br />
                        {
                            filterVisibility
                            ? <Input fluid={true} />
                            : null
                        }
                    </Table.HeaderCell>)}
                    <Table.HeaderCell width={5}>
                        Created Date<br />
                            <DatePicker selected={startDate}   showPopperArrow={false} onChange={(date) => setDate(date)}/>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {tableContents.map((content, index) => 
                listViewVisibility
                ? <ListView content={content} index={index} />
                : null
            )}

            </Table.Body>
        </Table>
        {tableContents.map((content, index) => 
            !listViewVisibility
            ? <CardView content={content} index={index} />
            : null
        )}
      </div>  
    );
}


export default Content;