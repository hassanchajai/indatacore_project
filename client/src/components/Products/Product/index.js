/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";

export const Product = ({
    children,
    data,
    isUpdate,
    handle,
    errors,
    success,
    setErrors,
    isView
}) => {
    const [product, setproduct] = useState(data);

    const handleonChange = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault()
        handle(product)
    }
    return (
        <Popup trigger={children} modal={true} position="center center">
            {(close) => (
                <div className="p-3">
                    <div className="flex justify-between mb-2">
                        <h2 className="font-bold">
                            {!isView ? (isUpdate ? "Update" : "Add") : "Detail"} Product
                        </h2>
                        <a
                            className="close text-lg cursor-pointer"
                            onClick={close}
                        >
                            &times;
                        </a>
                    </div>
                    <hr className="mb-4" />
                    {!isView ? (
                        <form onSubmit={handleOnSubmit} >
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    name="name"
                                    id="floating_company"
                                    className="block py-3.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    type="text"
                                    required
                                    value={product.name}
                                    onChange={handleonChange}
                                // size="44"
                                />
                                <label
                                    for="floating_email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    name="price"
                                    id="floating_company"
                                    className="block py-3.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    type="number"
                                    required
                                    value={product.price}
                                    onChange={handleonChange}
                                // value={value}
                                // onChange={(e) => setValue(e.target.value)}
                                // size="44"
                                />
                                <label
                                    for="floating_email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Price
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <select
                                    name="tva"
                                    id="floating_company"
                                    className="block py-3.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    value={product.tva}
                                    onChange={handleonChange}
                                // value={value}
                                // onChange={(e) => setValue(e.target.value)}
                                // size="44"
                                >
                                    <option disabled value="">Select tva</option>
                                    <option value="20">20%</option>
                                    <option value="10">10%</option>
                                    <option value="5">5%</option>
                                </select>
                                <label
                                    for="floating_email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Tva
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            //    disabled={notValid > 0}
                            >
                                {"Submit"}
                            </button>
                        </form>
                    )
                        : <>
                            <div className="flex justify-between flex-wrap	">
                                <div className="w-1/2 mb-2">
                                    <h6 className="text-sm font-bold">
                                        Name
                                    </h6>
                                    <h2>
                                        {product.name}
                                    </h2>
                                    <hr />

                                </div>
                                <div className="w-1/2 mb-2">
                                    <h6 className="text-sm font-bold">
                                        Price
                                    </h6>
                                    <h2>
                                    {product.price}
                                        £
                                    </h2>
                                    <hr />

                                </div>
                                <div className="w-1/2 mb-2">
                                    <h6 className="text-sm font-bold">
                                        Tva
                                    </h6>
                                    <h2>
                                    {product.tva}
                                        %
                                    </h2>
                                    <hr />

                                </div>

                            </div>




                        </>}
                </div>
            )}
        </Popup>
    );
};
