import React from 'react';
import { Navbar } from './components/NavBar';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Test</h1>
            </div>
        </>
    );
};

export default App;
