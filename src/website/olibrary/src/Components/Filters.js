import React, { Component } from 'react';
import {FormGroup, FormControl, Checkbox, Radio, ControlLabel} from "react-bootstrap";

import './Styles.css';

class Filters extends Component{
    state = {
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
        this.props.callback(this.state.filters);
    }
    handleChangeType(event) {
        console.log(event.target);
        this.setState({filters: {type: event.target.value}});
        this.sumbitChanges();
    }
    handleChangeAvailable(event) {
        console.log(event.target.value);
        this.setState({filters: {available: event.target.value}});
        this.sumbitChanges();
    }
    handleChangeCategory(event) {
        let id = event.target.value;
        if(this.state.filters.categories.includes(id)){
            let indexOfId = this.state.filters.categories.indexOf(id);
            let categories = this.state.filters.categories.slice(indexOfId, 1);
            console.log(categories);
            this.setState({filters: {categories: categories}});
        }else{
            let categories = this.state.filters.categories.push(id);
            this.setState({filters: {categories: categories}});
        }
        this.sumbitChanges();
    }
    render(){
        var cat = [
          'Action',
          'Aventure',
          'Sport',
          'Cuisine',
          'Développement personnel',
        ];
        const renderCategories = cat.map(function (value, index) {
            return <Checkbox key={index} value={index} onChange={this.handleChangeCategory}>{value}</Checkbox>
        }, this);
        return(
            <form>
                <h2>Filtres</h2>
                <FormGroup >
                    <ControlLabel>Catégories</ControlLabel>
                    {renderCategories}
                </FormGroup>
                <FormGroup  onChange={this.handleChangeAvailable}>
                    <ControlLabel>Disponible</ControlLabel><br/>
                    <Radio name="radioGroup" inline>
                        Oui
                    </Radio>
                    <Radio name="radioGroup" inline>
                        Non
                    </Radio>
                    <Radio name="radioGroup" inline checked>
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

export default Filters;