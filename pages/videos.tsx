import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import youtube from '../lib/youtube';
const YOUTUBE_CHANNEL_LINK = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCZFrmB9bphLaTH91WDiPCEg';

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
    <div className="container mx-auto px-3 md:px-0">
      <Head>
        <title>Videolarım</title>
      </Head>
      <p className="font-body mb-10 font-thin">
        Eskiden video hazırlayarak insanlara kaynak üretmek üzerine çalışmalar yapıyordum. Şu anda bu konuda pek bir şey
        yapmıyorum. Vakit buldukça kanalımı aktif edip yaratıcı yeni üretimler yapmayı düşünüyorum.
      </p>
      {data.map((item, index) => {
        return (
          <div className={`${index === 0 ? 'pt-12' : 'pt-2'} my-6 border-b border-primary`} key={index}>
            <a href={item.link} target="_blank">
              <div className="object-cover w-full h-96 relative">
                <Image loader={() => item.thumbnail} src={item.thumbnail} alt={item.title} layout="fill" />
              </div>
              <div className="pt-4">{item.title}</div>
              <p className="font-body font-light text-sm text-gray">{item.pubDate}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
