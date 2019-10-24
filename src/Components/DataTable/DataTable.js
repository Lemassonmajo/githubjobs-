import React, { Component } from 'react'
import { Table } from 'antd'
import WorkView from '../WorkView/WorkView'
import moment from 'moment'
import PropTypes from 'prop-types'


const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    sorter: (a, b) => { return a.title.localeCompare(b.title)},
  },
  {
    title: 'Location',
    dataIndex: 'location',
    defaultSortOrder: 'descend',
    sorter: (a, b) => { return a.location.localeCompare(b.location)},
  },
  {
    title: 'Type',
    dataIndex: 'type',
    // filters: [
    //   {
    //     text: 'Full Time',
    //     value: 'fullTime',
    //   },
    //   {
    //     text: 'Part Time',
    //     value: 'partTime',
    //   }
    // ],
  },
  {
    title: 'Created at',
    dataIndex: 'created_at',
    defaultSortOrder: 'descend',
    sorter: (a, b) => moment(a.created_at).unix() - moment(b.created_at).unix()  },
  {
    title: 'Company',
    dataIndex: 'company',
    defaultSortOrder: 'descend',
    sorter: (a, b) => { return a.company.localeCompare(b.company)},  },
  // {
  //   title: 'Company Logo',
  //   dataIndex: 'company_logo',
  //   render: () => <img src="https://zos.alipayobjects.com/rmsportal/DgGuKTJUjLNOsvluZEbY.png" />
  // },
  // {
  //   title: 'How to apply',
  //   dataIndex: 'how_to_apply',
  //   defaultSortOrder: 'descend',
  //   sorter: (a, b) => a.how_to_apply - b.how_to_apply,
  // },
  // {
  //   title: 'Address',
  //   dataIndex: 'address',
  //   filters: [
  //     {
  //       text: 'London',
  //       value: 'London',
  //     },
  //     {
  //       text: 'New York',
  //       value: 'New York',
  //     },
  //   ],
  //   filterMultiple: false,
  //   onFilter: (value, record) => record.address.indexOf(value) === 0,
  //   sorter: (a, b) => a.address.length - b.address.length,
  //   sortDirections: ['descend', 'ascend'],
  // },
];

class DataTable extends Component {
  state = {
    data : [],
    workInfo : {},
    workview : false
  };  
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      let data = []
      this.props.data.forEach(element => {
        if (element.location !== undefined) {
          data.push({key:element.id, company:element.company, company_logo:element.company_logo, created_at:moment(element.created_at).format('ll'), how_to_apply: element.how_to_apply, title:element.title, type:element.type, location:element.location, description:element.description} )
        }
      });
      this.setState({
        data:data
      })
    }
  }
  setSelectedRow = (value) => {
    this.setState({
      workInfo : value,
      workview : true
    })
  }

  back = () => {
    this.setState({
      workview : false
    })

  }

    render() {
      if (this.state.workview === false) {
        return (
            <div>
                <Table 
                  columns={columns} 
                  dataSource={this.state.data} 
                  onChange={this.onChange} 
                  pagination={{ pageSize: 50 }} 
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: () => { this.setSelectedRow(record) }
                    }; 
                  }}
                />
            </div>
        );
      }
      else if (this.state.workview === true) {
        return(
          <WorkView
            workInfo = {this.state.workInfo}
            back = {this.back}
          />
        )
      }
    }
}

export default DataTable;

DataTable.propTypes = {
  data: PropTypes.array
};