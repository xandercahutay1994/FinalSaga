import React, {Component} from "react";

class Sample extends React.PureComponent{

    constructor(){
        super()
        this.state = {
            count : 1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
        },2000)
    }



    render(){

        console.log('render')
        return(
            <h1>Sample</h1>
        )
    }
}
export default Sample