import React from 'react'
import Update from './withCounter'
class Testing extends React.Component{
    render(){
        return(
            <div>
                <p> counter: {this.props.count}</p>
            <button onClick={this.props.inc}> Increament </button>
            </div>
        )
    }
}
export default Update(Testing);