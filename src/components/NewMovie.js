import { Fragment } from "react/cjs/react.production.min";

import { useState } from "react";

const NewMovie = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const onChangeName = (event) => {
    setEnteredName(event.target.value);
  };

  const onChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const movieData = {
      name: enteredName,
      title: enteredTitle,
    };
    
    //RAZ clear inputs
    setEnteredName("");
    setEnteredTitle("");

    props.onAddMovie(movieData);
  };

  return (
    <Fragment>
      <h1>New Movie Section</h1>

      <form onSubmit={submitHandler}>
        <div>
          Director Name:{" "}
          <input type="text" value={enteredName} onChange={onChangeName} />
        </div>
        <div>
          Title:{" "}
          <input type="text" value={enteredTitle} onChange={onChangeTitle} />
        </div>
        <button>Add New movie</button>
      </form>
    </Fragment>
  );
};

export default NewMovie;
