import { Card, Row, Col, PageHeader, Layout, Avatar, Select, Input} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DownloadOutlined } from '@ant-design/icons';
import { userDetails, areas } from '../mocks/userDetailsMock';
const { Header, Content, Footer, Sider } = Layout; 

const { Option } = Select;
const { Search } = Input;
const { Meta } = Card;

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
        {/* <Row>
          <Col span={22}>
            <PageHeader
              className="detail-page-header"
              onBack={() => null}
              title="Detalle del Usuario TODO"
            />
          </Col>
        </Row> */}
            </Row>

      <Row>
        <Row>
          <Col span={12}>
            <Search placeholder="Ingresa nombre del usuario" onSearch={onSearch} style={{ width: 200 }} />
          </Col>
          <Col span={6}>
            <Select defaultValue="TI" style={{ width: "20%" }} onChange={handleChange}>
              {areas.map((area) =>
                <Option value={area}>{area}</Option>
              )}
            </Select> 
          </Col>
        </Row>
        <Row>
        {userDetails.map((details) =>
          <Col span={22}>
            <Card
              style={{ width: '90%' }}
              >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={details.name}
                description={details.id}
              />
            </Card>
          </Col>
        )}
        </Row>
      </Row>
    </>
  );
}

export default UserDetail;