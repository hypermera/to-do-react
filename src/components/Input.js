import React, { Component } from 'react'
import TodoConsumer from '../context'
var uniqid = require('uniqid');

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            id :"",
            todo : "",
            finish:false
        }
        
    }
    inputChange = (e) => {
        const value = e.target.value
        this.setState({
            todo : value
        })
       
    }
    addTodo = (dispatch,e) => {
        e.preventDefault();
        
        const {todo} = this.state

        const newTODO = {
            id:uniqid(),
            todo:todo,
            finish:false
        }
        console.log(newTODO)
        dispatch({type: "ADD_TODO",payload:newTODO})
    }
    render() {
        return ( 
            <TodoConsumer>
                {
                    value => {
                        const{dispatch} = value
                        return (
                            
                            <div className="col-12 mt-5">
                                <form onSubmit = {this.addTodo.bind(this,dispatch)}>
                                    <div className="input-group mb-3">
                                            <input  
                                            className="form-control" 
                                            placeholder="Add TO-DO" 
                                            aria-label="Add TO-DO" 
                                            aria-describedby="button-submit"
                                            name="todo" 
                                            type="text"
                                            value= {this.state.todo}
                                            onChange = {this.inputChange}     
                                            />
                                        <div className="input-group-append">
                                            <input  
                                            className="btn btn-dark" 
                                            name="submit"
                                            type="submit"  
                                            id="button-submit"
                                                                    
                                            />
                                        </div> 
                                        
                                    </div>
                                </form>
                                
                            </div>
                        )
                                    }
                                }
                            </TodoConsumer>
                        )










       
    }
}
