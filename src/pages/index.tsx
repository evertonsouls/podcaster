import { GetStaticProps } from "next"

type Episode = {
  id: string;
  title: string;
  members: string;
  published_at: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  }
}

interface HomeProps {
  episodes: Episode[]
}

export default function Home({ episodes }: HomeProps) {
  return (
    <h1>Index</h1>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}