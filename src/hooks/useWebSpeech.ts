import { useState, useRef, useEffect, useCallback } from 'react';

type SpeechState = {
  isListening: boolean;
  transcript: string;
  isSupported: boolean;
  error: string | null;
};

export function useWebSpeech() {
  const [state, setState] = useState<SpeechState>({
    isListening: false,
    transcript: '',
    isSupported: false,
    error: null,
  });

  const recognitionRef = useRef<any>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // TTS Setup
      if ('speechSynthesis' in window) {
        synthesisRef.current = window.speechSynthesis;
      }

      // STT Setup
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false; // Stop after one sentence/phrase
        recognition.interimResults = true; // Show results as they speak
        recognition.lang = 'nl-NL'; // Default to Dutch for this use case

        recognition.onstart = () => {
          setState((prev) => ({ ...prev, isListening: true, error: null }));
        };

        recognition.onresult = (event: any) => {
          let finalTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              // We could handle interim results here if needed
              finalTranscript += event.results[i][0].transcript;
            }
          }
          setState((prev) => ({ ...prev, transcript: finalTranscript }));
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setState((prev) => ({ 
            ...prev, 
            isListening: false, 
            error: event.error === 'not-allowed' ? 'Microphone access denied' : event.error 
          }));
        };

        recognition.onend = () => {
          setState((prev) => ({ ...prev, isListening: false }));
        };

        recognitionRef.current = recognition;
        setState((prev) => ({ ...prev, isSupported: true }));
      } else {
        setState((prev) => ({ ...prev, isSupported: false, error: 'Speech recognition not supported in this browser.' }));
      }
    }
  }, []);

  const speak = useCallback((text: string, rate: number = 0.85, lang: string = 'nl-NL') => {
    if (synthesisRef.current) {
      // Cancel any ongoing speech
      synthesisRef.current.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate; // Use the provided rate
      synthesisRef.current.speak(utterance);
    }
  }, []);

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        // Reset transcript on new start
        setState((prev) => ({ ...prev, transcript: '', error: null }));
        recognitionRef.current.start();
      } catch (e) {
        console.error("Failed to start recognition:", e);
      }
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  return {
    ...state,
    speak,
    startListening,
    stopListening,
  };
}
