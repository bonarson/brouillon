import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import Car from "./Car";

const Page = () => {
  const [id, setId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
const myCar = new Car('Toyota');
  return (
    /*<div>
      <div>Enter your email </div>
      <p>
        <input type="text" name="" id="id" onChange={handleChange} />
      </p>
      <div>Enter your password </div>
      <p>
        <input type="password" name="" id="password" />
      </p>

      <Link href={`/articles/${id}`}>
        <button>Login</button>
      </Link>
    </div>
    */
   <div>voiture : {myCar.model}</div>
  );
};

export default Page;
