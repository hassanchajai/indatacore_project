import React from 'react'

const Card = ({ title, subtitle,children }) => {
    return (
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-full">
            <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                    <div class="relative w-full max-w-full flex-grow flex-1">
                        {subtitle && (<h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                            {subtitle}
                        </h6>)}
                        <h2 class="text-blueGray-700 text-xl font-semibold">
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="flex-auto">

                <div class="relative">
                    {children}
                    {/* <canvas id="bar-chart" width="463" height="350" style="display: block; width: 463px; height: 350px;" class="chartjs-render-monitor"></canvas> */}
                </div>
            </div>
        </div>
    )
}

export default Card