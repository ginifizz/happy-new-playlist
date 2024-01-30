/* eslint-disable @next/next/no-img-element */
import { Montserrat, Spicy_Rice, Permanent_Marker } from 'next/font/google';
import '@/style/global.css';
import clsx from "clsx";
import { SectionContextProvider } from '@/SectionContext';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { i18n, type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';
import Script from 'next/script';

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return {
    metadataBase: new URL('https://happy-new-mix.les-tilleuls.coop'),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    manifest: '/manifest.webmanifest',
    openGraph: {
      title: dictionary.meta.opengraph.title,
      description: dictionary.meta.opengraph.description,
    },
    twitter: {
      title: dictionary.meta.opengraph.title,
      description: dictionary.meta.opengraph.description,
    },
  };
}

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const spicy = Spicy_Rice({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-spicy',
});

const marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-marker',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={clsx(
        montserrat.variable,
        spicy.variable,
        marker.variable,
        'w-full h-full'
      )}
    >
      <body className={clsx('font-sans w-full overflow-hidden bg-beige')}>
        <div className='container h-screen fixed left-1/2 -translate-x-1/2 top-0'>
          <div className='w-1/2 ml-auto h-full relative'>
            <img
              src='/lines.svg'
              className='h-screen rotate-90 left-1/2 scale-x-[30%] top-[20%] max-w-none landscape:rotate-0 landscape:scale-x-100 landscape:top-1/2 -translate-y-1/2 absolute landscape:left-1/2 -translate-x-1/2'
              alt=''
            />
          </div>
        </div>
        <LocaleSwitcher current={params.lang} />
        <SectionContextProvider>
          <div className='relative w-full' id='container'>
            {children}
          </div>
        </SectionContextProvider>
      </body>
      <Script
        defer
        src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "57f8392c25e4473ca6a352172527d0ec"}'
      ></Script>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}