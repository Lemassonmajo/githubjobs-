import React, { Component } from 'react';
import Form from '../Form/Form'
import DataTable from '../DataTable/DataTable'
import Header from '../Header/Header'
import PropTypes from 'prop-types'
import './home.css'

class Home extends Component {
    state ={
        formSubmited : false
    }

    render() {
        return (
            <div className="home">
                <Header/>
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

Home.propTypes = {
    data: PropTypes.array
};