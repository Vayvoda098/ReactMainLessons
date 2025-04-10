import React, { Component } from 'react'


export default class productList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.info.title}- {this.props.currentCatergory}</h1>
                <p>Ve {this.props.info.helloWorld}</p>
            </div>

        )
    }
}
