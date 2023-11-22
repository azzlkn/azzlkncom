import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import photos from '../lib/photos';

function Photos() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Head>
        <title>Fotoğraflarım</title>
      </Head>
      <p className="font-body mb-10 font-thin">
        Fotoğrafçılık uzun zamandır ilgilendiğim bir konu ve aşağıda favori çekimlerimden birkaçına yer verdim. Şu anda
        çoğunlukla doğa ve manzara fotoğrafları çekiyorum. Vakit buldukça bunları düzenleyip burada paylaşma
        niyetindeyim.
      </p>
      {photos.map((item, index) => {
        return (
          <div className={`${index === 0 ? 'pt-12' : 'pt-2'} my-12`} key={index}>
            <div className="flex flex-col items-center justify-between">
              <div className="object-cover relative">
                <Image
                  loader={() => item.link}
                  src={item.link}
                  alt={item.alt}
                  height={item.height}
                  width={item.width}
                />
              </div>
              <div className="flex flex-wrap items-center pt-4 italic text-sm">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
