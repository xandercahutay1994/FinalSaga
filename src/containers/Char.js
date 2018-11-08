import React from "react"

class Char extends React.PureComponent {

    constructor(props){
        super()
        this.state = {
            masahe: props.isFetching
        }
    }

    render(){
        console.log("Render Char")
        return(
            <div>
                <h1>Char</h1> {this.state.masahe}
            </div>
        )
    }
}

export default Char;