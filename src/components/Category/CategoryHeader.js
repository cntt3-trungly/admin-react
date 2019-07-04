import React, { Component } from 'react';

class CategoryHeader extends Component {
    render() {
        return (
            
                <div className="app-title">
                    <div>
                        <h1><i className="fa fa-th-list" /> Data Table</h1>
                        <p>Table to display analytical data effectively</p>
                    </div>
                    <ul className="app-breadcrumb breadcrumb side">
                        <li className="breadcrumb-item"><i className="fa fa-home fa-lg" /></li>
                        <li className="breadcrumb-item">Tables</li>
                        <li className="breadcrumb-item active"><a href="#">Data Table</a></li>
                    </ul>
                </div>
                
            
          
        );
}
}

export default CategoryHeader;