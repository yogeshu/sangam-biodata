import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface DownloadOptions {
  filename?: string;
  format?: 'pdf' | 'png' | 'jpeg';
  quality?: number;
}

/**
 * Download biodata as PDF
 */
export async function downloadAsPDF(
  elementId: string, 
  options: DownloadOptions = {}
): Promise<void> {
  const {
    filename = 'biodata-vivahbio.pdf',
    quality = 0.95
  } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Convert canvas to PDF
    const imgData = canvas.toDataURL('image/jpeg', quality);
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

/**
 * Download biodata as image (PNG/JPEG)
 */
export async function downloadAsImage(
  elementId: string,
  options: DownloadOptions = {}
): Promise<void> {
  const {
    filename = 'biodata-vivahbio.png',
    format = 'png',
    quality = 0.95
  } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create blob');
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
    }, `image/${format}`, quality);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}

/**
 * Share biodata via WhatsApp
 */
export function shareOnWhatsApp(message: string = ''): void {
  const text = encodeURIComponent(
    message || 'Check out my biodata created on VivahBio.com - Making Matrimony Beautiful!'
  );
  
  const whatsappUrl = `https://wa.me/?text=${text}`;
  window.open(whatsappUrl, '_blank');
}

/**
 * Get shareable link for biodata
 */
export function getShareableLink(biodataId?: string): string {
  if (biodataId) {
    return `${window.location.origin}/biodata/${biodataId}`;
  }
  return window.location.origin;
}
