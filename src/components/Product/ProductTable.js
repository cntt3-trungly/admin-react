import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductDataService from '../../service/ProductDataService'


class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
    }

    componentDidMount() {
        this.refreshProducts();
    }


    refreshProducts = () => {
        ProductDataService.retrieveAllProducts()//HARDCODED
            .then(
                response => {
                    this.setState({ products: response.data })
                }
            )
    }

        deleteProductClicked = (id) => {
            ProductDataService.deleteProduct(id)
                .then(
                    response => {
                        this.setState({ message: `Delete of course ${id} Successful` })
                        this.refreshProducts()
                    }
                )
        }

        showProduct = () =>
            this.state.products.map((value, key) => (
                <ProductRow
                    key={key}
                    id={value.id}
                    productName={value.productName}
                    supplierName={value.supplierModel.supplierName}
                    categoryName={value.categoryModel.categoryName}
                    price={value.price}
                    description={value.description}
                    urlImage={value.urlImage}
                    unit={value.unit}
                    deleteButtonClick={(id) => this.deleteProductClicked(id)}
                   
                />

            ))

        render() {



            return (
 
                <div className="row">
                    <button className="btn btn-success float-right" >Add</button>
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="tile-body">
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Supplier Name</th>
                                            <th>Category Name</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Image</th>
                                            <th>Unit</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.showProduct()
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

    export default ProductTable;