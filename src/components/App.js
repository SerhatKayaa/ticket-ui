import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import CreateNewTicket from './CreateNewTicket';
import Home from './Home';

const App = () => {
    return (
        <div style={fullHeight}>
            <Header />
            <BrowserRouter>
                <div style={fullHeight}>
                    <Route path="/" exact component={Home} />
                    <Route path="/new_ticket" exact component={CreateNewTicket} />
                </div>
            </BrowserRouter>
        </div>
    )
}

const fullHeight = {
    height: '100%',
    width: '100%'
}

export default App;