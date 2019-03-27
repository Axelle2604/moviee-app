const dictionary = {
  notSpecified: { fr: 'Non spécifié.', en: 'Not specified.' },
  birthday: { fr: "Date d'anniversaire : ", en: 'Birthday: ' },
  deathday: { fr: 'Date de décès : ', en: 'Deathday: ' },
  birthPlace: { fr: 'Lieu de naissance : ', en: 'Place of birth: ' },
  biography: { fr: 'Biographie : ', en: 'Biography: ' },
  newReleases: { fr: 'Dernières sorties', en: 'New releases' },
  releaseDate: { fr: 'Date de sortie : ', en: 'Release Date: ' },
  rating: { fr: 'Notation : ', en: 'Rating: ' },
  voteCount: { fr: 'Nombre de votes : ', en: 'Vote count: ' },
  genres: { fr: 'Genres : ', en: 'Genres: ' },
  cast: { fr: 'Casting', en: 'Cast' },
  realizedBy: { fr: 'Réalisé par ', en: 'Realized by ' },
  switchLang: { fr: 'Switch to english', en: 'Basculer en français' },
  noResult: { fr: 'Pas de résultat.', en: 'No result.' },
};

export const translateWord = (keyWord, propsLang) => {
  return dictionary[keyWord][propsLang];
};
