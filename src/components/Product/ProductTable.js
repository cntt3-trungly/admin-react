import React, { Component } from 'react';
import ProductRow from './ProductRow';
import CourseDataService from '../../service/CourseDataService'

const INSTRUCTOR = 'api/v1/products';

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }
 
  
    refreshCourses=() =>{
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    
                    this.setState({ courses: response.data })
                       }
            )
    }



    deleteCourseClicked=(id)=> {
        CourseDataService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

 

    
     showProduct = () =>
         this.state.courses.map((value, key) => (
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
               deleteButtonClick={(id)=>this.deleteCourseClicked(id)}
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