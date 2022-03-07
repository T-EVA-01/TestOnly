import Layout from "../layout/Layout/Index";
import Header from "../layout/Header/Index";
import { getHeader } from "../lib/api";

export default function Home({header}) {
  return (
      <Layout>
        <Header logo={header.logo} links={header.links}/>
      </Layout>
  )
}

export const getStaticProps = async () => {

  const header = getHeader()

  return {
      props: {
        header
      },
      revalidate: 1
  }
}
