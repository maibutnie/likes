import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart, deleteFromApp } from "../redux/action";

// import FavoriteIcon from '@mui/icons-material/Favorite';
// import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
// import DeleteIcon from '@mui/icons-material/Delete';


const Person = (props) => {

    // const dispatch = useDispatch();

    // let [button, setButton] = useState(false);

    // function handleAddToCart(id) {
    //     dispatch(addToCart(id));
    //     setButton(true);
    // }

    // function handleRemoveFromCart(id) {
    //     dispatch(removeFromCart(id));
    //     setButton(false);
    // }

    // function handleDeleteFromApp(id) {
    //     dispatch(deleteFromApp(id));
    // }


    return (
        <figure className="bg-zinc-900 rounded-xl p-8 w-3/4 hover:opacity-75">
            <img src={props.product.img_url} alt='{props.product.name}' className="rounded-xl"/>
            <div className="text-center card-body">
                <h2 className='mt-4 text-lg font-medium text-textcolor'>{props.product.name}</h2>
            </div>
            {/* <div className="mt-2">
                        <div className="flex flex-row justify-between">
                            <div>{(!button) ? (
                                <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-blue-700 hover:bg-cyan-800 text-white" onClick={(e) => { handleAddToCart(props.product.id) }}><FavoriteIcon /></button>
                            ) : (
                                <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-pink-600 hover:bg-rose-900 text-white" onClick={(e) => { handleRemoveFromCart(props.product.id) }}><HeartBrokenIcon /></button>
                            )
                            }
                            </div>
                            <div>
                                <button className="flex py-2 px-5 items-center rounded-full text-sm font-bold bg-extracolor hover:bg-cyan-800 text-white" onClick={(e) => { handleDeleteFromApp(props.product.id) }}><DeleteIcon /></button>
                            </div>
                        </div>
                    </div> */}
        </figure>
    )
};

export default Person;
