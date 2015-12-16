'use strict'
//import React from 'react'
//import MenuBox from './components/menu'
//import {render} from 'react-dom'
//import 'bootstrap'
// import './ace/assets/css/font-awesome.min'
// import './ace/assets/css/ace-fonts'
// import './ace/assets/css/ace.min'
// import './ace/assets/css/ace-skins.min'
// import './ace/assets/css/ace-rtl.min'
//import 'jquery'
// import './ace/assets/js/ace-extra.min'
//import './ace/assets/js/bootstrap.min'
// import './ace/assets/js/jquery.mobile.custom.min'
// import './ace/assets/js/jquery-ui.custom.min'
// import './ace/assets/js/jquery.ui.touch-punch.min'
// import './ace/assets/js/jquery.easypiechart.min'
// import './ace/assets/js/jquery.sparkline.min'
// import './ace/assets/js/flot/jquery.flot.min'
// import './ace/assets/js/flot/jquery.flot.pie.min'
// import './ace/assets/js/flot/jquery.flot.resize.min'

//import './ace/assets/js/ace-elements.min'
//import './ace/assets/js/ace.min'
//
import 'bootstrap/dist/css/bootstrap.css'
import './scss/style'
// import './bootstrap/dist/css/bootstrap.css'
//import './font-awesome/scss/font-awesome'
//import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.min'
import Body from './components/navbar'
//import Tabbox from './components/tabbox'
var products = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
//ReactDOM.render(<Tabbox products={products}/>, document.getElementById('content'));
ReactDOM.render(<Body />, document.getElementById('content'));