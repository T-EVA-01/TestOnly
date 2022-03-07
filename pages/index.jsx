import Layout from "../layout/Layout/Index";
import Header from "../layout/Header/Index";
import Company from "../layout/Company/Index";
import { getHeader, getCompany } from "../lib/api";

export default function Home({ header, company }) {
  return (
      <Layout>
        <Header 
          logo={header.logo} 
          links={header.links}
        />
        <main>
          <Company 
            links={company.links} 
            title={company.title} 
            text={company.text} 
            src={company.src}
          />
        </main>
      </Layout>
  )
}

export const getStaticProps = async () => {

  const company = getCompany();
  const header = getHeader();

  console.log(company)
  return {
      props: {
        header,
        company
      },
      revalidate: 1
  }
}
