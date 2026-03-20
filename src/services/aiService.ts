import { GoogleGenAI } from '@google/genai';

// Initialize the Gemini AI client
// Note: In a real application, the API key would be securely managed
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || 'dummy_key' });

export class AIError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'AIError';
  }
}

export const aiService = {
  /**
   * Generic wrapper for AI generation calls with robust error handling
   */
  async generateContent(prompt: string, model: string = 'gemini-3-flash-preview', options: any = {}) {
    try {
      console.log(`[AI Service] Generating content with model: ${model}`);
      
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: options
      });

      if (!response || !response.text) {
        throw new AIError(
          'The AI returned an empty response.',
          'EMPTY_RESPONSE'
        );
      }

      return response.text;
    } catch (error: any) {
      // Log detailed error information for debugging
      console.error('[AI Service] Error generating content:', {
        error: error.message || error,
        stack: error.stack,
        prompt: prompt.substring(0, 100) + '...', // Log partial prompt for context
        model,
        options
      });

      // Map technical errors to user-friendly messages
      let userFriendlyMessage = 'We encountered an issue while processing your request. Please try again later.';
      let errorCode = 'UNKNOWN_ERROR';

      if (error instanceof AIError) {
        userFriendlyMessage = error.message;
        errorCode = error.code;
      } else if (error.message?.includes('API key not valid')) {
        userFriendlyMessage = 'Our AI service is currently unavailable due to configuration issues. Please contact support.';
        errorCode = 'INVALID_API_KEY';
      } else if (error.message?.includes('Quota exceeded')) {
        userFriendlyMessage = 'We are currently experiencing high demand. Please try again in a few minutes.';
        errorCode = 'QUOTA_EXCEEDED';
      } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
        userFriendlyMessage = 'Network error. Please check your connection and try again.';
        errorCode = 'NETWORK_ERROR';
      } else if (error.status === 400) {
        userFriendlyMessage = 'The request could not be processed. Please rephrase your prompt and try again.';
        errorCode = 'BAD_REQUEST';
      }

      throw new AIError(userFriendlyMessage, errorCode, error);
    }
  },

  /**
   * Example specific AI function: Analyze business data
   */
  async analyzeBusinessData(data: string) {
    const prompt = `Analyze the following business data and provide insights:\n\n${data}`;
    return this.generateContent(prompt, 'gemini-3.1-pro-preview');
  }
};
