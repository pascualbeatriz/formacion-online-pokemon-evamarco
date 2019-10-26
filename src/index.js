import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {HashRouter} from 'react-router-dom';
import './index.scss'; 
import { usePromiseTracker } from "react-promise-tracker";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && 
    <h1>Hey some async call in progress ! </h1>
    );  
}
ReactDOM.render(<HashRouter><App /> <LoadingIndicator/></HashRouter>, document.getElementById('root'));

