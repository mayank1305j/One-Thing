import React from "react";

// Libraries

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

// Return a radom message

function showmsg() {
  const message = [
    "Woo-Hoo !",
    "High five !",
    "Nicely done !",
    "Yippee !",
    "Yee-haw !",
    "Well done !",
    "You inspire me !",
    "You amaze me !",
  ];
  return message[Math.floor(Math.random() * message.length)];
}

const Goal = ({ thing, setThing, setIsComplete }) => {
  // On goal completion

  const complete = async (e) => {
    e.target.setAttribute("disabled", true);
    setThing(showmsg);
    await jsConfetti.addConfetti({
      confettiNumber: 100,
    });
    setIsComplete(true);
    setThing("");
  };

  // Jsx

  return (
    <div className="goal">
      <h1>{thing}</h1>
      <button onClick={complete}>Mark as done</button>
    </div>
  );
};

export default Goal;
