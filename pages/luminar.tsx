import Head from 'next/head';
import React from 'react';

function Luminar() {
  return (
    <div className="container mx-auto px-3">
      <Head>
        <title>Luminar Bülten</title>
      </Head>
      <h1 className="pt-3 text-3xl">Luminar Bülten</h1>

      <div className="pt-3">
        <p className="font-body font-light">
          Hafta sona ererken o hafta yaşanan yazılım, teknoloji, kahve ve daha birçok konuda özenle hazırlanmış bir
          pazar bültenidir. Mail adresini kaydederek sen de her pazar saat 11:00'de posta kutunda güzel içeriklere
          ulaşabilirsin.
        </p>
      </div>

      <form
        action="https://www.getrevue.co/profile/luminar/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex mt-3">
          <div className="w-full sm:mr-3 sm:w-2/3">
            <input
              type="email"
              name="member[email]"
              id="member_email"
              placeholder="Bülteni almak istediğiniz mail adresi"
              className="w-full border border-primary px-5 py-4 font-body font-light text-sub placeholder-sub transition-colors focus:border-sub focus:outline-none focus:ring-2 focus:ring-sub"
            />
          </div>
          <button className="w-1/3 bg-sub text-center font-body text-xl font-semibold text-white transition-colors hover:bg-primary sm:inline-block sm:text-2xl">
            Abone ol
          </button>
        </div>
      </form>
      <p className="font-body text-sm font-light text-gray mt-2">
        *By subscribing, you agree with Revue’s{' '}
        <a className="text-light" target="_blank" href="https://www.getrevue.co/terms">
          Terms of Service
        </a>{' '}
        and{' '}
        <a className="text-light" target="_blank" href="https://www.getrevue.co/privacy">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default Luminar;
