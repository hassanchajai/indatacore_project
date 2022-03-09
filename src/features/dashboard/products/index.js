import React from 'react'
import PropTypes from 'prop-types'
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

Products.propTypes = {

}

export default Products