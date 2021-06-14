import { Table, Input, Button, Space } from 'antd';
import { Layout, Row, Col, Modal, Image } from 'antd';
import React from 'react'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout; 

const data = [
    {
        key: '1',
        photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
        name: 'federico_alcerreca',
        department: 'Capital Humano',
        location: 'CDMX',
        inventory: 
        [
            {
                hardwareName : "Nombre 1 fa",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 2 fa",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 3 fa",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 4 fa",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        cr: 
            {
                title: "Carta Responsiva",
                description: "Descripción del documento",
                lastUpdated: "Última actualización hace 3 horas",
            }
    },
    {
      key: '2',
      photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
      name: 'luis_miranda',
      department: 'Administración',
      location: 'Tampico',
      inventory: 
        [
            {
                hardwareName : "Nombre 1 lm",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 2 lm",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 3 lm",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 4 lm",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        cr: 
            {
                title: "Carta Responsiva",
                description: "Descripción del documento",
                lastUpdated: "Última actualización hace 3 horas",
            }
    },
    {
        key: '3',
        photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
        name: 'paulina_gonzalez',
        department: 'IT',
        location: 'Monterrey',
        inventory: 
        [
            {
                hardwareName : "Nombre 1 pg",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 2 pg",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 3 pg",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }, 
            {
                hardwareName : "Nombre 4 pg",
                description: "Descripción de fotografía",
                image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            }
        ],
        cr: 
            {
                title: "Carta Responsiva",
                description: "Descripción del documento",
                lastUpdated: "Última actualización hace 3 horas",
            }
    },
];

class UserTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    isModalVisible: false,
    currentRecord: null
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  showModal = (record) => {
        this.setState({
            currentRecord: record,
            isModalVisible: !this.state.isModalVisible,
        })
  }

  handleOk = () => {
    this.setState({
        isModalVisible: !this.state.isModalVisible,
    })
  };

  handleCancel = () => {
    this.setState({
        isModalVisible: !this.state.isModalVisible,
    })
  };

  render() {
    const columns = [
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
            ...this.getColumnSearchProps('name')
        },
        {
            title: 'Departamento',
            dataIndex: 'department',
            key: 'department',
            ...this.getColumnSearchProps('department')
        },
        {
            title: 'Localización',
            dataIndex: 'location',
            key: 'location',
            ...this.getColumnSearchProps('location')
        },
        {
            title: 'Inventario',
            key: 'inventory',
            render: (text,record) => (
                <>
                    <Button type="primary" onClick={() => this.showModal(record)}>
                        Ver inventario
                    </Button>
                </>
            )
        },
    ];
    return (
        <>
            <Header style={{ zIndex: 1, width: '100%', background: '#FFFFFF', height: '100px'}}>
                <img src={'https://ii.ct-stc.com/2/logos/empresas/2003/05/08/tca-software-solutions-92226890A07C6E43thumbnail.gif'} />
            </Header>
            <Table columns={columns} dataSource={data} />);
            {this.state.currentRecord != null ? 
                <Modal title={this.state.currentRecord.name} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} width={1500}>
                    <h2>Equipo</h2>
                        <Row>
                            <Image.PreviewGroup>
                                {this.state.currentRecord.inventory.map ((equipo) => 
                                <Col span={4}>
                                    <h3>{equipo.hardwareName}</h3>
                                    <Image height={150} width={150} src={equipo.image}/>
                                    <p>{equipo.description}</p>
                                </Col>)}
                            </Image.PreviewGroup>
                        </Row>
                        
                    <h2>Carta Responsiva</h2>
                        <Row>
                            <Col>
                                <a>Descargar carta responsiva</a>
                                <p>{this.state.currentRecord.cr.lastUpdated}</p>
                            </Col>
                        </Row>
                </Modal>
                :
                <div></div>
            }
        </>
    )
  }
}

export default UserTable