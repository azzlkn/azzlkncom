import Head from 'next/head';
import React from 'react';
import youtube from '../lib/youtube';

export async function getStaticProps() {
  const data = await youtube();
  return {
    props: { data },
    revalidate: 3600,
  };
}

function Videos({ data }) {
  return (
    <div className="container mx-auto px-3">
      <Head>
        <title>Videolarım</title>
      </Head>
      <h1 className="pt-3 text-3xl">Videolarım</h1>
      <div className="pt-3">
        <p className="font-body font-light">
          Haftanın belirli günleri ilgilendiğim alanlarda video üretmeye başlıyorum. Eklediğim son videoları burada
          görebilirsin.{' '}
          <a className="text-light" target="_blank" href="https://www.youtube.com/c/AzizAlkan">
            Daha fazla video için kanalımı ziyaret edebilirsin.
          </a>
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <a
            href={item.link}
            key={index}
            target="_blank"
            className="my-6 flex items-center justify-between border border-sub"
          >
            <img src={item.thumbnail} className="object-cover h-48 w-96" alt="chevron right" />

            <span className="px-6">
              <h4 className="font-body text-lg font-semibold text-primary dark:text-white">{item.title}</h4>
              <p className="font-body font-light text-primary dark:text-white">{item.description}</p>
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default Videos;
