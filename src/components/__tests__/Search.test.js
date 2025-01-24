import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => { 
   return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      }
    });
  });

it("Should render the Body component with a search ", async () => {
  await act(async () => 
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
  ));
  
    // const cardss = await screen.findAllByTestId("resCard");
    // expect(cardss.length).toBeGreaterThan(0);

    // const searchBtn =  screen.getAllByRole("button", { name: "Search" })
    // const searchInput = screen.getByRole('textbox')

    // fireEvent.change(searchInput, { target : { value : "Burger"}});
    // fireEvent.click(searchBtn)
    // const cards = screen.getAllByRole('group')
    // expect(searchInput).toBeInTheDocument();
  
});
