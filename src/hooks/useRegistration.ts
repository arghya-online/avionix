import { useMutation } from '@tanstack/react-query'

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScoOc5Yos6qmM3dPvMnp9D8_MEKqFcWBgXEOR76Ht_2DJgj1Q/viewform'

interface RegistrationIntent {
  category: 'school' | 'college' | null
  timestamp: string
}

/**
 * Tracks the user's registration intent click and opens the external Google Form.
 * Replace the mutationFn body with a real POST to your CMS/API when ready.
 */
export function useRegistration() {
  return useMutation<void, Error, RegistrationIntent>({
    mutationFn: async (intent) => {
      // Simulate a brief async "tracking" call (swap for real API later)
      await new Promise<void>((resolve) => setTimeout(resolve, 600))
      console.info('[AVIONIX] Registration intent recorded:', intent)
      // Open the form in a new tab
      window.open(REGISTER_URL, '_blank', 'noopener,noreferrer')
    },
  })
}
