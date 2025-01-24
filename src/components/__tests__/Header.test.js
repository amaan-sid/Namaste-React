import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utilities/appStore"
import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
it("Should render header component with a login button ", () => {

    render ( 
    <BrowserRouter>  
    <Provider store={appStore}> 
    <Header/>
    </Provider>
    </BrowserRouter>  
    );

    const loginButton = screen.getByRole("button")

    // fireEvent.

    // const logoutButton = screen.getByRole("button",  {name : 'logout'})

    expect(loginButton).toBeInTheDocument();
    
}) 