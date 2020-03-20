import React from 'react';
import SideBar from '../containers/SideBar';
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Icon
} from 'semantic-ui-react';

const Home = () => {
    const visible = useSelector(state => state.sidebarVisibility);
    const filterVisibility = useSelector(state => state.filterView);
    const dispatch = useDispatch();
    return (
            <div style={mainContainer}>
                <div style={buttonContainer}>
                    <div style={buttonContainer}>
                    <Button icon onClick={() => dispatch({ type: 'LIST_VIEW', payload: true})}><Icon name="list ul" /></Button>
                        <Button icon onClick={() => dispatch({ type: 'LIST_VIEW', payload: false})}><Icon name="th" /></Button>
                        <Button 
                        icon
                        onClick={() => 
                            filterVisibility 
                            ? dispatch({ type: 'FILTER_VIEW', payload: false}) 
                            : dispatch({ type: 'FILTER_VIEW', payload: true})}
                        >
                            <Icon name="filter" />
                        </Button>
                    </div>
                    <div style={buttonContainer}>
                        <Button 
                            onClick={() => 
                                visible 
                                ? dispatch({ type: 'GET_VISIBILITY', payload: false})
                                : dispatch({ type: 'GET_VISIBILITY', payload: true})
                            }>New Ticket
                        </Button>
                        <Button>Start Process</Button>
                    </div>
                </div>
                <SideBar />
            </div>
    );
}

const buttonContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
}



const mainContainer = {
    height: '100%',
    margin: '20px auto'
};

export default Home;