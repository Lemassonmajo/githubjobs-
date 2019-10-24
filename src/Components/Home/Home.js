import React, { Component } from 'react';
import Form from '../Form/Form'
import DataTable from '../DataTable/DataTable'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>GitHub Jobs</h1>
                <div className="elementsContainer">
                    <Form
                        filterData={this.props.filterData}
                        uniqueLocations={this.props.uniqueLocations}
                    />
                    <DataTable
                        data={this.props.data}
                    />
                </div>
            </div>
        );
    }
}

export default Home;