import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import Cover from '@/components/sections/Cover';
import TapeSection from '@/components/sections/TapeSection';
import tapes from '@/data';

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Cover translation={dictionary.cover} />
      {tapes.map((tape, i) => (
        <TapeSection
          // @ts-ignore
          title={dictionary[`tape${i + 1}`].title}
          // @ts-ignore
          subtitle={dictionary[`tape${i + 1}`].subtitle}
          // @ts-ignore
          description={dictionary[`tape${i + 1}`].description}
          section={i + 1}
          key={tape.playlistId}
          {...tape}
        />
      ))}
    </>
  );
}