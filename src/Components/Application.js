import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";

function Application({ submit }) {
  const { TextArea } = Input;
  const { Option } = Select;
  const [selectedSession, setSelectedSession] = useState("");

  const checkSelectedSession = (session) => {
    if (session === "Mobile") setSelectedSession(session);
  };

  return (
    <div id="login" className="login row" style={{ marginTop: "1rem" }}>
      <div className="col-lg-1 col-sm-0"></div>
      <div className="col-lg-10 col-sm-8">
        <Form onFinish={submit} autoComplete="off">
          <Form.Item
            name={"name"}
            label="Name"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            style={{ display: "block" }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email",
              },
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"phone"}
            label="Phone Number"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"f_url"}
            label="Facebook Account URL"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your Facebook account URL",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"university"}
            label="University"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your university name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"college"}
            label="College"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your college name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"department"}
            label="Department"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your department",
              },
            ]}
          >
            <Input placeholder="Write none if you are not in a specific department" />
          </Form.Item>
          <Form.Item
            name={"a_year"}
            label="Academic Year"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please select your academic year",
              },
            ]}
          >
            <Select placeholder="Select your academic year" allowClear>
              <Option value="Preparatory">Preparatory Year</Option>
              <Option value="First">First Year</Option>
              <Option value="Second">Second Year</Option>
              <Option value="Third">Third Year</Option>
              <Option value="Fourth">Fourth Year</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={"hobbies"}
            label="What are your hobbies or interests?"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name={"course"}
            label="Choose the session you want to join"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please select the session you want to join",
              },
            ]}
          >
            <Select
              placeholder="Select the session you want to join"
              onChange={checkSelectedSession}
              allowClear
            >
              <Option value="Web">Web Development</Option>
              <Option value="Mobile">Mobile App Development</Option>
            </Select>
          </Form.Item>
          {selectedSession === "Mobile" ? (
            <Form.Item
              name={"prev_programming"}
              label="Do you have a background in any programming language?"
              style={{ display: "block" }}
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <TextArea rows={4} placeholder="If yes, what is it?" />
            </Form.Item>
          ) : null}
          <Form.Item
            name={"choice_reason"}
            label="Why did you choose this session?"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name={"prev_exp"}
            label="Do you have previous experience in volunteering or as a participant in a session?"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}
          >
            <TextArea rows={4} placeholder="If yes, what is it?" />
          </Form.Item>
          <Form.Item
            name={"comments"}
            label="Any comments?"
            style={{ display: "block" }}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="secondry" htmlType="submit" size="large" block>
              Apply
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Application;
