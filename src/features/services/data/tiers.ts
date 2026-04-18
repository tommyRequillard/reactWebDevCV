export type TierId = 'basic' | 'pro' | 'enterprise'

export interface Tier {
  id: TierId
  featured?: boolean
  price: { monthly: number; annual: number } | 'custom'
  features: string[]
}

export const tiers: Tier[] = [
  {
    id: 'basic',
    price: { monthly: 47, annual: 564 },
    features: [
      'Site cybersécurisé',
      'Site performant',
      'Site administré',
      'Support réponse en 48 heures',
    ],
  },
  {
    id: 'pro',
    price: { monthly: 97, annual: 1164 },
    features: [
      'Site cybersécurisé',
      'Site performant',
      'Site administré',
      'Produits illimités',
      'Outils personnalisables',
      'Support réponse en 24 heures',
    ],
  },
  {
    id: 'enterprise',
    featured: true,
    price: 'custom',
    features: [
      'Site cybersécurisé',
      'Site performant',
      'Support dédié réponse en 12 heures',
      'Prestations sur devis',
    ],
  },
]
