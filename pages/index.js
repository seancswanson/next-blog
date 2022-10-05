import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import { getSortedPostsData } from '../lib/posts';
import format from 'date-fns/format';

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey there! I'm a web developer, artist, and helpful human based in Seattle, WA. You can contact me on <a href="https://twitter.com/sean_sonofswan">Twitter</a>.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={'posts/' + id}>
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {format(new Date(date), 'PP')}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}