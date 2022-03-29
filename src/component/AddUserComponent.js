import React, {  useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button,Layout,Table,notification,Row,Col,Anchor} from 'antd';
import useUser from '../hooks/useUser'
import { SmileOutlined,CloseOutlined} from '@ant-design/icons';
const { Content  } = Layout
const { Link } = Anchor;

const AddUserComponent = ()=> {
  const {create} = useUser()
  let history = useHistory();

  const saveUserDetails = async(data) =>{
    var addUser =  await create(data)
    history.push("/users-list");
    
    if (addUser.status === 200) {
      notification.open({
        message: 'Add User',
        description:
            'User Successfully added...!',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
      }else if(addUser.status===422){
        notification.open({
          message: 'Error',
          description:
              'The email has already been taken...!',
          icon: <CloseOutlined style={{ color: '#f4364c' }} />,
        });
      }
      else {
          notification.open({
              message: 'Error',
              description:
                  'Something went wrong...!',
              icon: <CloseOutlined style={{ color: '#f4364c' }} />,
          });
      }
  }
  const showUsers =() =>{
    history.push("/users-list");
  }


  return (
    <>
      <Content style={{ padding: '0 50px' }}>
        <Row type="flex" justify="center" align="center">
          <Col span={6} >
          <div>
            <h1>Add User</h1>
          </div>
          <Button onClick={(()=>showUsers())}> Show Users List</Button>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={saveUserDetails}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="full_name"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, type:'email', message: 'Please input your full email!' }]}
            >
              <Input  />
            </Form.Item>         
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Col>
        </Row>
     </Content>    
    </>
  );
}

export default AddUserComponent;
