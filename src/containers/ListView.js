import React, { useState } from 'react';
import {
    Table,
    Icon,
    Header,
} from 'semantic-ui-react';



const ListView = ({ content, index }) => {
    const [statusHover, setStatusHover] = useState(false);
    const [subjectHover, setSubjectHover] = useState(false);

    return (
        <Table.Row key={index}>
            <Table.Cell>
                <Header onMouseOver={() => setStatusHover(true)} onMouseOut={() => setStatusHover(false)}as="h6">
                    {content.status === 'opened'
                    ? <Icon name="dot circle" color="green"/>
                    : <Icon name="dot circle" color="red" />}
                    <Header.Content>
                        {content.ticketNo}
                    </Header.Content>
                    {statusHover 
                    ?  <Header.Subheader>{content.status}</Header.Subheader>
                    : null}
                </Header>
            </Table.Cell>
            <Table.Cell>
                <Header onMouseOver={() => setSubjectHover(true)} onMouseOut={() => setSubjectHover(false)} as="h6">
                    {content.subject}
                    {subjectHover
                    ? <Header.Subheader>{content.description}</Header.Subheader>
                    : null}
                </Header>
            </Table.Cell>
            <Table.Cell>{content.customer}</Table.Cell>
            <Table.Cell>{content.assignee}</Table.Cell>
            <Table.Cell>{content.priority}</Table.Cell>
            <Table.Cell textAlign="center">{content.createdDate}</Table.Cell>
        </Table.Row>
    );
}

export default ListView;