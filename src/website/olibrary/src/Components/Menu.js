import React, { Component } from 'react';
import {Navbar, Nav, NavItem, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from "react-bootstrap";
import SkyLight from 'react-skylight';

const FieldGroup = ({ id, label, help, ...props }) => {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

class Menu extends Component{
    state = {
        email: '',
        password: ''
    }
    constructor(){
        super();
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }
    submitLogin(){
        if(this.state.email.length == 0 || this.state.password.length == 0){
            alert("Vous devez remplir tous les champs");
        }else{
            const API = "https://reqres.in/api/";
            const ENDPOINT = "login";

            var myInit = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            };

            fetch(API + ENDPOINT, myInit)
                .then(response => response.json())
                .then(data => {
                    if(data.token){
                        alert('Vous êtes connecté avec le token: '+data.token)
                    }
                })
                .catch(error => console.log(error));
        }
    }

    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Olibrary</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={() => this.login.show()} href="#">
                                Se connecter
                            </NavItem>
                            <NavItem eventKey={2} onClick={() => this.register.show()} href="#">
                                S'inscrire
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            {/* Modals */}
            <SkyLight hideOnOverlayClicked ref={ref => this.login = ref} title="Se connecter">
                <form>
                    <FieldGroup id="formControlsEmail" value={this.state.email} onChange={this.handleChangeEmail} type="email" label="Email" placeholder="Votre email" />
                    <FieldGroup id="formControlsPassword" value={this.state.password} onChange={this.handleChangePassword} label="Mot de passe" type="password" placeholder="•••••••••" />
                    <Button onClick={this.submitLogin}>Se connecter</Button>
                </form>
            </SkyLight>
            <SkyLight hideOnOverlayClicked ref={ref => this.register = ref} title="S'inscrire">
                S'inscrire
            </SkyLight>
        </div>
        )
    }
}

export default Menu;