/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default ({color,description,count,icon}) => {
    return (
        <div className="flex-1 m-5 relative rounded bg-white shadow">
                    <div className={`bg-${color} pl-10 pr-10 pt-8 pb-8 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow`}>
                        <i className={`${icon} inline-block w-5`}></i>
                    </div>
                    <div className="float-right top-0 right-0 m-3">
                        <div className="text-right text-sm">{description}</div>
                        <div className="text-right text-3xl">{count}</div>
                    </div>
                </div>
    )
}
