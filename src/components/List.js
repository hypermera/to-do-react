import React, { Component } from 'react'
import TodoConsumer from '../context'
export default class List extends Component {

  
    DeleteTodo = (dispatch,e) => {
        const {id} = this.props
        dispatch({type :'DELETE_TODO' ,payload : id})
    }
    updateTodo = (dispatch,e) => {
        

        const updateTodo = {
            id:this.props.id,
            todo:this.props.job,
            finish:!this.props.finish 
        }
        dispatch({type:'UPDATE_TODO',payload : updateTodo})
     
    }
    
    render() {
  
        return(
            <TodoConsumer>
                {
                    value =>{
                        const{dispatch} = value;
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                
                                {
                                this.props.finish ? 
                                <div style={{"textDecoration" : "line-through"}}>
                                    {this.props.job}
                                </div>
                                :
                                <div>
                                     {this.props.job}
                                </div>
                                 }

                                <div>
                                    
                                    <i 
                                        className="fas fa-check fa-2x"  
                                        onClick= {this.updateTodo.bind(this,dispatch)}
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
