import axios from 'axios';
import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Furniture extends React.Component {
    state = {
        getAllFurnitureDetails:[],
        furniture:{},
        
    };
    componentDidMount(){
        axios
            .get("http://localhost:8080/getAllFurnitureDetails")
            .then((response)=>{
                console.log(response);
                this.setState({getAllFurnitureDetails:response.data});
            })

            .catch((error)=> console.log(error));
    }
    render() { 
        return (
        <div className="container">
            <Link to="/getAllFurnitureDetails/add" className="btn btn-primary btn-large mb-1 float-end">
                Add
            </Link>
            <table className="table w-75 text-center mt-4">
                <thead>
                    <tr>
                        <th>Furniture Id</th>
                        <th>Furniture Name</th>
                        <th>Furniture Color</th>
                        <th>Furniture Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                   { this.state.getAllFurnitureDetails.map(furniture =>(<tr>
                        <td>{furniture.furnitureId}</td>
                        <td>{furniture.furnitureName}</td>
                        <td>{furniture.furnitureColor}</td>
                        <td>{furniture.furnitureModel}</td>
                        <td>{furniture.price}</td>
                    </tr>))}
                    
                </tbody>
            </table>
        </div>
        );
    }
}
 
export default Furniture;