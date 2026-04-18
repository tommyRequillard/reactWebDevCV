export interface Experience {
  period: string
  role: string
  company: string
  description: string
  link?: { href: string; label: string }
}

export const experiences: Experience[] = [
  {
    period: '2017 – juin 2023',
    role: 'Directeur général',
    company: 'SAS MYDRYM MYGARDEN',
    description:
      "Création ex-nihilo — dépôt de brevet — exploitation de monument funéraire innovant.",
    link: { href: 'https://mygarden.flowers', label: 'mygarden.flowers' },
  },
  {
    period: '2016',
    role: 'Technicien hotline',
    company: 'PC PARTNERS',
    description:
      'Prévention curative et veille des pannes de systèmes de comptage de clientèle (magasins, grandes surfaces). Appels E/S ; accueil clientèle, conseil et vente. Prise en main à distance des ordinateurs défectueux et des serveurs Linux.',
  },
  {
    period: '2015 – 2016',
    role: 'Webmaster & community manager',
    company: 'SARL Hugo Timeo',
    description:
      "Création de site web (princepark.fr). Back-office, front-office, développement et intégration de visuels graphiques créés en amont sur la Suite Adobe.",
  },
  {
    period: '2014 – 2015',
    role: 'Chargé de développement associatif',
    company: 'HUSSARDS Yonnais',
    description:
      "Responsable administratif, conseil et audit légal concernant les statuts, développement web, community manager, webmaster, agent logistique boutique e-commerce back/front office, recherche de partenaires, relations mairie & fédération.",
  },
  {
    period: '2013 – 2014',
    role: 'Chargé de développement',
    company: 'Isol’ouate',
    description:
      "Responsable commercial sur toute la France et responsable informatique du site et des entreprises du groupe. Administrateur réseau, webdesigner, webmaster, téléphonie, internet.",
  },
  {
    period: '2011 – 2013',
    role: 'Agent logistique',
    company: 'PRB',
    description:
      "Saisie commandes clientèle, affrètement des camions pour la livraison, saisie des programmes de fabrication. Utilisation d'un ERP. Statistiques, classement, suivi commercial et logistique.",
  },
]
