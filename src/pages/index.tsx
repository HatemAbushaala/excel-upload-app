import { Inter } from 'next/font/google';
import Head from 'next/head';
import UploadForm from '../components/UploadForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Excel Upload App</title>
      </Head>

      <main>
        <h1>Upload Excel File</h1>
        <UploadForm />
      </main>
    </div>
  );
}
