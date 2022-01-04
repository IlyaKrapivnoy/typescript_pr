import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница Информации</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                officia blanditiis nam totam ipsum ex odit sequi dolorem
                corrupti.
            </p>
            <button className='btn' onClick={() => history.push('/')}>
                К списку дел
            </button>
        </>
    );
};
