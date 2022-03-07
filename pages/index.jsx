import Layout from "../layout/Layout/Index";

export default function Home({header}) {
  return (
      <Layout/>
  )
}


export const getStaticProps = async () => {

  return {
      props: {
      },
      revalidate: 1
  }
}
