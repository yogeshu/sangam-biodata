"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function DraftsPage() {
  return (
    <div className="min-h-screen bg-background-light text-text-main font-body">
      <header className="border-b border-border-soft bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold text-primary">Drafts</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 md:px-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
          <FileText size={32} />
        </div>
        <h2 className="text-2xl font-bold text-text-main mb-3">Drafts are stored locally</h2>
        <p className="text-text-muted mb-6">
          Firebase login and cloud drafts have been removed. Your drafts live in your browser only.
        </p>
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
        >
          Create Biodata
        </Link>
      </main>
    </div>
  );
}
