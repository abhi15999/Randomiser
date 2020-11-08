import React, { Component } from 'react'
import '../components/styles.css'

export default class Buttons extends Component {
    constructor(props){
        super(props);
        this.state={
            isPara : false,
            isQuote : false
        }
    }

    paraListener = (e) =>{
        e.preventDefault();
        this.setState({
            isPara:true,
            isQuote:false
        })
    }

    quoteListener = (e) =>{
        e.preventDefault();
        this.setState({
            isPara:false,
            isQuote:true
        })
    }



    
    render() {
       
        return (
            <div>
                <section>
                    <div>
                    <button onClick={this.paraListener}>Random Paragraph</button>
                    </div>
                </section>
                <section>
                    <div>
                    <button onClick={this.quoteListener}>Random Quote</button>
                </div>
                </section>
            </div>
        )
    }
}
