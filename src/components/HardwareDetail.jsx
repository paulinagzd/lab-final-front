import { Button, Card, Row, Col, PageHeader, Avatar, Layout } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, DownloadOutlined } from '@ant-design/icons';
import { cr, hardwareDetails } from '../mocks/hardwareDetailsMock';
const { Header, Content, Footer, Sider } = Layout; 


const { Meta } = Card;

const HardwareDetail = () => {
  return (
    <>
      <Row>
        <Row>
          <Col span={22}>
            <PageHeader
              className="detail-page-header"
              onBack={() => null}
              title="Detalle del Usuario TODO"
            />
          </Col>
        </Row>
      <Row gutter={16}>
        {hardwareDetails.map((details) =>
          <Col span={6}>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src={details.image}
                  style={{height: '250px'}}
                />
              }
              actions={[
                <DownloadOutlined key="download" />,
              ]}
              >
              <Meta
                title={details.hardwareName}
                description={details.description}
              />
            </Card>
          </Col>
        )}
        </Row>
      </Row>
      <Row>
          <Col span={12}>
            <Card
              style={{ width: 300 }}
              actions={[
                <DownloadOutlined key="download" />,
              ]}
              >
              <Meta
                title={cr.name}
                description={cr.description}
              />
            </Card>
          </Col>
        </Row>
    </>
  );
}

export default HardwareDetail;