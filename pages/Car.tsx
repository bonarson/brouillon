
import React from "react";
class Car{
     model: string;
     constructor(model: string){
        this.model=model;
     }

    start():string{
      return `hello ${this.model}`;
    }
   
    

}
export default Car;