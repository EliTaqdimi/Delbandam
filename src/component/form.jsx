import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";


function BasicForm() {
  return (
    <>
      <div id="section-form"
        style={{
          display: "row",
          flexDirection: "row",
          justifyContent: "center",
         
        }}
      >
        <h1 style={{ font: "40px", fontWeight: "bold", textAlign: "center" }}>
          تماس با ما
        </h1>
      </div>
      <div className="container-fluid" style={{ width: "70%" }}>
        <br />
        <br />
        <Form
          style={{
            display: "row",
            flexDirection: "row",
            justifyContent: "center",
            direction: "rtl",
          }}
        >
          <Form.Group className=" col-sm form-group" controlId="formname">
            <Form.Label className="label">نام</Form.Label>
            <Form.Control type="text" placeholder="نام را وارد کنید" />
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="formlastname">
            <Form.Label className="label">نام خانوادگی</Form.Label>
            <Form.Control
              type="text"
              placeholder=" نام خانوادگی را وارد کنید"
            />
          </Form.Group>
          <Form.Label className="label">کشور</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="mb-3 form-group"
          >
            <option>شهرمورد نظر را انتخاب کنید</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Group
            className="mb-3 form-group-subject"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="label">موضوع</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit" className="btn-form">
            ارسال
          </Button>
        </Form>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default BasicForm;
