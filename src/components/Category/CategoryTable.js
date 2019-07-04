import React, { Component } from 'react';
import CategoryRow from './CategoryRow';
import CategoryDataService from '../../service/CategoryDataService'

class CategoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            messages: null
        }
        this.refreshCategories = this.refreshCategories.bind(this)
    }

    componentDidMount() {
        this.refreshCategories();
    }

    refreshCategories = () => {
        CategoryDataService.retrieveAllCategories()//HARDCODED
            .then(
                response => {
                    this.setState({ categories: response.data })
                }
            )
    }
    deleteCategoryClicked = (id) => {
        CategoryDataService.deleteCategory(id)
            .then(
                response => {
                    this.setState({ message: `Delete of cảegory ${id} Successful` })
                    this.refreshCategories()
                }
            )
    }



    showCategory = () =>
        this.state.categories.map((value, key) => (
            <CategoryRow
                key={key}
                id={value.id}
                categoryName={value.categoryName}
                description={value.description}
                deleteButtonClick={(id) => this.deleteCategoryClicked(id)}
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