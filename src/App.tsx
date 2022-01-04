import React from 'react';
import { Navbar } from './components/NavBar';
import { TodoForm } from './TodoForm';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <TodoForm />
            </div>
        </>
    );
};

export default App;
