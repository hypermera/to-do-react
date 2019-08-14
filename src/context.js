import React, { Component } from 'react'



const TodoContext = React.createContext()

//Reducer (state,action) dispatch çağırıyor
const reducer =(state,action) => {

    switch(action.type){
        case "DELETE_TODO":
            return {
                ...state,
                todos:state.todos.filter(todo => action.payload !== todo.id)
            }
        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            return state
    }
}


//provider sağlayıcı
export class TodoProvider extends Component {
    state = {
            todos : [
                {
                id : 1,
                todo : "REACT"
            },
                {
                id : 2,
                todo : "FİREBASE"
            }
        ],
        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
    }
    render() {
        return (
            <TodoContext.Provider value={this.state}>
            {//app.js
            }
            {this.props.children}
            </TodoContext.Provider>
        )
    }
}
//consumer tüketici

const TodoConsumer = TodoContext.Consumer;

export default TodoConsumer;