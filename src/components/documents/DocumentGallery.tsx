import {useRef, useState} from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from "yet-another-react-lightbox/plugins/captions"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import LightboxButton from "./LightboxButton"
import Paragraph from "./Paragraph"
import 'yet-another-react-lightbox/styles.css'
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import certificationsList from "../../data/certificationsList.tsx"

const DocumentGallery = () => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false)

  const thumbnailsRef = useRef(null)
  return (
    <div>
      <Paragraph>
                Full-blown example with most of the plugins enabled (Captions,
                Fullscreen, Slideshow, Thumbnails, Zoom).
      </Paragraph>

      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={certificationsList}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Zoom]}
        thumbnails={{
          ref: thumbnailsRef,
          position: "bottom",
          width: 100,
          height: 80,
          padding: 5,
          gap: 10,
          imageFit: "contain",
          vignette: true,
          showToggle: false,
        }}
      />

      <LightboxButton onClick={() => setAdvancedExampleOpen(true)}/>
    </div>
  )
}
export default DocumentGallery