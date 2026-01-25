export type TemplateMeta = {
  id: string;
  name: string;
  description: string;
  image: string;
  accent: string;
  background: string;
  category: 'traditional' | 'modern' | 'elegant' | 'minimal';
  isPremium?: boolean;
  colorThemes?: {
    name: string;
    primary: string;
    secondary: string;
    background: string;
  }[];
};

export const templates: TemplateMeta[] = [
  {
    id: "traditional-red",
    name: "Traditional Red",
    description: "Classic layout with auspicious motifs and deep red highlights.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#d41132",
    background: "#fff8f7",
    category: 'traditional',
    colorThemes: [
      { name: 'Classic Red', primary: '#d41132', secondary: '#8b0000', background: '#fff8f7' },
      { name: 'Maroon', primary: '#800000', secondary: '#5c0000', background: '#fff5f5' },
      { name: 'Crimson', primary: '#dc143c', secondary: '#a01028', background: '#fff0f3' },
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
      { name: 'Dark Slate', primary: '#0f172a', secondary: '#1e293b', background: '#ffffff' },
      { name: 'Midnight', primary: '#1a1a2e', secondary: '#16213e', background: '#f8f9fa' },
      { name: 'Navy', primary: '#000080', secondary: '#00004d', background: '#ffffff' },
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
      { name: 'Classic Gold', primary: '#c2964b', secondary: '#b8860b', background: '#fffaf3' },
      { name: 'Rose Gold', primary: '#b76e79', secondary: '#9d5c6a', background: '#fff5f7' },
      { name: 'Champagne', primary: '#f7e7ce', secondary: '#d4af37', background: '#fffef9' },
    ]
  },
  {
    id: "elegant-purple",
    name: "Royal Purple",
    description: "Sophisticated purple theme with ornate borders and elegant typography.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#7c3aed",
    background: "#faf5ff",
    category: 'elegant',
    isPremium: true,
    colorThemes: [
      { name: 'Royal Purple', primary: '#7c3aed', secondary: '#6d28d9', background: '#faf5ff' },
      { name: 'Lavender', primary: '#a78bfa', secondary: '#8b5cf6', background: '#f5f3ff' },
      { name: 'Violet', primary: '#8b5cf6', secondary: '#7c3aed', background: '#faf5ff' },
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
      { name: 'Emerald', primary: '#16a34a', secondary: '#15803d', background: '#f0fdf4' },
      { name: 'Teal', primary: '#0d9488', secondary: '#0f766e', background: '#f0fdfa' },
      { name: 'Forest', primary: '#166534', secondary: '#14532d', background: '#f7fee7' },
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
      { name: 'Sky Blue', primary: '#2563eb', secondary: '#1d4ed8', background: '#eff6ff' },
      { name: 'Ocean', primary: '#0284c7', secondary: '#0369a1', background: '#f0f9ff' },
      { name: 'Indigo', primary: '#4f46e5', secondary: '#4338ca', background: '#eef2ff' },
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
      { name: 'Sunset', primary: '#ea580c', secondary: '#c2410c', background: '#fff7ed' },
      { name: 'Amber', primary: '#f59e0b', secondary: '#d97706', background: '#fffbeb' },
      { name: 'Tangerine', primary: '#fb923c', secondary: '#f97316', background: '#ffedd5' },
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
      { name: 'Soft Pink', primary: '#ec4899', secondary: '#db2777', background: '#fdf2f8' },
      { name: 'Blush', primary: '#f9a8d4', secondary: '#f472b6', background: '#fce7f3' },
      { name: 'Fuchsia', primary: '#d946ef', secondary: '#c026d3', background: '#fdf4ff' },
    ]
  },
];
