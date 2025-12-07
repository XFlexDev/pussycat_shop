export interface DiaryEntry {
  id: string;
  text: string;
  date: string;
}

export function saveEntry(entry: DiaryEntry) {
  const existing = JSON.parse(localStorage.getItem("entries") || "[]");
  existing.push(entry);
  localStorage.setItem("entries", JSON.stringify(existing));
}

export function getEntries(): DiaryEntry[] {
  return JSON.parse(localStorage.getItem("entries") || "[]");
}