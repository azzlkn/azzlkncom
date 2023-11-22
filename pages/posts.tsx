import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import medium from '../lib/medium';
const MEDIUM_LINK = 'https://medium.com/feed/@azzlkn';

export async function getStaticProps({ res }) {
  try {
    const res = await axios.get(MEDIUM_LINK);
    const data = await medium(res);
    return {
      props: { data },
      revalidate: 60
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
          <div className={index === 0 ? 'pt-12' : 'pt-2'} key={index}>
            <div className="border-b border-primary">
              <div className="flex flex-wrap items-center pt-4">
                <a
                  href={item.link}
                  className="block font-body text-lg font-semibold transition-colors hover:text-gray"
                  target="_blank"
                >
                  {item.title}
                </a>
                <p className="ml-auto mt-auto font-body font-light text-sm text-gray">{item.pubDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
