import { Fragment } from "react/cjs/react.production.min";

const MovieItem = (props) => {    
    
console.log(props);
console.log(props.movie);
console.log(props.movie.name);

    return (        
        <Fragment>            
            <h1>Title: {props.movie.title}</h1>
            <h2>Director Name: {props.movie.name}</h2>
        </Fragment>
    )
}

export default MovieItem;