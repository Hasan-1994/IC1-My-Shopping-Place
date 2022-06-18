import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Basket(props) {
    const { cardItem} = props;
    const itemsPrice = cardItem.reduce((a, c) => a + c.price * c.qty, 0);
    const shppingPrice = itemsPrice >= 401 ? 0 : 50;
    const totalPrice = itemsPrice + shppingPrice;
    return (
        <aside className="block col-1">
            <h2 className="text">Cart Items</h2>
            <div>{cardItem.length === 0 && <div>Cart is Empty</div>}</div>
            {cardItem.map((item) => (
                <Box sx={{ height: 40, width: '100%' }}>
                    <div key={item.id} className="row">
                        <div>{item.name}</div>
                        <div className="col-2 text-right">
                            {item.qty} x {item.price.toFixed(2)}€
                        </div>
                    </div>
                </Box>
            ))}
            {cardItem.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Item Price</div>
                        <div className="col-1 text-right">{itemsPrice.toFixed(2)}€</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">{shppingPrice.toFixed(2)}€</div>
                    </div>
                    <div className="row">
                        <div className="col-2"><strong>Total Price</strong></div>
                        <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)}€</strong></div>
                    </div>
                </>
            )}
            <hr />
            {cardItem.length === 0 ? <div> <Button variant="contained" color="success" disabled>Buy Items</Button></div> : <div><Button variant="contained" color="success">Buy Items</Button></div>}
        </aside>
    );
}
export default Basket;