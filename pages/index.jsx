import Layout from "../layout/Layout/Index";
import Header from "../layout/Header/Index";
import Company from "../layout/Company/Index";
import AboutUs from "../layout/AboutUs/Index";
import Transport from "../layout/Transport/Index";
import { getHeader, getCompany, getAboutUs, getTransport } from "../lib/api";

export default function Home({ header, company, aboutUs, transport }) {
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
          <Transport
            images={transport.images}
            title={transport.title}
            transportTypes={transport.transportTypes}
          /> 
        </main>
      </Layout>
  )
}

export const getStaticProps = async () => {

  const company = getCompany();
  const header = getHeader();
  const aboutUs = getAboutUs();
  const transport = getTransport();

  // console.log(aboutUs)
  return {
      props: {
        header,
        company,
        aboutUs,
        transport
      },
      revalidate: 1
  }
}
