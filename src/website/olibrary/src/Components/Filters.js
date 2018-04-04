import React, { Component } from 'react';
import {FormGroup, FormControl, Checkbox, Radio, ControlLabel} from "react-bootstrap";

import { connect } from 'react-redux';
import { updateFilters } from '../actions/Filters'

import '../styles/Styles.css';


class Filters extends Component{
    state = {
        loading: true,
        categories : [],
        filters: {
            categories : [],
            available: 0,
            type: null
        }
    }
    constructor(){
        super();

        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeAvailable = this.handleChangeAvailable.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
    }
    sumbitChanges(){
        this.props.onUpdateFilters(this.state.filters);
    }
    handleChangeType(event) {
        let state = this.state;
        state.filters.type = event.target.value;
        this.setState({state});
        this.sumbitChanges();
    }
    handleChangeAvailable(event) {
        this.setState({filters: {available: event.target.value}});
        this.sumbitChanges();
    }
    handleChangeCategory(event) {
        this.sumbitChanges();
    }
    componentDidMount() {
        const API = "https://www.googleapis.com/books/v1/volumes?q={search terms}";
        fetch(API)
            .then(response => response.json())
            .then(data => {
                let categories = [];
                data.items.map(item => {
                    if(item.volumeInfo.categories){
                        categories.push(item.volumeInfo.categories);
                    }
                });
                this.setState({loading: false, categories});
            })
            .catch(error => console.log(error));
    }
    render(){

        let renderCategories;
        if(this.state.loading === true){
            renderCategories = (<div>Loading...</div>);
        }else{
            renderCategories = this.state.categories.map(function (value, index) {
                return <Checkbox key={index} value={index} onChange={this.handleChangeCategory}>{value}</Checkbox>
            }, this);
        }

        return(
            <form>
                <h2>Filtres</h2>
                <FormGroup >
                    <ControlLabel>Catégories</ControlLabel>
                    {renderCategories}
                </FormGroup>
                <FormGroup  onChange={this.handleChangeAvailable}>
                    <ControlLabel>Disponible</ControlLabel><br/>
                    <Radio name="radioGroup" inline value={'yes'}>
                        Oui
                    </Radio>
                    <Radio name="radioGroup" inline value={'no'}>
                        Non
                    </Radio>
                    <Radio name="radioGroup" inline value={'anyway'}>
                        Peu importe
                    </Radio>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Type</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onChange={this.handleChangeType}>
                        <option value="1">Roman</option>
                        <option value="2">Journal local</option>
                        <option value="3">Revue presse</option>
                        <option value="4">Revue scientifique</option>
                    </FormControl>
                </FormGroup>
            </form>
        )
    }
}



const mapStateToProps = state => {
    return state;
};

const mapActionsToProps = {
    onUpdateFilters: updateFilters
};

export default connect(mapStateToProps, mapActionsToProps)(Filters);