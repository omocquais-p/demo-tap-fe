import { Fragment } from "react/cjs/react.production.min";

const MovieItem = (props) => {    
    
console.log(props);
console.log(props.movie);
console.log(props.movie.name);

    return (        
        <Fragment>
            <h1>Name: {props.movie.name}</h1>
            <h2>Title: {props.movie.title}</h2>
        </Fragment>
    )
}

export default MovieItem;