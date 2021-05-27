import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const website_title = 'Hotel Vittoria';
const website_description =
  "L’Hotel Vittoria si trova nel cuore del borgo di Maderno. Offriamo pernottamente con colazione continentale, con torte fatte in casa 🍰, parcheggio interno e una splendida piscina.🏖️ A soli 5 minuti dal Lago di Garda, potrete giore della tranquillità ma allo stesso tempo della posizione centrica dell' Hotel.";

export default function Seo({ description, title, keywords }) {
  const router = useRouter();

  const pageTitle = `${website_title} - ${title}`;

  const microformats = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: pageTitle,
    url: 'https://agriturismosanlorenzodipersegno.it',
  };

  const globalMicroformats = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: website_title,
    description: description || website_description,
    URL: 'https://agriturismosanlorenzodipersegno.it',
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='description' content={description || website_description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={pageTitle} />
      <meta
        property='og:description'
        content={description || website_description}
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={`https://agriturismosanlorenzodipersegno.it/${router?.asPath}`}
      />
      {/*  <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@timsy.io' />
      <meta name='twitter:title' content={`Timsy — ${title}`} />
      <meta name='twitter:image' content='' />
      <meta name='twitter:description' content={description || website_description} /> */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(microformats) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalMicroformats) }}
      />
      <link
        rel='canonical'
        href={`https://agriturismosanlorenzodipersegno.it${router?.asPath}`}
      />
    </Head>
  );
}
