import React from 'react';
import Cards from './Card';
import Box from '@mui/material/Box';

export default function Main(props) {
    const { products, onAdd, onRemove } = props;
    return (
        <main className='block col-2'>
            <h2 className="text">Products</h2>
            scrollbar
            <div className='row'>
            <Box>
                {products.map((product) => (
                    <Cards key={product.id} product={product} onRemove={onRemove} onAdd={onAdd} />
                ))}
                </Box>
            </div>
        </main>
    )
}