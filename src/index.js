import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from 'react-hot-loader'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root'),
	)
};

render(App);

registerServiceWorker();
