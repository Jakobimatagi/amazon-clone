import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

function CheckoutProduct({id, title, price, description, rating, category, image, hasPrime}) {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            rating,
            category,
            image,
            hasPrime
        }

        //push items to redux store
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        // remove item from redux
        dispatch(removeFromBasket({ id }))
    }


    return (
        <div className="grid grid-cols-5 ">
            <Image src={image} height={200} width={200} objectFit="contain" />
            
            {/* middle section */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency 
                    quantity={price}
                    currency="USD"
                />

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="amazon prime" />
                        <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
                    </div>
                )}
            </div>
            
            {/* add and remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add To Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove From Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
