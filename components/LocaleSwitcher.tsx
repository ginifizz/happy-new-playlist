'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../i18n-config';

export default function LocaleSwitcher({ current}:{current: Locale}) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="hidden lg:block fixed right-10 top-10 z-50">
      <ul className="flex flex-row gap-2">
        {i18n.locales.map((locale) => {
          return (
            <li
              key={locale}
              className={
                current === locale ? 'pointer-events-none' : 'opacity-30'
              }
            >
              <a href={redirectedPathName(locale)} aria-label={`Switch to ${locale} language`}>
                {locale === 'en' ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='256'
                    height='256'
                    viewBox='0 0 256 256'
                    className='w-6 h-6'
                  >
                    <g fill='none' strokeMiterlimit='10' strokeWidth='0'>
                      <path
                        fill='#F3F4F5'
                        d='M88.35 57.052c.034-.123.076-.243.109-.367l-.004-.002a44.92 44.92 0 00.007-23.34l.004-.002c-.039-.146-.088-.289-.128-.434a43.39 43.39 0 00-.434-1.468c-.081-.257-.167-.512-.253-.768-.073-.217-.139-.437-.215-.653h-.015a44.92 44.92 0 00-7.01-12.768L59.997 27.458V2.57A44.864 44.864 0 0046.082.028h-2.164a44.885 44.885 0 00-13.913 2.541v24.889L9.589 17.249a44.915 44.915 0 00-7.01 12.769h-.015c-.076.216-.143.436-.216.653-.086.255-.172.509-.253.765-.154.486-.297.977-.434 1.47-.04.145-.089.287-.128.432l.004.002a44.978 44.978 0 00.008 23.344l-.004.002c.033.123.074.242.108.365.146.524.298 1.046.462 1.562.075.236.154.47.233.705.077.231.148.464.229.693h.017a44.9 44.9 0 007.016 12.761l20.4-10.2v24.86A44.927 44.927 0 0045 90c5.26 0 10.305-.911 14.997-2.57V62.572l20.398 10.199a44.905 44.905 0 007.015-12.76h.015c.081-.229.152-.463.23-.694.079-.234.158-.468.233-.704.164-.517.317-1.038.462-1.561z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                      <path
                        fill='#C00'
                        d='M53.999.902a45.128 45.128 0 00-7.917-.874h-2.164a45.19 45.19 0 00-7.914.874v35.116H.899A45.197 45.197 0 000 45c0 3.087.312 6.1.904 9.012h35.1v35.087A45.19 45.19 0 0045 90c3.082 0 6.091-.311 8.999-.902V54.012h35.097C89.688 51.1 90 48.087 90 45c0-3.076-.311-6.08-.899-8.983H53.999V.902z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                      <path
                        fill='#C00'
                        d='M85.242 65.135a44.765 44.765 0 002.184-5.125H74.993l10.249 5.125zM82.216 19.701L61.581 30.019h13.412l10.261-5.131a45.064 45.064 0 00-3.038-5.187zM4.747 24.887a44.682 44.682 0 00-2.182 5.132H15.01L4.747 24.887zM7.8 70.321L28.422 60.01H15.01L4.758 65.136A45.042 45.042 0 007.8 70.321z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                      <path
                        fill='#006'
                        d='M9.589 17.249l20.416 10.208V2.584A45.071 45.071 0 009.589 17.249zM59.997 2.585v24.872L80.411 17.25A45.06 45.06 0 0059.997 2.585zM30.006 72.77V62.572l-20.4 10.2a45.072 45.072 0 0020.4 14.646V72.77zM59.997 62.572v24.844A45.072 45.072 0 0080.395 72.77L59.997 62.572z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='256'
                    height='256'
                    viewBox='0 0 256 256'
                    className='w-6 h-6'
                  >
                    <g fill='none' strokeMiterlimit='10' strokeWidth='0'>
                      <path
                        fill='#F31830'
                        d='M59.999 2.571V87.43c17.466-6.175 29.985-22.818 30-42.396v-.068c-.014-19.577-12.534-36.221-30-42.395z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                      <path
                        fill='#00267F'
                        d='M30 87.429V2.571C12.524 8.75 0 25.408 0 45s12.524 36.25 30 42.429z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                      <path
                        fill='#F3F4F5'
                        d='M30 87.429A44.914 44.914 0 0045 90c5.261 0 10.307-.911 15-2.571V2.57A44.913 44.913 0 0045 0c-5.261 0-10.307.912-15 2.571v84.858z'
                        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
                      ></path>
                    </g>
                  </svg>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
