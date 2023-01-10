import React from 'react';

function Index() {
  return (
    <div className='container mx-auto px-3'>
      <h1 className='pt-3 font-body text-4xl font-semibold md:text-4xl lg:text-5xl'>
        Merhaba, ben Aziz. 👋
      </h1>
      <h2 className='pt-3 text-2xl'>
        Balıkesir'de yaşayan bir yazılım geliştiricisiyim.
      </h2>
      <p className='pt-5 font-body text-xl font-light text-gray'>
        Yazılımı, yazmayı, konuşmayı ve yürüyüşü severim.{' '}
        <p className='pt-5 font-body text-xl font-light text-gray'>
          <a
            href='https://www.teyit.org'
            target='_blank'
            className='text-light'
          >
            Teyit
          </a>{' '}
          isimli bilgi ekosistemi aktörlerinde eleştirel düşünme alışkanlığını
          ortak değer kılmayı amaçlayan bir doğrulama organizasyonunda yazılım
          geliştiricisi olarak çalışıyorum.
        </p>{' '}
        <p className='pt-5 font-body text-xl font-light text-gray'>
          {' '}
          Ayrıca yarı zamanlı olarak fotoğraf çekiyor, kahve ve şarap tadıyorum.
        </p>
      </p>
      <p className='pt-5 font-body text-xl font-light text-gray'>
        Bunların yanında Youtube kanalımda ve blog yazılarımda ise yazılım
        tecrübelerimi ve bilgilerimi aktarıyorum.
      </p>
    </div>
  );
}

export default Index;
