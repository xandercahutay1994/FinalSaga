import CommentListsFilterTemplate from "./CommentListsFilterTemplate";
import PropTypes from "prop-types";

const CommentLists = props => {
    const { commentLists, email } = props
    
    return (email ? commentLists.filter(lists => lists.email === email ) : commentLists).map(details => CommentListsFilterTemplate({details}))

    // if(email)
    //     return commentLists.filter(lists => lists.email === email  ).map(details => CommentListsFilterTemplate({details}))
    // else
    //     return commentLists.map(res => CommentListsFilterTemplate({details: res}))
}

CommentLists.propTypes = {
    commentLists: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired
}

export default CommentLists;

