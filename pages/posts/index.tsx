import Head from 'next/head';
import React from 'react';
import { getSortedPostsData } from '../../lib/posts';
import dateFormatter from '../../lib/dateFormatter';
import Link from 'next/link';

export async function getStaticProps({ res }) {
  try {
    const data = getSortedPostsData();
    return {
      props: { data }
    };
  } catch (error) {
    res.status = 404;
    return { props: {} };
  }
}

function Posts({ data }) {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Head>
        <title>Yazılarım</title>
      </Head>
      <p className="font-body mb-10 font-thin">
        Yazılım, teknoloji ve ilgilendiğim diğer konularda blog yazıları paylaşıyorum.
      </p>
      {data.map((item, index) => {
        return (
          <Link href={'/posts/' + item.id} passHref key={index}>
          <div className={index === 0 ? 'pt-12' : 'pt-2'}>
            <div className="border-b border-primary cursor-pointer">
              <div className="flex flex-wrap items-center pt-4">
                <h1
                  className="block font-body text-lg font-semibold transition-colors hover:text-gray"
                >
                  {item.title}
                </h1>
                <p className="ml-auto mt-auto font-body font-light text-sm text-gray">{dateFormatter(item.date)}</p>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
