import { TemplateProps } from './BaseTemplate';
import TraditionalRedTemplate from './TraditionalRedTemplate';
import ModernMinimalTemplate from './ModernMinimalTemplate';
import PremiumGoldenTemplate from './PremiumGoldenTemplate';

interface TemplateRendererProps extends TemplateProps {
  templateId: string;
}

/**
 * Template Renderer Component
 * Dynamically renders the correct template based on templateId
 */
export default function TemplateRenderer({ 
  templateId, 
  data, 
  colorTheme,
  visibleSections 
}: TemplateRendererProps) {
  
  // Map template IDs to their components
  const templateComponents: Record<string, React.ComponentType<TemplateProps>> = {
    'traditional-red': TraditionalRedTemplate,
    'modern-minimal': ModernMinimalTemplate,
    'premium-golden': PremiumGoldenTemplate,
    'floral-gold': TraditionalRedTemplate, // Using Traditional as base for now
    'royal-purple': TraditionalRedTemplate, // Using Traditional as base for now
    'fresh-green': ModernMinimalTemplate, // Using Modern as base for now
    'classic-blue': TraditionalRedTemplate, // Using Traditional as base for now
    'warm-orange': TraditionalRedTemplate, // Using Traditional as base for now
    'soft-pink': TraditionalRedTemplate, // Using Traditional as base for now
  };

  const TemplateComponent = templateComponents[templateId] || TraditionalRedTemplate;

  return (
    <TemplateComponent 
      data={data}
      colorTheme={colorTheme}
      visibleSections={visibleSections}
    />
  );
}
