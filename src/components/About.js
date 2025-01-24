import AboutClass from "./AboutClass";
import { useState } from "react";
const About = (name) => {
    let [count] = useState(0)
    return (
        <div className="About-Function">
          <h1> {count} </h1>
          <h1> My name is {name.name} </h1>
          <h1> Learning React JS with Akshay Saini. 🚀🚀🚀🚀🚀</h1>
          <AboutClass />
        </div>
        
    )
}
export default About;