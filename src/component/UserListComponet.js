import React, {  useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout,Table,Row,Col} from 'antd';
import useUser from '../hooks/useUser'
import { Button } from "@mui/material";
const { Content  } = Layout

const AddUserComponent = ()=> {
  const [users, setAllUserData] = useState([])
  const {getUsers} = useUser()
  let history = useHistory();

  useEffect(async () => {
    var allUsers = await getUsers();
    await setAllUserData(allUsers.users);
  },[]);

const AddUser = ()=>{
    history.push("/");
}
 

  const columns = [
    {
      title: 'S NO',
      key: 'sno',
      width: '20%',
      render: (text, object, index) =>{return  index + 1}
    
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      sorter: true,
      render: full_name => `${full_name} `,
      width: '20%',
    },
   
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
 
  return (
    <>
      <Content style={{ padding: '0 50px' }}>
        <Row type="flex" justify="center" align="center">
          <Col span={16} >
            <div>
                <h1> User List</h1>
                <Button onClick={(()=>AddUser())}> Add New User</Button>
            </div>
                <Table
                columns={columns}
                dataSource={users}
            />
            </Col>
        </Row>
     </Content>    
    </>
  );
}

export default AddUserComponent;
