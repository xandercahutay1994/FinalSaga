import Template from "./Template";
import PropTypes from "prop-types";

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

CommentLists.propTypes = {
    commentLists: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired
}

export default CommentLists;

