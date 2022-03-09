import { Product } from "../Product"

/* eslint-disable import/no-anonymous-default-export */
export const Table = () => {
    return (<>
        <table class="items-center bg-transparent w-full border-collapse overflow-y-auto">
            <thead>
                <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Page name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Visitors
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Unique users
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Bounce rate
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Actions
                    </th>
                </tr>
            </thead>

            <tbody className="">
                <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        /argon/
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        4,569
                    </td>
                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        340
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                        46,53%
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                        <Product data={{ name: "test" }} isView isUpdate handle={() => { console.log("test") }}>
                            <button className="bg-transparent">
                                <i class="fas fa-eye text-blueGray-400"></i>
                            </button>
                        </Product>

                        <Product >

                            <button className="bg-transparent ml-4">
                                <i class="fas fa-pen text-blueGray-400"></i>
                            </button>
                        </Product>
                        <button className="bg-transparent ml-4">
                            <i class="fas fa-trash text-blueGray-400"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table></>)
}