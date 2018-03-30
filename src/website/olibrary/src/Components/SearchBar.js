import React, { Component } from 'react'
import {Form, FormGroup, FormControl, Button} from "react-bootstrap"

import './Styles.css'
import { connect } from 'react-redux'
import { updateQuery } from "../actions/Query"

class SearchBar extends Component{
    constructor(props){
        super(props);
    }
    handleChange(e){
        this.props.onUpdateQuery(e.target.value);
    }
    render(){
        return(
            <div className={'searchBarContainer'}>
                <Form inline>
                <FormGroup controlId="formBasicText">
                    <FormControl
                        type="text"
                        value={this.props.query}
                        placeholder="Rechercher..."
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={e => {if (e.key === 'Enter') {e.preventDefault()}}}
                    />
                </FormGroup>
            </Form>
            </div>

        )
    }
}



const mapStateToProps = state => {
    return state;
};

const mapActionsToProps = {
    onUpdateQuery: updateQuery
};

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);