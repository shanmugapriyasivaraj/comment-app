import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import profile1 from "./images/image1.jpg";
import profile2 from "./images/image2.jpg";

const First = () => {
  //nesting & Reusable
  return (
    <>
      {" "}
      <div className="ui comments">
        <SingleComment
          name="Anu"
          time="3pm"
          profile={profile2}
          message="Good Luck"
        />
        <SingleComment
          name="Vikram"
          time="4pm"
          profile={profile1}
          message="All the best"
        />
        <SingleComment
          name="Nithya"
          time="7pm"
          profile={profile2}
          message="congrats"
        />
      </div>
    </>
  );
};

ReactDOM.render(<First />, document.querySelector("#root"));
