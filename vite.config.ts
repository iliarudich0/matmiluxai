import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  // Custom domain is present (CNAME in repo), so base '/' is correct.
  // If you ever deploy under a repo subpath, set VITE_BASE='/<repo>/' and uncomment below.
  // base: process.env.VITE_BASE ?? '/',
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        privacy: path.resolve(__dirname, 'privacy/index.html'),
        tikMathikPrivacyPL: path.resolve(__dirname, 'polityka_prywatnosci.html'),
        tikMathik: path.resolve(__dirname, 'projects/tik-mathik/index.html'),
        tikMathikPrivacy: path.resolve(__dirname, 'projects/tik-mathik/privacy.html'),
        tikDrive: path.resolve(__dirname, 'projects/tikdrive/index.html'),
        tikDrivePrivacy: path.resolve(__dirname, 'projects/tikdrive/privacy.html'),
        tikEveryLang: path.resolve(__dirname, 'projects/tikeverylang/index.html'),
        tikLawyer: path.resolve(__dirname, 'projects/tiklawyer/index.html'),
        tikLawyerPrivacy: path.resolve(__dirname, 'projects/tiklawyer/privacy.html'),
        safeZoneX: path.resolve(__dirname, 'projects/safezonex/index.html'),
        safeZoneXPrivacy: path.resolve(__dirname, 'projects/safezonex/privacy.html')
      }
    }
  }
});
