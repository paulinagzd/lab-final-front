import React, {useEffect, useState} from 'react';
import { Table, Space, Layout, Button } from 'antd';
import { Link, Redirect, useHistory } from 'react-router-dom';

function UserTable(props) {
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
            render: (text, record) => (
                <Button type="primary">
                    <Link to= {{
                        pathname:'/userdetail'
                    }}>
                        Inventario
                    </Link>
                </Button>
            )
        },
    ];

    const [data, setData] = useState(null)

    useEffect(() => {
        setData(props.data)
    });

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default UserTable;