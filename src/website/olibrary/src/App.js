import React, { Component } from 'react';
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Filters from "./Components/Filters";
import Results from "./Components/Results";

import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
    getQuery(query){
        alert('Recherche: ' + query);
    }
    callbackFilters(filters){
        console.log('Filtres dans l\'app:', filters);
    }
    render(){
        const books = [
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'},
            {title: 'Mon super titre', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores doloribus ducimus, ea earum illo neque reiciendis sint ullam unde ut veritatis voluptatem voluptatum. Accusantium dicta dolores nemo nobis ullam?\n'}
            ];
        return(
            <div>
                <Menu/>
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

export default App;