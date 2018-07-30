import React from 'react';
import TodoListItem from './TodoListItem';

export const TodoList = (props) => (
    <div>
        {
            props.todos.length === 0 ? (
                <p>No Todos</p>
            ) : (
                    props.todos.map((todo) => {
                        return <TodoListItem key={todo.id} {...todo} />;
                    })
                )
        }
    </div>
);

export default TodoList;