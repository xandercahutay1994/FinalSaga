import React from "react"

const BlogLists = props => {

    return props.blogLists.map(lists => 
        <div key={ lists.id }>
            { lists.id }
            <button className="btn btn-danger btn-sm pull-right" onClick={()=>props.delete(lists.id)}>X</button>
            <a href="#" onClick={()=>props.details(lists.id)}><h5 className="text-primary">{ lists.title }</h5></a>
            <p>{ lists.body }</p>
        </div>  
    )
}

export default BlogLists;