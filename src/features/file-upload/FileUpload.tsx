'use client';

import { useEffect, useState } from 'react';
import UploadDropzone from './components/UploadDropzone';
import UploadLoader from './components/UploadLoader';
import SelectedFiles from './components/SelectedFiles';

type UploadStep = 'select' | 'loading' | 'details';

export default function FileUpload() {
  const [step, setStep] = useState<UploadStep>('select');
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setStep('loading');
  };

  const handleReset = () => {
    setFiles([]);
    setStep('select');
  };

  useEffect(() => {
    if (step !== 'loading') {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStep('details');
    }, 2000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [step]);

  if (step === 'loading') {
    return <UploadLoader files={files} onCancel={handleReset} />;
  }

  if (step === 'details') {
    return <SelectedFiles files={files} onReset={handleReset} />;
  }

  return <UploadDropzone onFilesSelect={handleFilesSelect} />;
}
