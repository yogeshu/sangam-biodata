import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export interface DownloadOptions {
  filename?: string;
  format?: 'pdf' | 'png' | 'jpeg';
  quality?: number;
}

const PREVIEW_SCALE_ATTR = 'data-preview-scale';

function normalizeColor(value: string): string {
  if (!value) return value;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return value;
  const sentinel = 'rgba(1, 2, 3, 0.5)';
  ctx.fillStyle = sentinel;
  ctx.fillStyle = value;
  const normalized = ctx.fillStyle;
  return normalized || value;
}

function sanitizeCloneStyles(clone: Document): void {
  const elements = clone.querySelectorAll<HTMLElement>('*');
  elements.forEach((el) => {
    const style = clone.defaultView?.getComputedStyle(el);
    if (!style) return;

    const color = normalizeColor(style.color);
    const backgroundColor = normalizeColor(style.backgroundColor);
    const borderTopColor = normalizeColor(style.borderTopColor);
    const borderRightColor = normalizeColor(style.borderRightColor);
    const borderBottomColor = normalizeColor(style.borderBottomColor);
    const borderLeftColor = normalizeColor(style.borderLeftColor);
    const outlineColor = normalizeColor(style.outlineColor);

    el.style.color = color;
    el.style.backgroundColor = backgroundColor;
    el.style.borderTopColor = borderTopColor;
    el.style.borderRightColor = borderRightColor;
    el.style.borderBottomColor = borderBottomColor;
    el.style.borderLeftColor = borderLeftColor;
    el.style.outlineColor = outlineColor;

    // Avoid unsupported color parsing in shadows
    if (style.boxShadow && style.boxShadow !== 'none') {
      el.style.boxShadow = 'none';
    }
  });
}

function temporarilyDisablePreviewScale(element: HTMLElement): () => void {
  const scaleWrapper = element.closest<HTMLElement>(`[${PREVIEW_SCALE_ATTR}]`);
  if (!scaleWrapper) return () => undefined;

  const previousTransform = scaleWrapper.style.transform;
  const previousOrigin = scaleWrapper.style.transformOrigin;

  scaleWrapper.style.transform = 'none';
  scaleWrapper.style.transformOrigin = 'top left';

  return () => {
    scaleWrapper.style.transform = previousTransform;
    scaleWrapper.style.transformOrigin = previousOrigin;
  };
}

/**
 * Download biodata as PDF
 */
export async function downloadAsPDF(
  elementId: string, 
  options: DownloadOptions = {}
): Promise<void> {
  const {
    filename = 'biodata-sangam-biodata.pdf',
    quality = 0.95
  } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const restoreScale = temporarilyDisablePreviewScale(element);

    let canvas: HTMLCanvasElement;
    try {
      // Capture the element as canvas
      canvas = await html2canvas(element, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clone) => {
          sanitizeCloneStyles(clone);
        },
      });
    } finally {
      restoreScale();
    }

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
    filename = 'biodata-sangam-biodata.png',
    format = 'png',
    quality = 0.95
  } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const restoreScale = temporarilyDisablePreviewScale(element);

    let canvas: HTMLCanvasElement;
    try {
      // Capture the element as canvas
      canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (clone) => {
          sanitizeCloneStyles(clone);
        },
      });
    } finally {
      restoreScale();
    }

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
    message || 'Check out my biodata created on sangam-biodata.com - Making Matrimony Beautiful!'
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
