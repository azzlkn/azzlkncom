import Head from 'next/head';
import React from 'react';
import { getAllPostIds, getPost } from '../../lib/posts';
import dateFormatter from '../../lib/dateFormatter';
import MdPost from '../../components/MdPost';

export async function getStaticProps(context) {
  try {
    const { slug } = context.params;
    const data = getPost(slug);
    return {
      props: { data }
    };
  } catch (error) {
    return { props: {} };
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

function Post({ data }) {
  return (
    <div className="mx-auto px-3 md:px-0">
      <Head>
        <title>{data.title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://azzlkn.com/images/avatar.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://azzlkn.com/posts/${data.id}`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={`${data.content.slice(0,200).replace(/\n/g, "")}...`} />
        <meta property="og:image" content="https://azzlkn.com/images/avatar.jpg" />
      </Head>
      <div className="border-b border-primary pb-4 mb-6 text-center">
        <h5 className="font-body text-sm font-light mb-2 text-gray">{dateFormatter(data.date)}</h5>
        <h1 className="font-body text-2xl font-semibold">{data.title}</h1>
      </div>
      <div className="font-body mb-10 font-thin">
        <MdPost>{data.content}</MdPost>
      </div>
    </div>
  );
}

export default Post;
