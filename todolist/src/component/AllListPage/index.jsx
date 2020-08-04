import ListTable from '../ListTable'
import AddList from '../AddList'
import React, { Component } from 'react';

class AllListPage extends Component {
    render() {
        return (
            <div>
                <AddList />
                <ListTable />
            </div>
        )
    }
}

export default AllListPage;
