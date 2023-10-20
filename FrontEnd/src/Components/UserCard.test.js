import React from "react";
import { render } from "@testing-library/react";
import UserCard from "./UserCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function() {
  let users = [
    {
      id: "1",
      firstName: "First",
      lastName: "Last",
      email: "myemail@email.com",
      state: "pending",
    },
  ];
  const { asFragment } = render(
    <MemoryRouter>
      <UserCard users={users} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
