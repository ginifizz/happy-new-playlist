import Tape1 from "@/components/tapes/Tape1";
import Tape2 from '@/components/tapes/Tape2';
import Tape3 from '@/components/tapes/Tape3';
import Tape4 from '@/components/tapes/Tape4';
import Tape5 from '@/components/tapes/Tape5';

const tapes = [
  {
    fr: {
       title: 'Spider Addict',
    subtitle: 'La playlist de Laury',
    description:
      'Laury, c’est notre lead designer, et sa passion, c’est de décliner Webby, la mascotte araignée de notre framework API Platform. La preuve avec cette playlist déconseillée aux arachnophobes !', 
    },
    en: {
        title: 'Spider Addict',
    subtitle: 'La playlist de Laury',
    description:
      'Laury, c’est notre lead designer, et sa passion, c’est de décliner Webby, la mascotte araignée de notre framework API Platform. La preuve avec cette playlist déconseillée aux arachnophobes !',
    
    },
    tape: Tape1,
    rotateClassName: 'rotate-6',
    playlistId: '4ZCCNCL2x3gGj4ZRxpoSjf',
  },
  {
    fr: {
title: 'Code Lover',
    subtitle: 'La playlist de Kévin',
    description:
      'Kévin, notre chef de la programmation, ne vit que pour le code, et sa passion se reflète dans cette playlist qui ne manquera pas de faire vibrer les adeptes du langage binaire. Préparez-vous à plonger dans un univers sonore réservé aux passionnés du développement !',
    
    },
    en: {
title: 'Code Lover',
    subtitle: 'La playlist de Kévin',
    description:
      'Kévin, notre chef de la programmation, ne vit que pour le code, et sa passion se reflète dans cette playlist qui ne manquera pas de faire vibrer les adeptes du langage binaire. Préparez-vous à plonger dans un univers sonore réservé aux passionnés du développement !',
    
    },
    tape: Tape2,
    rotateClassName: '-rotate-12',
    playlistId: '1GHEyhjhTFXYJ7JuWc6jbK',
  },
  {
    en: {
title: '100% live',
    subtitle: 'La playlist de Cécile',
    description:
      "Cécile, c'est notre chef d'événements, et son amour pour l'adrénaline du direct est palpable à chaque instant. La preuve en musique avec cette playlist à réserver aux amateurs de sensations fortes !",
    
    },
    fr: {
        title: '100% live',
    subtitle: 'La playlist de Cécile',
    description:
      "Cécile, c'est notre chef d'événements, et son amour pour l'adrénaline du direct est palpable à chaque instant. La preuve en musique avec cette playlist à réserver aux amateurs de sensations fortes !",
    
    },
    tape: Tape3,
    rotateClassName: '-rotate-6',
    playlistId: '4ZCCNCL2x3gGj4ZRxpoSjf',
  },
];

export default tapes;