const PDF_CAPTURE_ATTR = 'data-pdf-capturing'

export interface ExportPdfOptions {
  filename?: string
}

export async function exportElementToPdf(
  element: HTMLElement,
  { filename = 'cv-tommy-requillard.pdf' }: ExportPdfOptions = {},
): Promise<void> {
  const root = document.documentElement
  root.setAttribute(PDF_CAPTURE_ATTR, 'true')

  try {
    const [{ toPng }, { jsPDF }] = await Promise.all([
      import('html-to-image'),
      import('jspdf'),
    ])

    const imgData = await toPng(element, {
      quality: 0.95,
      cacheBust: true,
      pixelRatio: 2,
      style: { transform: 'scale(1)' },
    })

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    const imgProps = pdf.getImageProperties(imgData)
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
    heightLeft -= pdfHeight

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight)
      heightLeft -= pdfHeight
    }

    pdf.save(filename)
  } finally {
    root.removeAttribute(PDF_CAPTURE_ATTR)
  }
}
