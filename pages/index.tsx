import Head from 'next/head'
import { Banner, Header, Row } from '../components'
import { MovieProps } from '../typings'
import requests from '../utils/requests'

const Home = ({
  netflixOriginals,
  trending,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: MovieProps) => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netlfix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 md:pl-8 lg:space-y-24 lg:pl-16">
        <Banner bannerMovie={trending} />
        <section className="space-y-0.5 sm:space-y-4 md:space-y-10">
          <Row title="Trending Now" category={trending} />
          <Row title="Top Rated" category={topRated} />
          <Row title="Netflix Originals" category={netflixOriginals} />
          <Row title="Action Movies" category={actionMovies} />
          <Row title="Comedy Movies" category={comedyMovies} />
          <Row title="Horror Movies" category={horrorMovies} />
          <Row title="Romantic Movies" category={romanceMovies} />
          <Row title="Documentaries" category={documentaries} />
        </section>
      </main>

      {
        // TODO : Modal
      }
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trending: trending.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
