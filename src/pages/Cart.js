import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const characters = useSelector((state) => state.characters);

    const cartCharacters = characters.filter((char) => cart.includes(char.id));

    return (

        <>
            <div className="container mx-auto">
                <h1 className="my-12 font-bold">Liked characters</h1>
                <ul className='grid grid-cols-2 my-8 gap-24 md:grid-cols-5'>
                     {cartCharacters.map((char) => <Product key={char.id} product={char} />)}
                </ul>
                {/* <hr className="my-6" />
                <div className=" w-full flex justify-between text-right mt-6">
                    <button className="bg-red-500 px-2 py-2 md:px-4 md:py-2 rounded-full leading-none text-white hover:bg-red-500 text-xs md:text-base" onClick={() => dispacth(removeAll())}>Delete All</button>
                </div> */}
            </div>

        </>

    )
};

export default Cart;
