import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
} from "reactstrap";

function UserCard({ users }) {
  return (
    <ListGroup className="user-list col-md-8 d-inline-block">
      {users.map((u) => (
        <ListGroupItem
          style={{ border: "none" }}
          className="m-2 text-center"
          key={u.id}
        >
          <Card style={{ borderColor: "grey" }} color="white">
            <CardHeader>Id: {u.id}</CardHeader>
            <CardBody color="secondary">
              <CardTitle>
                {u.firstName} {u.lastName}
              </CardTitle>
              <CardText>{u.email}</CardText>
              <Button style={{ backgroundColor: "#8f5cd1" }}>{u.state}</Button>
            </CardBody>
          </Card>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default UserCard;
