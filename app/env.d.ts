/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DONOR_MATCH_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
