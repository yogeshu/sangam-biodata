"use client";

import { useRouter } from "next/navigation";
import { templates } from "@/lib/templates";
import { Eye, Play, Heart, ArrowLeft } from "lucide-react";
import CommonLayout from "@/components/common/CommonLayout";

export default function TemplatesPage() {
  const router = useRouter();

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background-light text-text-main font-body">
        {/* Header */}
        <header className="border-b border-border-soft bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition self-start"
              >
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Back</span>
              </button>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-text-main">Biodata Templates</h1>
                  <p className="text-sm text-text-muted mt-1">Choose from {templates.length}+ beautiful designs</p>
                </div>
              </div>
            </div>
          </div>
        </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Filters/Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold transition hover:bg-primary-dark">
            All Templates
          </button>
          {["Classic", "Modern", "Traditional", "Elegant", "Premium"].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border border-border-soft text-text-main text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} onPreview={() => router.push(`/templates/${template.id}`)} />
          ))}
        </div>
      </main>
    </div>
    </CommonLayout>
  );
}

function TemplateCard({ template, onPreview }: { template: any; onPreview: () => void }) {
  const router = useRouter();

  return (
    <div className="group rounded-2xl border border-border-soft bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Preview Image */}
      <div className="relative h-96 bg-gradient-to-br from-background-light to-border-soft flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="text-center z-10">
          <div className="flex size-20 items-center justify-center rounded-full bg-white/80 mx-auto mb-4 group-hover:scale-110 transition">
            <Heart size={32} className="text-primary" />
          </div>
          <p className="text-text-muted font-semibold text-sm">{template.name}</p>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button
            onClick={onPreview}
            className="flex items-center gap-2 px-4 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            <Eye size={16} />
            Preview
          </button>
          <button
            onClick={() => router.push("/create?template=" + template.id)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
          >
            <Play size={16} />
            Use
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-main mb-2">{template.name}</h3>
        <p className="text-sm text-text-muted mb-4">{template.description}</p>

        <div className="flex items-center gap-2 text-xs">
          {template.isPremium && (
            <span className="px-2 py-1 bg-primary/10 text-primary font-bold rounded-full">Premium</span>
          )}
          {template.category && (
            <span className="px-2 py-1 bg-border-soft text-text-muted rounded-full">{template.category}</span>
          )}
        </div>

        {/* Stats */}
        <div className="mt-4 pt-4 border-t border-border-soft flex justify-between text-xs text-text-muted">
          <span>⭐ {template.rating || "4.8"}</span>
          <span>👥 {template.downloads || "1.2K"} used</span>
        </div>
      </div>
    </div>
  );
}
