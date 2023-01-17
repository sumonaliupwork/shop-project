import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div class="card w-[250px] bg-neutral text-neutral-content">
            <div className="card-body items-center text-left">
                <h2 class="card-title text-white text-center">Order Summary</h2>
                <div className='text-left'>
                    <p className='text-white font-bold '>Price: $</p>
                    <p className='text-white font-bold '>Selected Items: {cart.length}</p>
                </div>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;