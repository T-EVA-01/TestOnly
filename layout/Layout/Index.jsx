import Head from "next/head";
import styled from "styled-components";

const Layout = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
`

const Index = ({ children }) => {

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Pemzgidromush</title>
            </Head>
            <Layout>
                {children}
            </Layout>
        </>
    )
}

export default Index