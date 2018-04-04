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
    }
    componentDidMount(){
        const API = "http://localhost:3001/api/v1/";
        const END_POINT = "books";

        fetch(API + END_POINT)
            .then(response => response.json())
            .then(data => {
                // RESULTATS
                /*
                this.props.onUpdateBooks([
                    {id: 1, title: 'Mon titre', description: 'Ma description'},
                    {id: 2, title: 'Mon titre', description: 'Ma description'},
                    {id: 3, title: 'Mon titre', description: 'Ma description'}
                ]);
                 */
            })
            .catch(error => console.log(error));
    }
    render(){
        const books = this.props.books;
        return(
            <div>
                <SearchBar callback={this.getQuery}/>
                <Grid>
                    <Row className="show-grid">
                        <Col md={3}>
                            <Filters/>
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