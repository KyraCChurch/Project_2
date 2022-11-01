const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
    render() {
        const { products } = this.propsreturn (
            <Default title = 'Grocery List'>
                <ul>
                    {
                        products.map((product) => {
                            const { product, isleNum, inBasket } = product
                                return (
                                    <li key={product._id}>
                                        <a href={`/products/${product._id}`}>
                                            {product}
                                        </a> is in isle (isleNum)

                                        <br />
                                        {
                                            inBasket
                                                ? 'It\'s in the basket'
                                                : 'It\'s not in the basket'
                                        }
                                        <br />
                                        <form method='POST' action={`/products/${product._id}?_method=DELETE`}>
                                            <input type='submit' value={`Delete ${isleNum} ${product}`} />
                                        </form>
                                    </li>
                                )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index