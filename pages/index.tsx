import React from 'react';

function Index() {
  return (
    <div className="container mx-auto px-3">
      <h1 className="pt-3 font-body text-4xl font-semibold md:text-4xl lg:text-5xl">Merhaba, ben Aziz. 👋</h1>
      <h2 className="pt-3 text-2xl">Balıkesir'de yaşayan bir yazılım geliştiriciyim.</h2>
      <p className="pt-5 font-body text-xl font-light text-gray">
        Yazılımı, yazmayı, konuşmayı ve yürüyüşü severim. Kurumsal müşterilere özel yazılım geliştirme hizmetleri sunan
        Dada'nın kurucu ortağıyım. Ayrıca yarı zamanlı olarak fotoğraf çekiyor, kahve ve şarap tadıyorum.
      </p>
      <p className="pt-5 font-body text-xl font-light text-gray">
        Yeniden aktif olmaya karar verdiğim Youtube kanalımda ve blog yazılarımda ise yazılım tecrübelerimi ve
        bilgilerimi aktarıyorum.
      </p>

      <h2 className="pt-5 text-xl">
        Ayrıca haftalık olarak yazılım, teknoloji, kahve ve benzeri konularda oluşturduğum bültenim{' '}
        <a href="/luminar" className="text-light">
          "Luminar"
        </a>
        ı takip etmeni öneririm.
      </h2>
    </div>
  );
}

export default Index;
