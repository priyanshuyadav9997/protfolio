/**
 * Utility for persisting and loading user-uploaded authentic certificate documents.
 * Supports Image files (PNG, JPG, WEBP) and PDF data URLs, with persistence in localStorage and IndexedDB.
 */

const STORAGE_KEY_PREFIX = 'py_real_cert_';

export type NormalizedCertId = 'mosaic' | 'nexus' | 'skilled-sapiens' | 'round-table';

export const normalizeCertId = (id: string): NormalizedCertId => {
  const clean = (id || '').toLowerCase().trim();
  if (clean === 'mosaic' || clean === 'cert-mosaic' || clean.includes('mosaic')) return 'mosaic';
  if (clean === 'nexus' || clean === 'cert-nexus' || clean.includes('nexus')) return 'nexus';
  if (
    clean === 'skilled-sapiens' ||
    clean === 'cert-internship' ||
    clean.includes('skilled') ||
    clean.includes('sapiens') ||
    clean.includes('internship')
  ) {
    return 'skilled-sapiens';
  }
  if (clean === 'round-table' || clean === 'cert-round-table' || clean.includes('round-table') || clean.includes('fluent')) {
    return 'round-table';
  }
  return 'mosaic'; // safe fallback only if completely unknown
};

export interface StoredCertificate {
  certificateId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  dataUrl: string;
  uploadedAt: string;
}

// In-memory cache for fast renders
const memoryCache: Record<string, StoredCertificate | null> = {};

export const getRealCertificate = (rawId: string): StoredCertificate | null => {
  const certificateId = normalizeCertId(rawId);

  if (memoryCache[certificateId] !== undefined) {
    return memoryCache[certificateId];
  }

  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${certificateId}`);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredCertificate;
      memoryCache[certificateId] = parsed;
      return parsed;
    }
  } catch (err) {
    console.error('Failed to read certificate from storage', err);
  }

  memoryCache[certificateId] = null;
  return null;
};

export const saveRealCertificate = (
  rawId: string,
  file: File,
  dataUrl: string
): StoredCertificate => {
  const certificateId = normalizeCertId(rawId);
  const certRecord: StoredCertificate = {
    certificateId,
    fileName: file.name,
    fileType: file.type,
    fileSize: file.size,
    dataUrl,
    uploadedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}${certificateId}`,
      JSON.stringify(certRecord)
    );
  } catch (e) {
    console.warn('localStorage exceeded, keeping in memory', e);
  }

  memoryCache[certificateId] = certRecord;
  window.dispatchEvent(
    new CustomEvent('py_real_cert_updated', { detail: { certificateId } })
  );
  return certRecord;
};

export const removeRealCertificate = (rawId: string): void => {
  const certificateId = normalizeCertId(rawId);
  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${certificateId}`);
  } catch (e) {
    console.error(e);
  }
  memoryCache[certificateId] = null;
  window.dispatchEvent(
    new CustomEvent('py_real_cert_updated', { detail: { certificateId } })
  );
};

export const clearAllRealCertificates = (): void => {
  const ids: NormalizedCertId[] = ['mosaic', 'nexus', 'skilled-sapiens', 'round-table'];
  ids.forEach((id) => {
    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}${id}`);
    } catch (e) {
      console.error(e);
    }
    memoryCache[id] = null;
  });
  window.dispatchEvent(
    new CustomEvent('py_real_cert_updated', { detail: {} })
  );
};
