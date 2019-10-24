import React, { Component } from 'react'
import {Input, Select, Button} from 'antd'
import PropTypes from 'prop-types'
import "antd/dist/antd.css"
import './form.css'
const { Option } = Select;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            description: '' ,
            location: '' ,
            fullTime: false 
        };
    }

    handleDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleLocation = (value) => {
        this.setState({location: value});
    }

    handleFullTime = (value) => {
        if (value === "fullTime") {
            this.setState({fullTime: true});
        }
        else if (value ===  "partTime") {
            this.setState({fullTime: false});
        }
    }

    submit = () => {
        this.props.filterData(this.state);
    }
    
    render() {
        let locationOptions = [<Option key={"All"} value={""}>All</Option>]
        this.props.uniqueLocations.forEach(element => {
            locationOptions.push(<Option key={element} value={element}>{element}</Option>)
        });
          return (
            <div className="form">
                <form>
                    <Input
                        type='text'
                        placeholder='Description'
                        onChange={this.handleDescription}
                    />
                      <Select
                        showSearch
                        placeholder="Location"
                        onChange={this.handleLocation}
                    >
                        {locationOptions}
                    </Select>
                    <Select
                        showSearch
                        placeholder="Part or FullTime"
                        // optionFilterProp="children"
                        onChange={this.handleFullTime}
                        // }
                    >
                        <Option value="fullTime">Full Time</Option>
                        <Option value="partTime">Part Time</Option>
                    </Select>
                    <Button onClick={this.submit}>
                        Search
                    </Button>
                </form>
            </div>
        );
    }
}

export default Form;

Form.propTypes = {
    filterData: PropTypes.func
};