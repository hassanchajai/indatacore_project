import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'
import { URL } from '../../../helpers'
import { Product } from '../Product'

export const Toolbar = ({name,setName}) => {
  const handleCreateProduct=prod=>{
    axios.post(URL+'/products',prod,{
      headers:{
        "Authorization":`Bearer ${localStorage.getItem('token')}`
      }
    }).then(res=>{
      Swal.fire({
        title:"Success",
        text:"Product created successfully",
        icon:"success",
        confirmButtonText:"Ok"
      }).then(()=>{
        window.location.reload()
      })
    }).catch(err=>{
      Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    })
  }
  return (
    <>

      <Product data={{name:"",price:0,tva:20}} handle={handleCreateProduct}>
        <button className='block ml-auto mb-3 bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
          <i className='fas fa-plus '></i>
        </button>
      </Product>

      <div className='mb-2 bg-white shadow-lg p-3 rounded flex items-center'>
        <div class="border-2 py-2 px-3 flex justify-between rounde-md rounded-md w-3/4">
          <input class="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="Search Product..." onChange={e=>setName(e.target.value)} value={name} />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  )
}
