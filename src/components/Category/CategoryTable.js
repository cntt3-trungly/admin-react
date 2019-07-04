import React, { Component } from 'react';
import CategoryData from './CategoryData';
import CategoryRow from './CategoryRow';

class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: CategoryData
        }
    }

   

    showCategory = () =>
        this.state.data.map((value, key) => (
            <CategoryRow
                key={key}
                id={value.id}
                categoryName={value.categoryName}
                description={value.description}
                
            />

        ))


    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>CategoryName</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.showCategory()
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryTable;