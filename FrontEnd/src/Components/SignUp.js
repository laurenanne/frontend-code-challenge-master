import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Col, Form, FormGroup, Label } from "reactstrap";

function SignUp({ signup }) {
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);

  // handles the submission of the data from form
  async function handleSubmit(evt) {
    evt.preventDefault();

    // calls signup function and if success navigates to admin page
    let result = await signup(formData);
    if (result.success) {
      setFormData(initialState);
      navigate("/admin", { replace: true });
    } else setFormErrors(result.err);
  }

  // handles the change when user input is entered
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div className="m-3 d-flex justify-content-center">
      <Col md={6}>
        <h3 className="text-center">Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </FormGroup>

          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
          </FormGroup>
          {formErrors.length > 0 ? (
            <div className="p-2 alert alert-danger">
              {formErrors.map((e) => (
                <p className="mb-0">{e}</p>
              ))}
            </div>
          ) : (
            ""
          )}

          <Button style={{ color: "white" }} className="=btn btn-secondary">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  );
}

export default SignUp;
