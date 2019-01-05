import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)


ReactDOM.render(<Application />, document.getElementById('root'));
