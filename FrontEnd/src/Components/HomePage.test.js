import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import HomePage from "./HomePage";

it("matches snapshot", function() {
  const { asFragment } = render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
