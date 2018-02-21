import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bitz Price</title>
            <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
            <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>    
    </div>
);

export default Layout;