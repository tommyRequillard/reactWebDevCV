import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScreenTestSteps } from './hooks/useScreenTestSteps'
import { DeadPixelStep } from './components/DeadPixelStep'
import { ColorimetryStep } from './components/ColorimetryStep'
import { GeometryStep } from './components/GeometryStep'
import { SharpnessStep } from './components/SharpnessStep'
import { GammaStep } from './components/GammaStep'
import { ScreenTestNav } from './components/ScreenTestNav'

const STEP_COMPONENTS = {
  deadPixel: DeadPixelStep,
  colorimetry: ColorimetryStep,
  geometry: GeometryStep,
  sharpness: SharpnessStep,
  gamma: GammaStep,
}

export function ScreenTestPage() {
  const { t } = useTranslation('tools')
  const navigate = useNavigate()
  const { step, index, total, isFirst, isLast, next, previous } = useScreenTestSteps()

  const StepComponent = STEP_COMPONENTS[step]

  return (
    <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-black">
      <StepComponent />
      <ScreenTestNav
        title={t(`screenTest.${step}.title`)}
        instructions={t(`screenTest.${step}.instructions`)}
        index={index}
        total={total}
        isFirst={isFirst}
        isLast={isLast}
        onPrevious={previous}
        onNext={next}
        onExit={() => navigate('/tools')}
      />
    </div>
  )
}
