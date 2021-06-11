import { Layout } from 'antd';
import UserTable from './UserTable';
import { NameSearch } from './NameSearch';
import { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider } = Layout; 

const rawData = [
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