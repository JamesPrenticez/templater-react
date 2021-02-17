import React from 'react'
import { connect } from 'react-redux'

class ProductListItem extends React.Component {
    render() {
        console.log(this.props)
        const { product } = this.props

        return (
            <>
                <img style={{ backgroundImage: `url(${product.image})` }}></img>
                <h4 className="recipe_name">{product.name}</h4>
            </>
        )
    }
}

export default connect()(ProductListItem)