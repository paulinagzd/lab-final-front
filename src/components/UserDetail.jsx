import { Button, Card, Row, Col, PageHeader, Avatar, Layout } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
const { Header, Content, Footer, Sider } = Layout; 

const { Meta } = Card;

const UserDetail = (props) => {
  const [userName, setUserName] = useState("null")  

  useEffect(() => {
    setUserName(props.userName)
});

  return (
    <>
      <Header style={{ zIndex: 1, width: '100%', background: '#FFFFFF', height: '100px'}}>
        <img src={'https://ii.ct-stc.com/2/logos/empresas/2003/05/08/tca-software-solutions-92226890A07C6E43thumbnail.gif'} />
      </Header>
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
      </Row>
    </>
  );
}

export default UserDetail;