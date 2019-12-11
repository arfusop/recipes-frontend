import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
require('dotenv').config()

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
