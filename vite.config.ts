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
        otherProjects: path.resolve(__dirname, 'other-projects/index.html'),
        tikMathikPrivacyPL: path.resolve(__dirname, 'polityka_prywatnosci.html'),
        tikMathik: path.resolve(__dirname, 'projects/tik-mathik/index.html'),
        tikMathikPrivacy: path.resolve(__dirname, 'projects/tik-mathik/privacy.html'),
        tikDrive: path.resolve(__dirname, 'projects/tikdrive/index.html'),
        tikDrivePrivacy: path.resolve(__dirname, 'projects/tikdrive/privacy.html'),
        tikEveryLang: path.resolve(__dirname, 'projects/tikeverylang/index.html'),
        tikLawyer: path.resolve(__dirname, 'projects/tiklawyer/index.html'),
        tikLawyerPrivacy: path.resolve(__dirname, 'projects/tiklawyer/privacy.html'),
        safeZoneX: path.resolve(__dirname, 'projects/safezonex/index.html'),
        safeZoneXPrivacy: path.resolve(__dirname, 'projects/safezonex/privacy.html'),
        carFixAI: path.resolve(__dirname, 'projects/carfix-ai/index.html'),
        carFixAIPrivacy: path.resolve(__dirname, 'projects/carfix-ai/privacy.html'),
        healthSymptomAI: path.resolve(__dirname, 'projects/healthsymptom-ai/index.html'),
        healthSymptomAIPrivacy: path.resolve(__dirname, 'projects/healthsymptom-ai/privacy.html'),
        explainLikeAI: path.resolve(__dirname, 'projects/explainlike-ai/index.html'),
        explainLikeAIPrivacy: path.resolve(__dirname, 'projects/explainlike-ai/privacy.html'),
        interviewCoachAI: path.resolve(__dirname, 'projects/interviewcoach-ai/index.html'),
        interviewCoachAIPrivacy: path.resolve(__dirname, 'projects/interviewcoach-ai/privacy.html'),
        memoryBoostAI: path.resolve(__dirname, 'projects/memoryboost-ai/index.html'),
        memoryBoostAIPrivacy: path.resolve(__dirname, 'projects/memoryboost-ai/privacy.html'),
        contractScanAI: path.resolve(__dirname, 'projects/contractscan-ai/index.html'),
        contractScanAIPrivacy: path.resolve(__dirname, 'projects/contractscan-ai/privacy.html'),
        studyPlannerAI: path.resolve(__dirname, 'projects/studyplanner-ai/index.html'),
        studyPlannerAIPrivacy: path.resolve(__dirname, 'projects/studyplanner-ai/privacy.html'),
        tikPlantAI: path.resolve(__dirname, 'projects/tikplant-ai/index.html'),
        tikPlantAIPrivacy: path.resolve(__dirname, 'projects/tikplant-ai/privacy.html'),
        tikFinanceAI: path.resolve(__dirname, 'projects/tikfinance-ai/index.html'),
        tikFinanceAIPrivacy: path.resolve(__dirname, 'projects/tikfinance-ai/privacy.html'),
        tikSpaceZAI: path.resolve(__dirname, 'projects/tikspacez-ai/index.html'),
        tikSpaceZAIPrivacy: path.resolve(__dirname, 'projects/tikspacez-ai/privacy.html'),
        tikDietXAI: path.resolve(__dirname, 'projects/tikdietx-ai/index.html'),
        tikDietXAIPrivacy: path.resolve(__dirname, 'projects/tikdietx-ai/privacy.html'),
        tipExamAI: path.resolve(__dirname, 'projects/tipexam-ai/index.html'),
        tipExamAIPrivacy: path.resolve(__dirname, 'projects/tipexam-ai/privacy.html'),
        tikCorporateAI: path.resolve(__dirname, 'projects/tikcorporate-ai/index.html'),
        tikCorporateAIPrivacy: path.resolve(__dirname, 'projects/tikcorporate-ai/privacy.html'),
        aiHouseRedesign: path.resolve(__dirname, 'projects/ai-house-redesign/index.html'),
        aiHouseRedesignPrivacy: path.resolve(__dirname, 'projects/ai-house-redesign/privacy.html'),
        adTikLocker: path.resolve(__dirname, 'projects/adtiklocker/index.html'),
        audioSummariser: path.resolve(__dirname, 'projects/audio-summariser/index.html')
      }
    }
  }
});
