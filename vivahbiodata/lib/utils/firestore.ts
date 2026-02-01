export interface BiodataDraft {
  id?: string;
  userId: string;
  name: string;
  templateId: string;
  colorTheme?: string;
  data: any;
  visibleSections: any;
  createdAt: string;
  updatedAt: string;
}

// Firebase has been removed. These are no-op stubs to avoid runtime errors
// if older code paths still reference them.
export async function saveDraftToFirestore(): Promise<string> {
  throw new Error('Draft storage via Firebase is not available.');
}

export async function updateDraftInFirestore(): Promise<void> {
  throw new Error('Draft storage via Firebase is not available.');
}

export async function getUserDrafts(): Promise<BiodataDraft[]> {
  return [];
}

export async function getDraftById(): Promise<BiodataDraft | null> {
  return null;
}

export async function deleteDraftFromFirestore(): Promise<void> {
  throw new Error('Draft storage via Firebase is not available.');
}

export async function canCreateDraft(): Promise<boolean> {
  return false;
}
