import React, {useEffect, useState} from 'react';
import { Table, Space, Layout, Button, Modal, Image, Row, Col } from 'antd';
import { Link, Redirect, useHistory } from 'react-router-dom';

function UserTable(props) {
    const [data, setData] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
        setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    useEffect(() => {
        setData(props.data)
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            key:'id'
        },
        {
            title: 'Foto',
            dataIndex: 'photoId',
            key: 'photoId',
            render: photoURL => {
                return (
                    <div>
                        <img height={150} width={150} src={photoURL}/>
                    </div>
                )
            }
        },
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Departamento',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Localización',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Inventario',
            key: 'inventory',
            render: (text,record) => (
                <>
                    <Button type="primary" onClick={showModal}>
                        Ver inventario
                    </Button>
                    <Modal title={record.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1500}>
                        <h2>Equipo</h2>
                            <Row>
                                {record.inventory.map ((equipo) => 
                                <Col span={4}>
                                    <h3>{equipo.hardwareName}</h3>
                                    <Image height={150} width={150} src={equipo.image}/>
                                    <p>{equipo.description}</p>
                                </Col>)}
                            </Row>
                            
                        <h2>Carta Responsiva</h2>
                            <Row>
                                <Col>
                                    <h3>{record.cr.description}</h3>
                                    <a>Descargar carta responsiva</a>
                                    <p>{record.cr.lastUpdated}</p>
                                </Col>
                            </Row>
                    </Modal>
                </>
            )
        },
    ];

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default UserTable;