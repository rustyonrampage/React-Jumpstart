import React from 'react'

const DATA = [
    { name: 'Bread', price: 20 },
    { name: 'Tea', price: 10 },
    { name: 'Egg', price: 5 },
]

// This is how we create class based components in react; they offer full life-cycle methods and state management
class Cafe extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: DATA, date: new Date(), uselessCounter: 0 } // initializing our state object
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillMount() {
        clearInterval()
    }

    handleClick = () => {
        this.setState({ uselessCounter: this.state.uselessCounter + 1 })
    }

    renderBody = () => {
        return (
            <div>
                <Greetings dateTime={this.state.date.toTimeString()} message="Hello there" details="Subscribe to react dev station." />
                <ColoredBox color="red"> <p>You can send also stuff like HTML tags- {this.state.uselessCounter}</p> </ColoredBox>
                <button onClick={this.handleClick}>Useless Counter</button>
                <h3>Menu</h3>
                <ul>
                    {this.state.products.map((item, index) => (
                        <li key={index}>{item.name} - {item.price} </li>)
                    )}
                </ul>
            </div>
        )
    }

    addToMenu = (newProduct) => {
        this.setState({
            products: [...this.state.products, newProduct]
        })
    }

    render() {
        return (
            <div>
                {this.renderBody()}
                <ProductForm handleSubmit={this.addToMenu} />
            </div>
        )
    }
}

class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.addToMenu(this.state.name, this.state.price)
        this.props.handleSubmit(this.state)
        this.setState({ name: '', price: 0 })
    }
    render() {
        return (
            <form>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <input type="number" name="price" value={this.state.price} onChange={this.handleChange} required />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

// function based component; ususally built for simple functionalities
function Greetings(props) {
    return (
        <div>
            <h1>{props.message} - {props.dateTime}</h1>
            <p>{props.details}</p>
        </div>
    )
}


function ColoredBox(props) {
    let style = { color: props.color }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}


export default Cafe