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
        case "UPDATE_TODO":
            return {
                 ...state,
                 todos:state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
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
                    id:1,
                    todo:"React ile bir app yap",
                    finish: true
                },
                {
                id : 2,
                todo : "React öğrenmeye devam et",
                finish : false
            },
                {
                id : 3,
                todo : "Firebase ile react bağlantısı yapmaya çalış",
                finish : false
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