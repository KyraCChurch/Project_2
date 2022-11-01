const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render () {
        const { product, _id, isleNum, inBasket} = this.props.product
        return (
            <Default title = {`${product} Edit Page`} product={this.props.product}>
                <form method='POST' action={`/products/${_id}?_method=PUT`}>
                Product: <input type='text' name='product' defaultValue={product} /><br />
                Isle Number: <input type='text' name='isleNum' defaultValue={isleNum} /><br />
                Is In The Basket: <input type='checkbox' name='InBasket' defaultChecked={inBasket} /> <br />
                <input type='submit' value='Edit List Item' />
               </form>
            </Default>
        )
    }
}

module.exports = Edit