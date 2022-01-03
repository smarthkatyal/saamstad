import Head from 'next/head'
import Banner from "../components/ui/banner";
import Nav from "../components/nav/Nav";

export default function Home() {
    return (
        <div>
            <Head>
                <title>SAAM stad</title>
                <meta name="description" content="SAAM stad is a multidisciplinary team working at the intersection of innovation, society, economy, and sustainability" />
                <link rel="icon" href="/icon.webp" />
            </Head>
            <Nav/>
            <main>
                <div><Banner bannerTitle="SERVICES"/></div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
