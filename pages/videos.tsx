import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import youtube from '../lib/youtube';
const YOUTUBE_CHANNEL_LINK =
  'https://www.youtube.com/feeds/videos.xml?channel_id=UCZFrmB9bphLaTH91WDiPCEg';

export async function getStaticProps({ res }) {
  try {
    const res = await axios.get(YOUTUBE_CHANNEL_LINK);
    const data = await youtube(res);
    return {
      props: { data },
      revalidate: 60
    };
  } catch (error) {
    res.status = 404;
    return { props: {} };
  }
}

function Videos({ data }) {
  return (
    <div className='container mx-auto px-3'>
      <Head>
        <title>Videolarım</title>
      </Head>
      <h1 className='pt-3 text-3xl'>Videolarım</h1>
      <div className='pt-3'>
        <p className='font-body font-light'>
          Haftanın belirli günleri ilgilendiğim alanlarda video üretmeye
          başlıyorum. Eklediğim son videoları burada görebilirsin.{' '}
          <a
            className='text-light'
            target='_blank'
            href='https://www.youtube.com/c/AzizAlkan'
          >
            Daha fazla video için kanalımı ziyaret edebilirsin.
          </a>
        </p>
      </div>
      {data.map((item, index) => {
        return (
          <div className=' border border-sub mt-4 my-6 ' key={index}>
            <a
              href={item.link}
              target='_blank'
              className='lg:flex items-center justify-between text-white'
            >
              <div className='object-cover w-full h-96 lg:w-5/12 lg:h-36 relative'>
                <Image
                  loader={() => item.thumbnail}
                  src={item.thumbnail}
                  alt={item.title}
                  layout='fill'
                />
              </div>
              <div className='w-full h-auto lg:w-7/12 p-4'>
                <h4 className='font-body text-lg font-semibold text-white'>
                  {item.title}
                </h4>
                <p className='font-body font-light text-white lg:line-clamp-3'>
                  {item.description}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
