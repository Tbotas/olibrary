import React, { Component } from 'react';

import './Styles.css';
import Item from "./Item";

class Results extends Component{
    render(){
        const renderItems = this.props.books.map(function (book, index) {
                return <Item key={index} title={book.title} description={book.description}/>
            });

        return(
            <div>
                {renderItems}
            </div>
        )
    }
}

export default Results;