import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacters, addToCart } from "../redux/action";
import Product from "./Product";

import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


const Products = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const characters = useSelector((state) => state.characters);

    useEffect(() => {
        dispatch(loadCharacters());
    }, []);

    const [button, SetButton] = useState(false);

    function changeState() {
        if (button == false) {
            SetButton(true);
        }
        else {
            SetButton(false);
        }
    };

    const activeCharacters = characters.filter((char) => !char.deleted); 
    const cartCharacters = characters.filter((char) => cart.includes(char.id));
    let filteredCharacters = cartCharacters;

    if (!button) {
        filteredCharacters = activeCharacters;
      }

    return (
        
        <div className='container mx-auto pb-24 p-5 md:p-0'>
            <h1 className='text-lg font-bold my-8'>Characters</h1>
            <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-blue-700 text-white" onClick={() => {changeState()}}>LIkE</button>
            {/* {(!button) ? (
                filteredCharacters = cartCharacters
            ) : (
                filteredCharacters = activeCharacters
            )} */}
            <div className='grid grid-cols-2 my-8 gap-24 md:grid-cols-5'>
                {filteredCharacters.map((char) => <Product key={char.id} product={char} />)}
            </div>
        </div>

    )
};

export default Products;
