import React, { Component } from 'react'
import TodoConsumer from '../context'
import List from './List'
export default class ListCover extends Component {
    render() {
        return (
            <TodoConsumer>
                {
                    value => {
                        const {todos} = value;
                        
                            return (
                                <div className="col-12">
                                    <hr/>
                                    <ul className="list-group">
                                    {todos.map(todo => {
                                    return ( 
                                        <List 
                                        key = {todo.id} 
                                        job = {todo.todo}
                                        id = {todo.id}
                                        finish = {todo.finish}
                                        />
                                        )}
                                    )}
                                    </ul>
                                </div>
                                    )
                    }
                }
            </TodoConsumer>
        )
    }
}
