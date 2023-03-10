import Head from 'next/head';


export default function Header(props) {
    return ( 

        <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.jpeg" />
      </Head>
     

     );
}

