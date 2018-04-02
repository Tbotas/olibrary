import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import SkyLight from 'react-skylight'
import { Link } from 'react-router-dom'

import '../styles/Styles.css';

class Item extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <Button onClick={() => this.details.show()}>Détails</Button>
                <Button onClick={() => this.reserved.show()}>Réserver</Button>

                {/* Modals */}
                <SkyLight hideOnOverlayClicked ref={ref => this.details = ref} title="Détails">
                    Vous souhaitez plus de détails ? ...
                    <Link to={'/book/'+this.props.id}>Aller sur la page du livre</Link>
                </SkyLight>
                <SkyLight hideOnOverlayClicked ref={ref => this.reserved = ref} title="Réserver">
                    Vous souhaitez effectuer une réservation ? ...
                </SkyLight>
            </div>
        )
    }
}

export default Item;