import React from "react";

const CreateGoal = ({ thing, setThing, setIsComplete }) => {
  // Functions

  function handleInput(e) {
    setThing(e.target.value);
  }

  function setGoal(e) {
    e.preventDefault();
    setIsComplete(false);
  }

  // Jsx

  return (
    <div className="create">
      <h1>What's your "One Thing" ?</h1>
      <form onSubmit={setGoal}>
        <input
          autoFocus={true}
          onInput={handleInput}
          value={thing}
          placeholder="enter one thing..."
          required={true}
          maxLength={64}
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default CreateGoal;
