import React from "react";

const Book=({name,author})=>
{
  return(
      <div>
        <p>{name}</p>
        <p>{author}</p>
      </div>
  );
};
export default Book;