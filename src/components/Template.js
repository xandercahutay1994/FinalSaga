import React from "react"

const Template = ({details}) => {
    const { id, email, body } = details
    return(
        <div key={ id }>
            <h5 className="text-primary">{ email }</h5>
            <p>{ body }</p> 
        </div> 
    ) 
}

export default Template;