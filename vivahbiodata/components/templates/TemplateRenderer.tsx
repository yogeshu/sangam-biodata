import { TemplateProps } from './BaseTemplate';
import TraditionalRedTemplate from './TraditionalRedTemplate';
import ModernMinimalTemplate from './ModernMinimalTemplate';
import PremiumGoldenTemplate from './PremiumGoldenTemplate';
import UnifiedPremiumTemplate from './UnifiedPremiumTemplate';
import { templates } from '@/lib/templates';

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
  visibleSections,
  layoutStyle
}: TemplateRendererProps) {
  
  // Get template metadata
  const templateMeta = templates.find(t => t.id === templateId);
  
  // For premium templates, use UnifiedPremiumTemplate
  if (templateMeta?.isPremium || templateId.startsWith('premium-')) {
    return (
      <UnifiedPremiumTemplate
        data={data}
        colorTheme={colorTheme}
        visibleSections={visibleSections}
        layoutStyle={layoutStyle}
        primaryColor={templateMeta?.accent || '#DAA520'}
        secondaryColor={templateMeta?.accent || '#B8860B'}
        accentColor={templateMeta?.accent || '#DAA520'}
        backgroundColor={templateMeta?.background || '#F5F1E8'}
        hasDecorativeBorder={true}
        borderStyle={templateId.includes('royal') || templateId.includes('burgundy') ? 'ornate' : 'simple'}
      />
    );
  }
  
  // Map template IDs to their components for legacy templates
  const templateComponents: Record<string, React.ComponentType<TemplateProps>> = {
    'traditional-red': TraditionalRedTemplate,
    'modern-minimal': ModernMinimalTemplate,
    'floral-gold': TraditionalRedTemplate,
    'fresh-green': ModernMinimalTemplate,
    'classic-blue': TraditionalRedTemplate,
    'warm-orange': TraditionalRedTemplate,
    'soft-pink': TraditionalRedTemplate,
  };

  const TemplateComponent = templateComponents[templateId] || UnifiedPremiumTemplate;

  return (
    <TemplateComponent 
      data={data}
      colorTheme={colorTheme}
      visibleSections={visibleSections}
      layoutStyle={layoutStyle}
    />
  );
}

