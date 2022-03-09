import React from 'react'
import { Card, ProductsToolbar, TableProduct } from '../../../components'

const Products = ({ }) => {
    return (
        <>
            <ProductsToolbar />
            <Card title={"All Products"} subtitle={"33 product availible"}>
                <TableProduct />
            </Card>
        </>
    )
}
export default Products