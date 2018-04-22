import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Header } from './header.jsx';
import { BeerList } from './main.jsx';

document.addEventListener('DOMContentLoaded', () => {

    Modal.setAppElement('#app');

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Header/>
                    <BeerList/>
                </div>
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById('app'));
});