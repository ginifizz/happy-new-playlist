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
      <Cover translation={dictionary.cover} metaDictionary={dictionary.meta.opengraph} />
      {tapes.map((tape, i) => {
        const tapeDictionary = dictionary.tapes[i];
        return (
          <TapeSection
            title={tapeDictionary.title}
            subtitle={tapeDictionary.subtitle}
            description={tapeDictionary.description}
            dictionary={dictionary.buttons}
            metaDictionary={dictionary.meta.opengraph}
            section={i + 1}
            key={tape.playlistId}
            {...tape}
          />
        );})}
    </>
  );
}