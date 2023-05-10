import React from 'react';
import "./SectionTitle.css";

const SectionTitle = ({children}) => {
    return (
        <div>
            <h1 className='section-title'>{children}</h1>
            <div className='sec-hr-line'></div>
        </div>
    );
};

export default SectionTitle;