'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'monthly', label: 'Mensuel', priceSuffix: '/mois' },
    { value: 'annually', label: 'Annuel', priceSuffix: '/an' },
]
const tiers = [
    {
        name: 'Startup',
        id: 'tier-Startup',
        href: '/Contact',
        price: { monthly: '€47', annually: '€564' },
        description: 'Un site vitrine qui vous permet de communiquer sur internet à propos de votre entreprise',
        features: [
            'Site cybersécurisé',
            'Site performant',
            'Site administré', 
            'Support reponse en 48-heures'
        ],
        featured: false,
        cta: 'Acheter le plan',
    },
    {
        name: 'Croissance',
        id: 'tier-growth',
        href: '/Contact',
        price: { monthly: '€97', annually: '€1164' },
        description: 'Un site boutique sans gestion des ventes qui vous permet de communiquer sur internet en proposant des vente de produits par commandes pour votre entreprise',
        features: [
            'Site cybersécurisé', 
            'Site performant', 
            'Site administré',
            'Produits illimités',
            'Outils customisable',
            'Support reponse en 24-heures',
            
        ],
        featured: false,
        cta: 'Acheter le plan',
    },
    {
        name: 'Entreprise',
        id: 'tier-entreprise',
        href: '/Contact',
        price: 'Sur devis',
        description: 'Site internet sur devis ou formation internet, cybersécurité, ...',
        features: [
            'Site cybersécurisé', 
            'Site performant', 
            'Support dédié reponse en 12-heures',
            '...'
        ],
        featured: true,
        cta: 'Plus d\'information sur le plan',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function InternetSites() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base/7 font-semibold text-blue-600">Mes tarifs</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                        Tarification qui évolue avec vous
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                    Choisissez un plan abordable rempli des meilleures fonctionnalités.
                </p>
                <div className="mt-16 flex justify-center">
                    <fieldset aria-label="Payment frequency">
                        <RadioGroup
                            value={frequency}
                            onChange={setFrequency}
                            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-gray-200 ring-inset"
                        >
                            {frequencies.map((option) => (
                                <Radio
                                    key={option.value}
                                    value={option}
                                    className={classNames(
                                        frequency.value === option.value ? 'bg-blue-600 text-white' : 'text-gray-500',
                                        'cursor-pointer rounded-full px-2.5 py-1 transition-colors duration-300 ease-in-out'
                                    )}
                                >
                                    {option.label}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </fieldset>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200',
                                'rounded-3xl p-8 ring-1 xl:p-10',
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(tier.featured ? 'text-white' : 'text-gray-900', 'text-lg/8 font-semibold')}
                            >
                                {tier.name}
                            </h3>
                            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm/6')}>
                                {tier.description}
                            </p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span
                                    className={classNames(
                                        tier.featured ? 'text-white' : 'text-gray-900',
                                        'text-4xl font-semibold tracking-tight',
                                    )}
                                >
                                    {typeof tier.price === 'string' ? tier.price : tier.price[frequency.value]}
                                </span>
                                {typeof tier.price !== 'string' ? (
                                    <span
                                        className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'text-sm font-semibold')}
                                    >
                                        {frequency.priceSuffix}
                                    </span>
                                ) : null}
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                                        : 'bg-blue-600 text-white shadow-xs hover:bg-blue-500 focus-visible:outline-blue-600',
                                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
                                )}
                            >
                                {tier.cta}
                            </a>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                                    'mt-8 space-y-3 text-sm/6 xl:mt-10',
                                )}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(tier.featured ? 'text-white' : 'text-blue-600', 'h-6 w-5 flex-none')}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
