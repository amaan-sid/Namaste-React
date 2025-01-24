// import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react"
import Contact from "../ContactUs"

describe("Contact Us test cases", () => {
       
it("Should load Conatct Us ", () => {
    render(<Contact/>)

   const heading = screen.getByRole("heading");

   expect(heading).toBeInTheDocument();

});

test("Should load button in Contact Us ", () => {
    render(<Contact/>)

   const button = screen.getByRole("button");

   expect(button).toBeInTheDocument();

});
})
