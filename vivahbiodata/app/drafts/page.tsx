"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Trash2, Edit, Plus, ArrowLeft } from "lucide-react";
import CommonLayout from "@/components/common/CommonLayout";

export default function DraftsPage() {
  const router = useRouter();
  const [drafts, setDrafts] = useState<BiodataDraft[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
      return;
    }

    if (user) {
      loadDrafts();
    }
  }, [user, loading, router]);

  const loadDrafts = async () => {
    if (!user) return;

    try {
      const draftsData = await getUserDrafts(user.uid);
      setDrafts(draftsData);
    } catch (error) {
      console.error('Error loading drafts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (draftId: string) => {
    if (!confirm('Are you sure you want to delete this draft?')) return;
    if (!user) return;

    try {
      await deleteDraftFromFirestore(user.uid, draftId);
      setDrafts(drafts.filter(d => d.id !== draftId));
    } catch (error) {
      console.error('Error deleting draft:', error);
      alert('Failed to delete draft');
    }
  };

  const handleEdit = (draftId: string) => {
    router.push(`/create?draft=${draftId}`);
  };

  if (loading || isLoading) {
    return (
      <CommonLayout>
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
          <p className="text-text-muted">Loading your drafts...</p>
        </div>
      </CommonLayout>
    );
  }

  return (
    <CommonLayout>
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main font-body">
        {/* Header */}
        <header className="border-b border-border-soft bg-white dark:bg-background-dark shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition"
                >
                  <ArrowLeft size={20} />
                  <span className="text-sm font-medium">Back</span>
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-text-main">My Drafts</h1>
                  <p className="text-sm text-text-muted mt-1">
                    You can save up to 2 draft biodatas
                  </p>
                </div>
              </div>
              <button
                onClick={() => router.push('/templates')}
                disabled={drafts.length >= 2}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus size={18} />
                New Biodata
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
          {drafts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                <FileText size={32} />
              </div>
              <h2 className="text-2xl font-bold text-text-main mb-2">
                No Drafts Yet
              </h2>
              <p className="text-text-muted mb-6">
                Start creating your first biodata
              </p>
              <button
                onClick={() => router.push('/templates')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
              >
                <Plus size={18} />
                Create Biodata
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  className="bg-white dark:bg-midnight-accent rounded-xl border border-border-soft shadow-md hover:shadow-lg transition p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-text-main">{draft.name}</h3>
                        <p className="text-sm text-text-muted">
                          Updated {new Date(draft.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => draft.id && handleEdit(draft.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => draft.id && handleDelete(draft.id)}
                      className="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty slot card */}
              {drafts.length < 2 && (
                <div className="bg-white dark:bg-midnight-accent rounded-xl border-2 border-dashed border-border-soft p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
                  <Plus size={32} className="text-text-muted mb-3" />
                  <p className="text-text-muted font-medium mb-4">
                    Empty Draft Slot
                  </p>
                  <button
                    onClick={() => router.push('/templates')}
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition text-sm"
                  >
                    Create New
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </CommonLayout>
  );
}
