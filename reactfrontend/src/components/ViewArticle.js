import React , {useContext} from 'react';
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const ViewArticle = (props) => {
    const { articles, removeArticle } = useContext(GlobalContext);
    return (
            <div className="col-md-6">
            <div className="card m-4 shadow-sm">
            <div className="card-body">
                <h3 className="card-title strong pb-3">Article Title : {props.title}</h3>
                <h6 className="card-subtitle mb-4 text-muted">Article Body : {props.body}</h6>
                <h6 className="card-text strong">Article Author : {props.author.toUpperCase()}</h6>
            </div>
            </div>
            </div>
    )
}

export default ViewArticle
