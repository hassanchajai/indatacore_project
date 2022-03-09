import React from 'react'

const InputField = ({children,name,type,placeholder,value,onChange,error}) => {
    return (
        <div className="mb-6">
            <label for={name}className="block mb-2 text-sm text-gray-600 ">{children}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 d "
            value={value} onChange={onChange}/>
           {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
    )
}

export default InputField