import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducers from "./reducers"
import Router from "./Router"
const store = createStore(reducers)
ReactDOM.render(<Provider store={store}>
	 <Router />
	</Provider>, document.getElementById('root'));
//registerServiceWorker();

store.subscribe(()=>{
	const state = store.getState()
	console.log(state)
})
