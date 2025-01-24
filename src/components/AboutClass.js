import About from "./About";
import React from "react";
import UserContext from "../utilities/UserContext";

class AboutClass extends React.Component {
    constructor(para) {
     super(para)
      this.amaan = para
      this.state = {
        userInfo : {
       name : "Dummy",
       location : "Default",
       avatar_url : "abc"
        } ,
      };
    }

   async  componentDidMount ()    {
      // api calls 
      this.timer = setInterval(() => {
           console.log('Namaste React OP');
      },1000);
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      
      this.setState({
          userInfo : json,
      } )
 
      // console.log(json)
    }
    
    componentWillUnmount() {
   clearInterval(this.timer);
    }
    render() {
      
      const { location ,  name , avatar_url } = this.state.userInfo;
      // debugger;
        return (
            <div className="About-Class" >
              <img src={avatar_url} /> 
              <h2> Name : {name} </h2>
              <div>
                <UserContext.Consumer>
                {/* {  (data) => {console.log(data)} } */}
                {/* { ({loggedInUser}) => <h1> {loggedInUser} </h1>  } */}
                { ({loggedInUser}) => console.log({loggedInUser})    }
                </UserContext.Consumer>
              </div>
              <h2> Location :  {location} </h2>
              
            </div>
        )
    }
}
export default AboutClass;