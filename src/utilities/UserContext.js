import { createContext } from "react";

// used for transfer of props or data from parent to grandchildren without passing b/w mediator s
// context can be accesssed anywhere 
// context data is in global space 
// can be used in large size app also...

const UserContext = createContext({
    loggedInUser : " Default User "
})
export default UserContext;