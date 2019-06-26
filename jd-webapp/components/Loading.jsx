import React, {Component} from "react"
import "./load.css"



export default class Loading extends Component{


    render() {
        return <div className="loading">
            <div className="dot white"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>

    }
}


