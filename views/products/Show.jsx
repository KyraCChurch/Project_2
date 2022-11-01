const React = require('react')

class Show extends React.Component {
    render () {
        const {product, isleNum, inBasket, _id } = this.props.product
        const prodName = product[0].toUpperCase() + product.substring(1)
        return( 
            <Default title={`${capName} Show Page`} fruit={this.props.product}>
                <p>{prodName} is isle {isleNum} and {inBasket ? 'it\'s in the basket' : 'it\'s not in the basket'}</p>
            </Default>
        )    
    }
}

module.exprots = Show