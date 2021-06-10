import { Layout } from 'antd';
import UserTable from './UserTable';
import { NameSearch } from './NameSearch';
import { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider } = Layout; 

const rawData = [
    {
      key: '1',
      photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
      name: 'paulina_gonzalez',
      department: 'IT',
      location: 'Monterrey',
    },
    {
      key: '2',
      photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
      name: 'luis_miranda',
      department: 'Administración',
      location: 'Tampico',
    },
    {
      key: '3',
      photoId: 'https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-600w-1505360618.jpg',
      name: 'federico_alcerreca',
      department: 'Capital Humano',
      location: 'CDMX',
    },
];

const UserDashboardComponent = () => {

    const [usersData, setUsersData] = useState(rawData)

    function handleSearch(searchText){
        const filteredUsers = rawData.filter(({ name }) => {
            name = name.toLowerCase();
            return name.includes(searchText)
        })
    
        setUsersData(filteredUsers)
    }


    return (
        <>
            <Header style={{ zIndex: 1, width: '100%', background: '#FFFFFF', height: '100px'}}>
                <img src={'https://ii.ct-stc.com/2/logos/empresas/2003/05/08/tca-software-solutions-92226890A07C6E43thumbnail.gif'} />
            </Header>
            <NameSearch onSearch={handleSearch}/>
            <UserTable data={usersData} />
        </>
    )
}

export default UserDashboardComponent;