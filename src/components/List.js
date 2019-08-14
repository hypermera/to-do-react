import React, { Component } from 'react'
import TodoConsumer from '../context'
export default class List extends Component {
    DeleteTodo = (dispatch,e) => {
        const {id} = this.props
        dispatch({type :'DELETE_TODO' ,payload : id})
    }
    render() {
  
        return(
            <TodoConsumer>
                {
                    value =>{
                        const{dispatch} = value;
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    {this.props.job}
                                </div>
                                
                                <div>
                                    <i 
                                        className="fas fa-check fa-2x"  
                                        onClick= {this.DeleteTodo.bind(this,dispatch)}
                                        style ={{"cursor" : "pointer"}}>
                                    </i>
                                    <i 
                                        className="fas fa-times fa-2x ml-3" 
                                        onClick= {this.DeleteTodo.bind(this,dispatch)} 
                                        style ={{"cursor" : "pointer"}}>   
                                    </i> 
                                </div>
                               
                            </li>
                            )
                    }
                }
            </TodoConsumer>
            )
            


    }
}
