const dictionary = {
  NotSpecified: { fr: 'Non spécifié.', en: 'Not specified.' },
  Birthday: { fr: "Date d'anniversaire : ", en: 'Birthday: ' },
  Deathday: { fr: 'Date de décès : ', en: 'Deathday: ' },
  BirthPlace: { fr: 'Lieu de naissance : ', en: 'Place of birth: ' },
  Biography: { fr: 'Biographie : ', en: 'Biography: ' },
  NewReleases: { fr: 'Dernières sorties', en: 'New releases' },
  ReleaseDate: { fr: 'Date de sortie : ', en: 'Release Date: ' },
  Rating: { fr: 'Notation : ', en: 'Rating: ' },
  VoteCount: { fr: 'Nombre de votes : ', en: 'Vote count: ' },
  Genres: { fr: 'Genres : ', en: 'Genres: ' },
  Cast: { fr: 'Casting', en: 'Cast' },
  RealizedBy: { fr: 'Réalisé par ', en: 'Realized by ' },
  SwitchLang: { fr: 'Switch to english', en: 'Basculer en français' },
  NoResult: { fr: 'Pas de résultat.', en: 'No result.' },
};

export const translateWord = (keyWord, propsLang) => {
  return dictionary[keyWord][propsLang];
};
