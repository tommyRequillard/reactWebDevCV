import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export async function downloadPDF(): Promise<void> {
  const pdf = new jsPDF("p", "mm", "a4")

  // Get references to the top and bottom content elements
  const topContent = document.getElementById("topContent")
  const bottomContent = document.getElementById("bottomContent")

  if (!topContent || !bottomContent) {
    console.error("Top or bottom content elements not found.")
    return
  }

  // Create a canvas for the top content
  const canvas1 = await html2canvas(topContent)

  // Add the top content to the first page
  pdf.addImage(canvas1.toDataURL("image/jpeg"), "JPEG", 0, 0, 210, 297) // A4 portrait

  // Add a new page for the second part of the content
  pdf.addPage()

  // Create a canvas for the bottom content
  const canvas2 = await html2canvas(bottomContent)

  // Add the bottom content to the second page
  pdf.addImage(canvas2.toDataURL("image/jpeg"), "JPEG", 0, 0, 210, 297)

  pdf.save("download.pdf")
}
