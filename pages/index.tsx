import { NextPage } from 'next';
import Head from 'next/head';
import ClassroomCard from 'components/ClassroomCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>abc</div>
        <div className={'m-10'}>
          <ClassroomCard />
        </div>
      </main>
    </div>
  );
};

export default Home;
