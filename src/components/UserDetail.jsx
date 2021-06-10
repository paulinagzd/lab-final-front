import { Button, Card, Row, Col, PageHeader, Avatar, Layout } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import { Card, Row, Col, PageHeader, Layout, Avatar, Select, Input} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DownloadOutlined } from '@ant-design/icons';
import { userDetails, areas } from '../mocks/userDetailsMock';
const { Header, Content, Footer, Sider } = Layout; 

const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

const UserDetail = (props) => {
  const [userName, setUserName] = useState("null")  

  useEffect(() => {
    setUserName(props.userName)
});

const handleChange = (e) => {
  console.log(e)
}
const onSearch = (e) => {
  console.log(e)
}

const UserDetail = () => {
  return (
    <>
      <Row>
        <Row>
          <Col span={24}>
            <PageHeader
              className="detail-page-header"
              onBack={() => window.history.back()}
              title={userName} 
            />
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
        <Row>
        {userDetails.map((details) =>
          <Col span={22}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        )}
        </Row>
      </Row>
    </>
  );
}
}

export default UserDetail;