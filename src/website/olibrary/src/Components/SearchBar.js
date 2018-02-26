import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button} from "react-bootstrap";

import './Styles.css';

class SearchBar extends Component{
    state = {
        value: ''
    }
    componentDidMount(){
        let url = 'https://randomuser.me/api/';
        fetch(url)
            .then(response => {
                console.log(response);

            })
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error)
            })
    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    getValidationState(){

    }
    submitSearch(){
        let query = this.state.value;
        this.props.callback(query);
    }
    render(){
        return(
            <div className={'searchBarContainer'}>
                <Form inline>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange.bind(this)}
                    />
                    <Button onClick={this.submitSearch.bind(this)}>Submit</Button>
                </FormGroup>
            </Form>
            </div>

        )
    }
}

export default SearchBar;