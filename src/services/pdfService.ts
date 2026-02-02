import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

export const downloadPDF = async (element: HTMLElement) => {
  try {
    // 1. Génération de l'image haute qualité
    const imgData = await toPng(element, { 
      quality: 0.95,
      cacheBust: true,
      // Ces options aident à réduire les erreurs CORS/Styles
      style: {
        transform: 'scale(1)', // Force l'échelle
      },
      // On ignore les feuilles de style externes qui bloquent (CORS)
      // Cela évite l'erreur "SecurityError: Failed to read cssRules"
      filter: (_node) => {
         // Si tu veux ignorer des éléments spécifiques, tu peux le faire ici
          return true; 
      }
    });

    // 2. Initialisation du PDF A4
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm
    
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;

    // 3. Première page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
    heightLeft -= pdfHeight;

    // 4. Boucle pour créer les pages suivantes si le contenu dépasse
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight; // On décale l'image vers le haut
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save('cv-tommy-requillard.pdf');

  } catch (error) {
    console.error("Erreur lors de la génération du PDF :", error);
  }
};