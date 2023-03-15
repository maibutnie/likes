import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteFromApp } from "../redux/action";

import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import DeleteIcon from '@mui/icons-material/Delete';


const Product = (props) => {

    const dispatch = useDispatch();

    let [button, setButton] = useState(false);

    function handleAddToCart(id) {
        dispatch(addToCart(id));
        setButton(true);
    }

    function handleRemoveFromCart(id) {
        dispatch(removeFromCart(id));
        setButton(false);
    }

    function handleDeleteFromApp(id) {
        dispatch(deleteFromApp(id));
    }


    return (

        <div className="card">
            <img src={props.product.img_url} alt='{props.product.name}' />
            <div className="text-center card-body">
                <h2 className='text-sm md:text-lg font-bold py-2'>{props.product.name}</h2>
                <span className='bg-gray-200 rounded-full text-sm py-1 px-4'>{props.product.species}</span>
            </div>
            <div>
                <p>{props.product.gender}<br></br>{props.product.status}</p>
                <div className="flex flex-row justify-between">
                    <div>{(!button) ? (
                        <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-blue-700 hover:bg-cyan-800 text-white" onClick={(e) => { handleAddToCart(props.product.id) }}><FavoriteIcon /></button>
                    ) : (
                        <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-pink-600 hover:bg-rose-900 text-white" onClick={(e) => { handleRemoveFromCart(props.product.id) }}><HeartBrokenIcon /></button>
                    )
                    }
                    </div>
                    <div>
                        <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-blue-700 hover:bg-cyan-800 text-white" onClick={(e) => { handleDeleteFromApp(props.product.id) }}><DeleteIcon /></button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Product;
