const env = import.meta.env

export const ENV = {
  EMAILJS_SERVICE_ID: env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  EMAILJS_TEMPLATE_ID: env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  EMAILJS_PUBLIC_KEY: env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
  SHODAN_API_KEY: env.VITE_SHODAN_API_KEY as string | undefined,
  VIRUS_TOTAL_API_KEY: env.VITE_VIRUS_TOTAL_API_KEY as string | undefined,
  TRELLO_API_KEY: env.VITE_TRELLO_API_KEY as string | undefined,
  TRELLO_API_TOKEN: env.VITE_TRELLO_API_TOKEN as string | undefined,
  API_URL: env.VITE_API_URL as string | undefined,
  IS_DEV: env.DEV as boolean,
  IS_PROD: env.PROD as boolean,
} as const
