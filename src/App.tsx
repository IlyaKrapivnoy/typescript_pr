import React, { useState } from 'react';
import { Navbar } from './components/NavBar';
import { TodoForm } from './TodoForm';

const App: React.FC = () => {
    const [todos, setTodos] = useState([]);

    const addHandler = (title: string) => {
        console.log('Add new todo');
    };

    return (
        <>
            <Navbar />
            <div className='container'>
                <TodoForm onAdd={addHandler} />
            </div>
        </>
    );
};

export default App;
