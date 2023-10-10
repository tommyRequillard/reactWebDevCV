import {useState} from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import certificationsList from "../../data/certificationsList.tsx"

const DocumentGallery = () => {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={certificationsList}
        targetRowHeight={150}
        onClick={({index}) => setIndex(index)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={certificationsList}
        plugins={[Thumbnails]}
      />
    </>
  )
}

export default DocumentGallery