import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

import { GlassPanel } from '@shared/ui/GlassPanel'
import { GlassCard } from '@shared/ui/GlassCard'
import { NeonButton } from '@shared/ui/NeonButton'
import { cardHover } from '@shared/motion/variants'
import { certifications } from '../data/certifications'

export function CertificationsGallery() {
  const { t } = useTranslation('documents')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const slides = certifications.map((c) => ({
    src: c.src,
    title: c.title,
    description: c.description,
    width: c.width,
    height: c.height,
  }))

  return (
    <GlassPanel
      title={t('certifications.title')}
      description={`${certifications.length} certifications`}
      padding="lg"
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {certifications.slice(0, 10).map((c, i) => (
          <motion.button
            key={c.id}
            type="button"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            variants={cardHover}
            initial="rest"
            whileHover="hover"
            className="text-left"
            aria-label={`${t('certifications.viewImage')} — ${c.title}`}
          >
            <GlassCard
              variant="default"
              interactive
              padding="none"
              radius="xl"
              className="overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={c.src}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <p className="truncate text-xs font-medium text-[color:var(--text-primary)]">
                  {c.title}
                </p>
              </div>
            </GlassCard>
          </motion.button>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <NeonButton
          variant="primary"
          onClick={() => {
            setIndex(0)
            setOpen(true)
          }}
        >
          {t('certifications.viewImage')}
        </NeonButton>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        thumbnails={{
          position: 'bottom',
          width: 100,
          height: 80,
          padding: 4,
          gap: 8,
          imageFit: 'contain',
          vignette: true,
          showToggle: false,
        }}
      />
    </GlassPanel>
  )
}
