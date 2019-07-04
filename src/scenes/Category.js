import React, { Component } from 'react';
import CategoryTable from '../components/Category/CategoryTable';
import CategoryHeader from '../components/Category/CategoryHeader';


class Category extends Component {
    render() {
        return (

            <main className="app-content">
                <CategoryHeader/>
                <CategoryTable/>
               
            </main>
        );
    }
}

export default Category;