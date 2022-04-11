import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { API_SERVICE_BACKEND } from "../config/API";




const ViewDataAll = ({ data }) => {
    return (
        <>
            <h4>
                PID: {data.pid} |  Name: {data.name}
            </h4>
        </>
    );
}


const ViewData = ({ data, counter }) => {
    var allData = (data.data.processdata).slice(0, 10);
    var date = data.date;
    date = new Date(date);
    const showDataAll = () => {
        return (
          <>
            {allData.map((data) => {
                return (
                    <ViewDataAll
                        data={data}
                        key={data}
                    />
                );
            })}
          </>
        );
    };

    return (
        <>
            <p>
                {`📅 ${date}`}
            </p>
            <h2>
                {`🖥️ ${data.data.runningapplication[0].apptitle}`}
            </h2>
            <h2>
                {`🌏 ${data.data.runningapplication[0].memory}`}
            </h2>
            <h2>
                {`📦 ${data.data.runningapplication[0].platform}`}
            </h2>
                <>
                {
                    counter === 1 ? (
                        <>
                        {showDataAll()}
                        </>
                    ) : null
                }
                </>
            <br />
            <hr />
            <br />
            
        </>
    );
}

const Views = () => {

    const [datalog, setdatalog] = React.useState([]);
    const [loading, setloading] = React.useState(true);



    const getDataLog = async () => {
        try {
            const res = await fetch(`${API_SERVICE_BACKEND}/getdatalog`);
            const data = await res.json();
            setdatalog(data);
            setloading(false);
        } catch (err) {
            console.log(err);
        }
    };

    React.useEffect(() => {
        getDataLog();
    }, []);

    const showData = () => {
        var counter = 0;
        return (
          <>
            {datalog.map((data) => {
                counter = counter + 1;

                return (
                    <ViewData
                        data={data}
                        counter={counter}
                        key={data.pid}
                    />
                );
                
            })}
          </>
        );
    };

    return (
        <>
            <Head>
            <title>
                Data Log
            </title>
            </Head>
            <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
            >
            <Container maxWidth={false}>
                {
                    loading ? (
                        <>
                            Loading....
                        </>
                    ) : (
                        <>
                            {showData()}
                        </>
                    )
                }
            </Container>
            </Box>
        </>
    );
}

Views.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Views;
