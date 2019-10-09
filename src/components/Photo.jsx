import React from 'react';

export default function Photo( {image} ) {
return (
    <div>
        <img src={image} alt='NASA Photo of the Day' />
    </div>
    )
}