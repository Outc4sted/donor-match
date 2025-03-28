/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DONOR_MATCH_API: string
  readonly SITE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
