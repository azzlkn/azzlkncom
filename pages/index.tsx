import React from 'react';
import Image from 'next/image';
import Photo from '../public/images/b&w.jpg';

function Index() {
  return (
    <div className="container mx-auto px-3 md:px-0">
      <Image alt="Photo of Aziz Alkan" src={Photo} width={512} height={512} />
      <p className="pt-5">
        Merhabalar! Balıkesir'de yaşayan bir yazılım geliştiriciyim. Geçmişte Dada isimli özel yazılım geliştirme
        ajansını kurdum ve Ekim 2022'den bu yana da Teyit isimli bilgi ekosistemi aktörlerinde eleştirel düşünme
        alışkanlığını ortak değer kılmayı amaçlayan bir doğrulama organizasyonunda ürün geliştirici olarak çalışıyorum.
      </p>
    </div>
  );
}

export default Index;
