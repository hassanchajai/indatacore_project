import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { Card, ProductsToolbar, TableProduct } from '../../../components'
import { URL } from '../../../helpers'
import { getAllProducts } from './productsReducer'

const Products = ({ products, getAll }) => {
    const [name,setName]=useState("")
    const getAllProducts = () => {
        axios.get(URL + '/products', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data.Products);
            getAll(res.data.Products)
        }
        ).catch(err => {
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            getAll([])
        })
    }
    const handleOnUpdate = ( data) => {
        const  {_id,...rest}=data
        axios.put(URL + '/products/' + _id, rest, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {    
            Swal.fire({
                title: 'Success',
                text: 'Product updated successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.reload()
            })
        })
    }
    useEffect(() => {
        getAllProducts()
    }, [])
    // debugging
    useEffect(() => {
        console.log(products);
    }, [products])
    return (
        <>
            <ProductsToolbar name={name} setName={name=>setName(name)} />
            <Card title={"All Products"} subtitle={(products.data && products.data.length || 0) + " product availible"}>
                <TableProduct data={name ==="" ? products.data : products.data.filter(item=>item.name.toLowerCase().includes(name.toLowerCase()))} handle={handleOnUpdate}/>
            </Card>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapdispatchtoprops = (dispatch) => ({
    getAll: _ => dispatch(getAllProducts(_))
})
export default connect(mapStateToProps, mapdispatchtoprops)(Products)