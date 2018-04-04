import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateBook } from '../actions/Book'

class BookPage extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let book_id = this.props.match.params.id;

        const API = "http://localhost:3001/api/v1/";
        const END_POINT = "book";
        console.log(API + END_POINT + '/' + book_id);

        fetch(API + END_POINT + '/' + book_id)
            .then(response => response.json())
            .then(data => {
                // RESULTATS
                //this.props.onUpdateBook({title: "", description: ""});
            })
            .catch(error => console.log(error));
        }
    render(){
        return (
            <div>
                <Image src={"http://via.placeholder.com/800x200"}/>
                <h1>{this.props.book.title}</h1>
                <p>{this.props.book.description}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = {
    onUpdateBook: updateBook
}

export default connect(mapStateToProps, mapActionsToProps)(BookPage)