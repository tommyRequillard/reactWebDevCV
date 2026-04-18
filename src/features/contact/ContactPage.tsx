import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { PaperAirplaneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

import { GradientText } from '@shared/ui/GradientText'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { Textarea } from '@shared/ui/Textarea'
import { NeonButton } from '@shared/ui/NeonButton'
import { useToast } from '@shared/ui/Toast'
import { fadeInUp, stagger } from '@shared/motion/variants'

import { contactSchema, type ContactFormValues } from './schemas/contactSchema'

export function ContactPage() {
  const { t } = useTranslation('contact')
  const { push } = useToast()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true)
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS config missing')
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        publicKey,
      )
      push({ type: 'success', message: t('feedback.success') })
      reset()
    } catch {
      push({ type: 'error', message: t('feedback.error') })
    } finally {
      setSubmitting(false)
    }
  }

  const translateError = (code?: string, meta?: Record<string, number>) => {
    if (!code) return undefined
    return t(`validation.${code}`, meta)
  }

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.header variants={fadeInUp} className="flex flex-col gap-2">
        <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
          {t('page.title')}
        </GradientText>
        <p className="text-sm text-[color:var(--text-secondary)]">{t('page.subtitle')}</p>
      </motion.header>

      <motion.div variants={fadeInUp}>
        <GlassPanel
          title={t('page.title')}
          icon={<EnvelopeIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
          padding="lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={t('form.name')}
                placeholder={t('form.namePlaceholder')}
                autoComplete="name"
                error={translateError(errors.name?.message, { min: 2, max: 60 })}
                {...register('name')}
              />
              <Input
                type="email"
                label={t('form.email')}
                placeholder={t('form.emailPlaceholder')}
                autoComplete="email"
                error={translateError(errors.email?.message)}
                {...register('email')}
              />
            </div>
            <Input
              label={t('form.subject')}
              placeholder={t('form.subjectPlaceholder')}
              error={translateError(errors.subject?.message, { min: 3, max: 120 })}
              {...register('subject')}
            />
            <Textarea
              rows={6}
              label={t('form.message')}
              placeholder={t('form.messagePlaceholder')}
              error={translateError(errors.message?.message, { min: 10, max: 2000 })}
              {...register('message')}
            />
            <div className="flex justify-end">
              <NeonButton
                type="submit"
                loading={submitting}
                leftIcon={<PaperAirplaneIcon className="h-4 w-4" />}
              >
                {submitting ? t('form.sending') : t('form.submit')}
              </NeonButton>
            </div>
          </form>
        </GlassPanel>
      </motion.div>
    </motion.section>
  )
}
