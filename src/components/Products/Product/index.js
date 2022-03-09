/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./Product.css";
export const Product = ({
    children,
    data,
    isUpdate,
    handle,
    errors,
    success,
    setErrors,
}) => {
    const [product, setproduct] = useState(data);
    const [isClicked, setIsClicked] = useState(false);
    const handleonChange = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        if (isClicked) {
            handle(product);
            setIsClicked(false);
        }
    }, [isClicked]);
    return (
        <Popup trigger={children} modal nested onClose={() => setErrors({})}>
            {(close) => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header">
                        {" "}
                        {isUpdate ? "Update" : "Add"} Product{" "}
                    </div>
                    <div className="content">
                        <div className="p-3">
                            <form>
                                <div className="flex flex-col my-2">
                                    <div className="-mx-3 md:flex mb-6">
                                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                                for="grid-first-name"
                                            >
                                                Name
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                                id="grid-first-name"
                                                type="text"
                                                name="name"
                                                placeholder=" "
                                                required
                                                value={product.name}
                                                onChange={handleonChange}
                                            />
                                            <span className="text-red-400 text-xs">
                                                {errors?.name}
                                            </span>
                                        </div>
                                        <div className="md:w-1/2 px-3">
                                            <label
                                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                                for="grid-last-name"
                                            >
                                                Gender
                                            </label>

                                            <select
                                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                                name="gender"
                                                value={product.gender}
                                                onChange={handleonChange}
                                            >
                                                <option value=""></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                                <option>Prefer Not Say</option>
                                            </select>
                                            <span className="text-red-400 text-xs">
                                                {errors?.gender}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto float-right px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {
                                        setIsClicked(true);
                                        if (success) {
                                            close();
                                        }
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
};
