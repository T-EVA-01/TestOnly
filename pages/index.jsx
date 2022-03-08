import Layout from "../layout/Layout/Index";
import Header from "../layout/Header/Index";
import Company from "../layout/Company/Index";
import AboutUs from "../layout/AboutUs/Index";
import { getHeader, getCompany, getAboutUs } from "../lib/api";

export default function Home({ header, company, aboutUs }) {
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
          <AboutUs 
            title={aboutUs.title}
            text={aboutUs.text}
            src={aboutUs.src}
            items={aboutUs.items}              
          />
        </main>
      </Layout>
  )
}

export const getStaticProps = async () => {

  const company = getCompany();
  const header = getHeader();
  const aboutUs = getAboutUs();

  // console.log(aboutUs)
  return {
      props: {
        header,
        company,
        aboutUs
      },
      revalidate: 1
  }
}
