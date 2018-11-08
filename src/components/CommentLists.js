import Template from "./Template";

const CommentLists = props => {
    let filterMatch = false;
    let specComment = {};

    const comment = props.commentLists.map(lists => {
        if(props.email != lists.email)
        {
            return Template({details: lists })
        }else{
            filterMatch = true
            specComment = {...lists} 
        }
    })

    if(!filterMatch)
        return comment
    else
        return Template({details: specComment})
}

export default CommentLists;