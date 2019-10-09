import React from 'react';

export default function PhotoInfo( {title, explanation} ) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{explanation}</p>
        </div>
    )
}