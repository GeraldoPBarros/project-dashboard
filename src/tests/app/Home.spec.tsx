import { screen, render } from "@testing-library/react";
import Page from "../../app/page";

describe("Home", () => {

    it("renders correctly", () => {
        render(<Page />);

        expect(screen.getByText("Hellow World!")).toBeTruthy();
    })

});


