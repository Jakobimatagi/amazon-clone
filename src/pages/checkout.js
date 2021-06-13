import React from 'react'
import Header from '../components/Header'
import CheckoutProduct from '../components/CheckoutProduct'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'


function Checkout() {

    const items = useSelector(selectItems)

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                    {/* left side */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                    />

                </div>

                    {/* rigt side */}
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b pb-4">{items.length === 0 ? "Your Amazon Basket Is Empty" : "Your Amazon Basket"}</h1>

                    {items.map((item, i) => (
                      <CheckoutProduct
                        key={i}
                        id={item.id}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                      />
                    ))}

                </div>
            </main>
        </div>
    )
}

export default Checkout
