import React, { Component } from 'react'
import SearchBar from "../components/SearchBar"
import Filters from "../components/Filters"
import Results from "../components/Results"

import { connect } from 'react-redux';
import { updateBooks } from "../actions/Books"

import { Grid, Row, Col } from 'react-bootstrap'

class HomePage extends Component {
    constructor(props){
        super(props)
        this.onUpdateBooks = this.onUpdateBooks.bind(this)
    }
    getQuery(query){
        alert('Recherche: ' + query)
    }
    callbackFilters(filters){
        console.log('Filtres dans l\'app:', filters)
    }
    onUpdateBooks(){
        this.props.onUpdateBooks([
            {id: 1, title: 'Mon titre', description: 'Ma description'},
            {id: 2, title: 'Mon titre', description: 'Ma description'},
            {id: 3, title: 'Mon titre', description: 'Ma description'}
        ]);
    }
    render(){
        console.log(this.props);
        const books = this.props.books;
        return(
            <div>
                <div><button onClick={this.onUpdateBooks}>Update books</button></div>
                <SearchBar callback={this.getQuery}/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3}>
                            <Filters callback={this.callbackFilters}/>
                        </Col>
                        <Col md={9}>
                            <Results books={books}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapActionsToProps = {
    onUpdateBooks: updateBooks
}

export default connect(mapStateToProps, mapActionsToProps)(HomePage)