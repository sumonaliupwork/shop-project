import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = ({ product, handleAddToCart }) => {
    return (
        <div class="card card-compact mx-w-96 bg-base-100 shadow-xl">
            <figure><img src={product.img} alt="Shoes" /></figure>
            <div className="card-body ">
                <div className='px-4'>
                    <h2 class="text-[16px] font-bold">{product.name}</h2>
                    <h3 className='my-2'><span className=' font-bold text-indigo-700 text-xl'>Price:</span> <span className='text-inherit font-bold'>$</span ><span className='text-inherit font-bold text-xl'>{product.price}</span></h3>
                    <p>Manufucturer: {product.seller}</p>
                    <p>Ratings: <span className='text-stone-500 font-bold'>{product.ratings} </span><span className='text-green-600 font-bold'>Start</span></p>
                </div>
                <div className="flex justify-center mt-4 ">
                    <button onClick={() => handleAddToCart(product)} class="btn btn-wide btn-active btn-accent text-white w-100%">Add to Cart <span className='pl-2'> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
                </div>
            </div>
        </div>
    );
};

export default Products;