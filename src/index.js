
import 'babel-core/polyfill'
//import React from 'react'
import CommnetBox from './components/component'
//import {render} from 'react-dom'
import './css/app'

ReactDOM.render(<CommnetBox url="comments" />, document.getElementById('content'));