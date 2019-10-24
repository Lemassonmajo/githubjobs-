import React, { Component } from 'react'
import {Button} from 'antd'
import PropTypes from 'prop-types'
import './workView.css'

class WorkView extends Component {
    createMarkup() {
        return {__html: this.props.workInfo.description};
    }
      
    render() {
        const { company_logo, company, created_at, location, title, type } = this.props.workInfo;
        return (
            <div className="workView">
                <div className="headWorkView">
                <div className="imgCOntainer">
                    <img src={`${company_logo}`} alt="logo"></img>
                </div> 
                <Button onClick={this.props.back}>Back</Button>
                </div>
                <div className="generalInfo">
                    <p>{company}</p>
                    <p>{title }</p>
                    <p>{created_at }</p>
                    <p>{location }</p>
                    <p>{type }</p>
                </div>
                <div dangerouslySetInnerHTML={this.createMarkup()} />

            </div>
        );
    }
}

export default WorkView;

WorkView.propTypes = {
    workInfo: PropTypes.object
};