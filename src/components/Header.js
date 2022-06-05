import React from 'react';
export default function Header(props){
    const {countCardItems} = props;
    return(
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>My Shopping Place</h1>
                </a>
            </div>
            <div>
                <a href="#/introduction">Introduction</a> {''}
                <a href="#/basket">
                    Basket{' '}
                    {countCardItems ?(
                        <button className='badge'>{countCardItems}</button>
                    ):(
                        ' '
                    )}
                    </a>
            </div>
        </header>
    )
}