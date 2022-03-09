import Swal from "sweetalert2";
import { Product } from "../Product"

/* eslint-disable import/no-anonymous-default-export */
export const Table = ({data,handle}) => {
    const onClickDelete = (Product) => {
        Swal.fire({
            title: `Do you want to delete this Product  ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Ok",
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
             
                Swal.fire("Product Deleted Successfuly!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Product has not deleted", "", "info");
            }
        });
    };
    return (<>
        <table class="items-center bg-transparent w-full border-collapse overflow-y-auto">
            <thead>
                <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Price
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                       Tva
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Actions
                    </th>
                 
                </tr>
            </thead>

            <tbody className="">
                {data.map((item, index) => (
                       <tr>
                       <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                          {item.name}
                       </th>
                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                           {item.price}$
                       </td>
                       <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {item.tva}%
                       </td> 
                      
                       <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                           <Product data={item} isView isUpdate handle={() => { console.log("test") }}>
                               <button className="bg-transparent">
                                   <i class="fas fa-eye text-blueGray-400"></i>
                               </button>
                           </Product>
   
                           <Product data={item} handle={handle}>
                               <button className="bg-transparent ml-4">
                                   <i class="fas fa-pen text-blueGray-400"></i>
                               </button>
                           </Product>
                           <button className="bg-transparent ml-4" onClick={onClickDelete}>
                               <i class="fas fa-trash text-blueGray-400"></i>
                           </button>
                       </td>
                   </tr>
                ))}
             
            </tbody>
        </table></>)
}
