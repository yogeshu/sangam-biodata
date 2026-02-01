export type TemplateMeta = {
  id: string;
  name: string;
  description: string;
  image: string;
  accent: string;
  background: string;
  category: 'traditional' | 'modern' | 'elegant' | 'minimal' | 'premium';
  isPremium?: boolean;
  colorThemes?: {
    name: string;
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  }[];
};

export const templates: TemplateMeta[] = [
  // Original Templates
  {
    id: "traditional-red",
    name: "Traditional Red",
    description: "Classic layout with auspicious motifs and deep red highlights.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#d41132",
    background: "#fff8f7",
    category: 'traditional',
    colorThemes: [
      { name: 'Classic Red', primary: '#d41132', secondary: '#8b0000', accent: '#FFD700', background: '#fff8f7' },
      { name: 'Maroon', primary: '#800000', secondary: '#5c0000', accent: '#D4AF37', background: '#fff5f5' },
      { name: 'Crimson', primary: '#dc143c', secondary: '#a01028', accent: '#FFD700', background: '#fff0f3' },
    ]
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean, typography-forward layout suitable for professional sharing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#0f172a",
    background: "#ffffff",
    category: 'modern',
    colorThemes: [
      { name: 'Dark Slate', primary: '#0f172a', secondary: '#1e293b', accent: '#3498DB', background: '#ffffff' },
      { name: 'Midnight', primary: '#1a1a2e', secondary: '#16213e', accent: '#0f4c75', background: '#f8f9fa' },
      { name: 'Navy', primary: '#000080', secondary: '#00004d', accent: '#4169E1', background: '#ffffff' },
    ]
  },
  {
    id: "floral-gold",
    name: "Floral Gold",
    description: "Elegant floral borders with soft gold accents for a graceful vibe.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#c2964b",
    background: "#fffaf3",
    category: 'elegant',
    colorThemes: [
      { name: 'Classic Gold', primary: '#c2964b', secondary: '#b8860b', accent: '#d4af37', background: '#fffaf3' },
      { name: 'Rose Gold', primary: '#b76e79', secondary: '#9d5c6a', accent: '#e0b0b8', background: '#fff5f7' },
      { name: 'Champagne', primary: '#f7e7ce', secondary: '#d4af37', accent: '#ffd700', background: '#fffef9' },
    ]
  },
  {
    id: "fresh-green",
    name: "Fresh Green",
    description: "Nature-inspired green theme with clean lines and modern feel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#16a34a",
    background: "#f0fdf4",
    category: 'modern',
    colorThemes: [
      { name: 'Emerald', primary: '#16a34a', secondary: '#15803d', accent: '#6ee7b7', background: '#f0fdf4' },
      { name: 'Teal', primary: '#0d9488', secondary: '#0f766e', accent: '#5eead4', background: '#f0fdfa' },
      { name: 'Forest', primary: '#166534', secondary: '#14532d', accent: '#84cc16', background: '#f7fee7' },
    ]
  },
  {
    id: "classic-blue",
    name: "Classic Blue",
    description: "Timeless blue theme with traditional elements and modern touch.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#2563eb",
    background: "#eff6ff",
    category: 'traditional',
    colorThemes: [
      { name: 'Sky Blue', primary: '#2563eb', secondary: '#1d4ed8', accent: '#93c5fd', background: '#eff6ff' },
      { name: 'Ocean', primary: '#0284c7', secondary: '#0369a1', accent: '#67e8f9', background: '#f0f9ff' },
      { name: 'Indigo', primary: '#4f46e5', secondary: '#4338ca', accent: '#a5b4fc', background: '#eef2ff' },
    ]
  },
  {
    id: "warm-orange",
    name: "Warm Orange",
    description: "Vibrant orange theme perfect for energetic and cheerful biodatas.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#ea580c",
    background: "#fff7ed",
    category: 'modern',
    colorThemes: [
      { name: 'Sunset', primary: '#ea580c', secondary: '#c2410c', accent: '#fdba74', background: '#fff7ed' },
      { name: 'Amber', primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24', background: '#fffbeb' },
      { name: 'Tangerine', primary: '#fb923c', secondary: '#f97316', accent: '#fed7aa', background: '#ffedd5' },
    ]
  },
  {
    id: "soft-pink",
    name: "Soft Pink",
    description: "Delicate pink design with feminine charm and graceful elements.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#ec4899",
    background: "#fdf2f8",
    category: 'elegant',
    colorThemes: [
      { name: 'Soft Pink', primary: '#ec4899', secondary: '#db2777', accent: '#fbcfe8', background: '#fdf2f8' },
      { name: 'Blush', primary: '#f9a8d4', secondary: '#f472b6', accent: '#fce7f3', background: '#fce7f3' },
      { name: 'Fuchsia', primary: '#d946ef', secondary: '#c026d3', accent: '#f0abfc', background: '#fdf4ff' },
    ]
  },
  
  // New Premium Templates
  {
    id: "premium-golden",
    name: "Premium Golden",
    description: "Luxurious golden border design with elegant corner decorations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#DAA520",
    background: "#F5F1E8",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Classic Golden', primary: '#B8860B', secondary: '#8B6914', accent: '#DAA520', background: '#F5F1E8' },
      { name: 'Bronze', primary: '#CD7F32', secondary: '#8B4513', accent: '#D2691E', background: '#FFF5EE' },
      { name: 'Copper', primary: '#B87333', secondary: '#8B5A2B', accent: '#D2691E', background: '#FAEBD7' },
    ]
  },
  {
    id: "premium-royal-purple",
    name: "Royal Purple Elegance",
    description: "Sophisticated purple theme with ornate borders and graceful typography.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#7c3aed",
    background: "#faf5ff",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Royal Purple', primary: '#7c3aed', secondary: '#6d28d9', accent: '#e9d5ff', background: '#faf5ff' },
      { name: 'Lavender', primary: '#a78bfa', secondary: '#8b5cf6', accent: '#ddd6fe', background: '#f5f3ff' },
      { name: 'Violet', primary: '#8b5cf6', secondary: '#7c3aed', accent: '#e9d5ff', background: '#faf5ff' },
    ]
  },
  {
    id: "premium-emerald",
    name: "Emerald Garden",
    description: "Nature-inspired green with floral elements and natural sophistication.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#059669",
    background: "#f0fdf4",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Forest Green', primary: '#047857', secondary: '#065f46', accent: '#6ee7b7', background: '#f0fdf4' },
      { name: 'Jade', primary: '#16a34a', secondary: '#15803d', accent: '#86efac', background: '#f0fdf4' },
      { name: 'Teal', primary: '#0d9488', secondary: '#0f766e', accent: '#5eead4', background: '#f0fdfa' },
    ]
  },
  {
    id: "premium-rose-gold",
    name: "Rose Gold Deluxe",
    description: "Feminine yet sophisticated rose gold theme with ornamental details.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#b76e79",
    background: "#fff5f7",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Rose Gold', primary: '#b76e79', secondary: '#9d5c6a', accent: '#e0b0b8', background: '#fff5f7' },
      { name: 'Blush', primary: '#f9a8d4', secondary: '#f472b6', accent: '#fce7f3', background: '#fce7f3' },
      { name: 'Mauve', primary: '#d5a8d4', secondary: '#c084d5', accent: '#e9d5ff', background: '#faf5ff' },
    ]
  },
  {
    id: "premium-sapphire",
    name: "Sapphire Blue",
    description: "Deep blue elegance with jewel-tone accents and refined aesthetics.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#1e3a8a",
    background: "#f0f9ff",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Sapphire', primary: '#1e3a8a', secondary: '#1e40af', accent: '#3b82f6', background: '#f0f9ff' },
      { name: 'Navy', primary: '#001f3f', secondary: '#003d5c', accent: '#0066cc', background: '#f8f9fa' },
      { name: 'Midnight', primary: '#0f172a', secondary: '#1e293b', accent: '#3b82f6', background: '#ffffff' },
    ]
  },
  {
    id: "premium-sunset",
    name: "Sunset Romance",
    description: "Warm orange and coral tones for a vibrant, joyful biodata.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#ea580c",
    background: "#fff7ed",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Sunset', primary: '#ea580c', secondary: '#c2410c', accent: '#fdba74', background: '#fff7ed' },
      { name: 'Peach', primary: '#fb923c', secondary: '#f97316', accent: '#fed7aa', background: '#ffedd5' },
      { name: 'Coral', primary: '#ff6b6b', secondary: '#ee5a52', accent: '#ffa07a', background: '#fff5f0' },
    ]
  },
  {
    id: "premium-vintage",
    name: "Vintage Charm",
    description: "Classic vintage aesthetic with muted earth tones and ornamental patterns.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#92400e",
    background: "#fef5e7",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Vintage Brown', primary: '#92400e', secondary: '#78350f', accent: '#d97706', background: '#fef5e7' },
      { name: 'Sepia', primary: '#a16207', secondary: '#7c2d12', accent: '#d4a373', background: '#fffbf0' },
      { name: 'Antique', primary: '#8b6914', secondary: '#6b5311', accent: '#d4a574', background: '#fffef9' },
    ]
  },
  {
    id: "premium-midnight",
    name: "Midnight Elegance",
    description: "Dark sophisticated theme with silver accents for modern appeal.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#1f2937",
    background: "#f9fafb",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Midnight', primary: '#1f2937', secondary: '#111827', accent: '#d1d5db', background: '#f9fafb' },
      { name: 'Charcoal', primary: '#374151', secondary: '#1f2937', accent: '#e5e7eb', background: '#f3f4f6' },
      { name: 'Graphite', primary: '#4b5563', secondary: '#2d3748', accent: '#cbd5e0', background: '#f7fafc' },
    ]
  },
  {
    id: "premium-coral-bliss",
    name: "Coral Bliss",
    description: "Tropical coral and turquoise combination for a fresh, modern look.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#ff6b9d",
    background: "#fff0f5",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Coral Pink', primary: '#ff6b9d', secondary: '#ff4757', accent: '#00d2d3', background: '#fff0f5' },
      { name: 'Tropical', primary: '#ff6348', secondary: '#ff5f3c', accent: '#26de81', background: '#fff5f3' },
      { name: 'Ocean Coral', primary: '#ff6b6b', secondary: '#ee5a52', accent: '#00bcd4', background: '#fff0f5' },
    ]
  },
  {
    id: "premium-moonlight",
    name: "Moonlight Silver",
    description: "Serene silver and white theme with subtle blue undertones.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#94a3b8",
    background: "#f1f5f9",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Moonlight', primary: '#64748b', secondary: '#475569', accent: '#cbd5e1', background: '#f1f5f9' },
      { name: 'Frost', primary: '#e2e8f0', secondary: '#cbd5e1', accent: '#94a3b8', background: '#f8fafc' },
      { name: 'Silver', primary: '#71717a', secondary: '#52525b', accent: '#d4d4d8', background: '#f4f4f5' },
    ]
  },
  {
    id: "premium-burgundy",
    name: "Burgundy Nobility",
    description: "Rich burgundy with gold accents for a traditional yet premium feel.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#800020",
    background: "#fdf5f5",
    category: 'premium',
    isPremium: true,
    colorThemes: [
      { name: 'Burgundy Gold', primary: '#800020', secondary: '#5c0a1f', accent: '#d4af37', background: '#fdf5f5' },
      { name: 'Wine', primary: '#722f37', secondary: '#541d1d', accent: '#d4af37', background: '#fff5f5' },
      { name: 'Maroon Gold', primary: '#8b0000', secondary: '#5c0000', accent: '#daa520', background: '#fff8f7' },
    ]
  },
];

