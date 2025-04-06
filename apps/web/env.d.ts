/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DONOR_MATCH_API: string
  readonly SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  interface Locals {
    siteName: string
    apiClient: import('@ts-rest/core').InitClientReturn<
      typeof import('@repo/ts-rest').contract,
      {
        baseUrl: string
      }
    >
  }
}
