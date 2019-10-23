import React from "react"
import 'antd/dist/antd.css';
import './form.css'
import { Input, Button, Select} from 'antd';


export default class Form extends React.Component {
    // constructor( props ){
    //     super( props );
    //     this.onOpenChange = this.onOpenChange.bind(this);
    // }

    state = {
        description: "yves",
        deliveryPlant: "",
        salesArea: "",
        shipTo: "",
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
        [name]: value
        })
    }

    clearFilters = () => {
        this.setState ({
        deliveryPlant: "",
        salesArea: "",
        shipTo: "",
        pools: "",
        comercialCarrier: ""
        })
    }

    handleChange = (value, option) => {
        if (value.indexOf(",") === 0) {
        if (option === "deliveryPlant" ) {
            this.setState({
            deliveryPlant: value.split(",")
            })
        }
        }
        else if (value.length !== 0){
        if (option === "deliveryPlant" ) {
            this.setState({
            deliveryPlant: [value]
            })
        }
        if (option === "salesArea" ) {
            this.setState({
            salesArea: [value]
            })
        }
        }
        else {
            if (option === "deliveryPlant" ) {
            this.setState({
                deliveryPlant: null
            })
            }
            if (option === "salesArea" ) {
            this.setState({
                salesArea: null
            })
            }
        }
    }

    handleShipTo = (event) => {
        this.setState ({
        shipTo: event.target.value
        })
    }

    handleDeliveryPlant = (value) => {
        this.handleChange(value,"deliveryPlant")
    }
    
    handleSalesAreas = (value) => {
        this.handleChange(value,"salesArea")
    }
    
    handlePools = (value) => {
        // this.handleChange(value,"salesArea")
        this.setState({
            pools: value,
        })
    }
    
    handleComercialCarrier = (value) => {
        // this.handleChange(value,"salesArea")
        this.setState({
            comercialCarrier: value,
        })
    }

    handleDescription = (value) => {
        console.log(value)
        // this.handleChange(value,"salesArea")
        this.setState({
            description: value,
        })
        console.log("description")
    }


    handleSubmit = event => {
        event.preventDefault()
        const values = {
        description: this.state.description ? this.state.description:null,
        salesArea: this.state.salesArea ? this.state.salesArea[0]:null,
        shipTo: this.state.shipTo ? [`${this.state.shipTo}`]:null,
        pool: this.state.pool ? [`${this.state.pool}`]:null,
        comercialCarrier: this.state.comercialCarrier ? [`${this.state.comercialCarrier}`]:null,
        }
        // this.props.onFilterValue(values)
        console.log(values)
    }

    render() {
        const options = [];
        const optionsSalesAreas = [];
        const optionsPools = [];
        const carriers = ['Comercial Carrier 1', 'Comercial Carrier 2', 'Comercial Carrier 3'];
        const optionsComercialCarrier = [];
        const areas = ['Area1', 'Area2', 'Area3'];

        const plants = this.props.uniquePlants
        if (plants !== undefined){
        plants.forEach (plant => {
            options.push(<Select.Option key={plant}>{plant}</Select.Option>);
        }) 
        }
        areas.forEach (stat => {
            optionsSalesAreas.push(<Select.Option key={stat}>{stat}</Select.Option>);
            }) 
    
        carriers.forEach (stat => {
            optionsComercialCarrier.push(<Select.Option key={stat}>{stat}</Select.Option>);
            console.log(stat)
        }) 
        
        return (
            <div className="filtersFormContainer">
                <div className="filtersForm">
                    <form onSubmit={this.handleSubmit}>

                            <label>
                                <Input 
                                    // style={{ width: 250}}
                                    value="yves"
                                    placeholder="Description"
                                    onChange={this.handleDescription}
                                >
                                </Input>
                            </label>

                            
                            <label>
                                <Select 
                                    mode="multiple"
                                    placeholder="ShipTo"
                                    // style={{ width: 250}}
                                    onChange={this.handleShipTo}
                                >
                                    {optionsSalesAreas}
                                </Select>

                            </label>

                            <label>
                                <Select 
                                    mode="multiple"
                                    // style={{ width: 250}}
                                    placeholder="Sales Areas"
                                    defaultValue={[]}
                                    onChange={this.handleSalesAreas}
                                >
                                    {optionsSalesAreas}
                                </Select>
                            </label>

                            <label className="secondFile">
                                <Select 
                                    mode="multiple"
                                    // style={{ width: 250}}
                                    placeholder="Pool"
                                    defaultValue={[]}
                                    onChange={this.handlePools}
                                >
                                    {optionsPools}
                                </Select>
                            </label>

                            <label className="secondFile">
                                <Select 
                                    mode="multiple"
                                    // style={{ width: 250}}
                                    placeholder="Comercial Carrier"
                                    defaultValue={[]}
                                    onChange={this.handleComercialCarrier}
                                >
                                    {optionsComercialCarrier}
                                </Select>
                            </label>

                        <Button className="secondFile" size="large" onClick={this.handleSubmit}>Submit</Button>
                    </form>
                </div>
            </div>  
        )
    }
}