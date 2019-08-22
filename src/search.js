'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import './search.css';
import './search.less';
import  logo  from './images/logo.png'

class Search extends React.Component {
    render(){
        return <div className="search-text"> 
        Search Text
        <span className="search-less">SLess Text And Watch And HotModuleReplacement</span>
        <img src={logo}/>
        </div>;
    }
}
ReactDom.render(
    <Search />,
    document.getElementById('root')
)
