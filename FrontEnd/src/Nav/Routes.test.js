import React from "react";
import { render } from "@testing-library/react";
import AppRoutes from "./Routes";
import { MemoryRouter } from "react-router";

it("renders without crashing", function() {
  render(
    <MemoryRouter>
      <AppRoutes />
    </MemoryRouter>
  );
});

it("matches snapshot", function() {
  const { asFragment } = render(
    <MemoryRouter>
      <AppRoutes />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
