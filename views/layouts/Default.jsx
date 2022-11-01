const React = require('react')

class Default extends React.Component {
    render () {
        const { product, title } = this.propsreturn (
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css' />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/products'>Go to grocery list</a><br />
                        <a href='/products/new'>Create new lit item</a><br />
                        {product ? <a href={`/products/${product._id}/edit`}> {product.name} Edit item </a> : ''}<br />
                        {product ? <a href={`/products/${product._id}`}>{product.name} Item Page</a> : ''}<br />
                    </nav>
                    <h1>
                        {product}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default