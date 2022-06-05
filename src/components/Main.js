import React from 'react';
import Product from './Product';
import Cards from './Card';

export default function Main(props) {
    const { products, onAdd, onRemove } = props;
    return (
        <main className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((product) => (
                    <Cards key={product.id} product={product} onRemove={onRemove} onAdd={onAdd} />
                ))}
            </div>
        </main>
    )
}