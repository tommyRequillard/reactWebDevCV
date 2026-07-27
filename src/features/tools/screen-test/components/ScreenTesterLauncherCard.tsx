import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { NeonButton } from '@shared/ui/NeonButton'

export function ScreenTesterLauncherCard() {
  const { t } = useTranslation('tools')
  const navigate = useNavigate()

  return (
    <GlassPanel
      title={t('screenTester.title')}
      icon={<ComputerDesktopIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="text-sm text-[color:var(--text-secondary)]">{t('screenTester.description')}</p>
      <ul className="flex flex-col gap-1 text-sm text-[color:var(--text-secondary)]">
        <li>{t('screenTester.deadPixel')}</li>
        <li>{t('screenTester.colorimetry')}</li>
        <li>{t('screenTester.geometry')}</li>
        <li>{t('screenTester.sharpness')}</li>
        <li>{t('screenTester.gamma')}</li>
      </ul>
      <NeonButton type="button" onClick={() => navigate('/tools/screen-test')}>
        {t('screenTester.launch')}
      </NeonButton>
    </GlassPanel>
  )
}
