export type TemplateMeta = {
  id: string;
  name: string;
  description: string;
  image: string;
  accent: string;
  background: string;
};

export const templates: TemplateMeta[] = [
  {
    id: "traditional-red",
    name: "Traditional Red",
    description: "Classic layout with auspicious motifs and deep red highlights.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg9GMs_Sl2zRqLFkeOG58DivtdA4oEY67HtRAYWHxffMbiWgq4WU9mQWYVHRoyDldm38yxrHgEWV9_R7UCsxQ8xWu987lePir27VeoK_OgWTfN-M1opBXLDmK0FN-RE17SSimGEk1VaOkAq9-TuMXuZKDEHrHF0E73LjfN7j4zugK9ZW-AbLQ3Cjwuaw2bEu74aNKG8WW3prqngfpBSVQ4JniACdZ8OYgnt9LGcS2EyoYIX8pLjv7cb9ziL68LQ5c3QI8ztI54VlPC",
    accent: "#d41132",
    background: "#fff8f7",
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean, typography-forward layout suitable for professional sharing.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAsPSyxKA6wBARfPygv_NEESOcbLz2z_5itcB1yCMvMJeEvUYJt8MB9pk7zKoPV4hyOfAuIemwUAFtROhN-RW1lhZUepzC2pdFTgBhhIFKYhNmLUkzpYR-cFQWYcH-s0inKpnamtqbRn2FGDDXnepnX7ZZpkPPSb489DSDicuG_dSAc50BivLZI3EGC7u9iLMFSKI95NDj9LjuRnFRSil_TzZzGptqfYAD52VMU7gy_9sSFPC_FcvlnS95JO0ff6jQldcerSYYik91",
    accent: "#0f172a",
    background: "#ffffff",
  },
  {
    id: "floral-gold",
    name: "Floral Gold",
    description: "Elegant floral borders with soft gold accents for a graceful vibe.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_OiMMZu7LrHnLo7pA3G0Nmswp_ErrlYFc8lb0yAb4UbaQ2oU4Vq3x0XIEtPtvNNCIP7VRJQSO-LnAq8N-R6eWVK9fNK4w3QTy2iE4Hn8C4BPZTi6Q-I0VSFplqxXapWXawqSlxuWeeiCcEeillRIH-xIX0mCNl_-dScKFCfKNyo8zZqTHqLp_7Xlxs6JYq-BxR8u6-eZniRFA0ze0_y385-UIAjzSgUeyumgm-T3dU1OJ5Q5IxFAMNZI9YgFcziaMb9FJCJ-YcbwV",
    accent: "#c2964b",
    background: "#fffaf3",
  },
];
