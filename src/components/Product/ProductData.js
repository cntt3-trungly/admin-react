import React, { Component } from 'react'
import CourseDataService from '../../service/ProductDataService'


class ProductData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse( this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }


    render() {

        let { description, id } = this.state

        return (
            <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>
            7</td>
            <td>8</td>


            <td>
                <a className="text-primary" >
                    <i className="fa fa-edit"></i>
                </a>
                <a className="text-danger" >
                    <i className="fa fa-trash" ></i>
                </a>
            </td>

        </tr>
        )
    }
}

export default ProductData