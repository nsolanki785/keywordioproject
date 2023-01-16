import { Stack } from '@mui/system';
import React from 'react';
import EnhancedTable from '../components/shared components/table';
import Header from '../components/Header';




const Dashboard = () => {
    
    return (
        <>
        <Header>
            <Stack m={10}>
                <EnhancedTable />
            </Stack>
            </Header>
        </>
    )
}
export default Dashboard;