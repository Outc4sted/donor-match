/* eslint-disable no-restricted-exports */

/**
 * Since ESLint and many plugins are written in JavaScript, we need to provide
 * or change some types to make them work with TypeScript.
 */

// From: https://github.com/t3-oss/create-t3-turbo/blob/main/tooling/eslint/types.d.ts

declare module '@eslint/js' {
  import type { Linter } from 'eslint'

  export const configs: {
    readonly recommended: { readonly rules: Readonly<Linter.RulesRecord> }
    readonly all: { readonly rules: Readonly<Linter.RulesRecord> }
  }
}

declare module '@eslint/eslintrc' {
  import type { Linter } from 'eslint'

  export class FlatCompat {
    constructor({
      baseDirectory,
      resolvePluginsRelativeTo,
    }: {
      baseDirectory: string
      resolvePluginsRelativeTo: string
    })

    extends(extendsValue: string): Linter.Config & {
      [Symbol.iterator]: () => IterableIterator<Linter.Config>
    }

    config(config: Linter.Config): Linter.Config & {
      [Symbol.iterator]: () => IterableIterator<Linter.Config>
    }
  }
}

declare module '@eslint/compat' {
  import type { Linter } from 'eslint'
  import type { ConfigWithExtends } from 'typescript-eslint'

  export const fixupConfigRules: (
    config: string | Linter.Config,
  ) => ConfigWithExtends[]
}

declare module 'eslint-plugin-regexp' {
  import type { Linter } from 'eslint'
  import type { ConfigWithExtends } from 'typescript-eslint'

  export const configs: {
    'flat/recommended': {
      [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>
      rules: Linter.RulesRecord
    }
    'flat/all': {
      [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>
      rules: Linter.RulesRecord
    }
  }
}

declare module 'eslint-plugin-turbo' {
  import type { Linter, Rule } from 'eslint'

  export const configs: {
    recommended: { rules: Linter.RulesRecord }
  }
  export const rules: Record<string, Rule.RuleModule>
}

declare module 'eslint-config-xo/space' {
  import type { Linter } from 'eslint'
  const config: Linter.Config

  export default config
}

declare module 'eslint-config-xo-react/space' {
  import type { Linter } from 'eslint'
  const config: Linter.Config

  export default config
}

declare module 'eslint-plugin-better-tailwindcss' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      recommended: Linter.Config
      'recommended-error': Linter.Config
      'recommended-warn': Linter.Config
    }
  }

  export default plugin
}

declare module 'eslint-plugin-astro' {
  import type { ESLint, Linter } from 'eslint'
  import type { ConfigWithExtends } from 'typescript-eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      'jsx-a11y-strict': Linter.Config
      'flat/recommended': Linter.Config
      recommended: {
        [Symbol.iterator]: () => IterableIterator<ConfigWithExtends>
        rules: Linter.RulesRecord
      }
    }
  }

  export default plugin
}

declare module '@repo/eslint/base' {
  import type { ConfigWithExtends } from 'typescript-eslint'
  const base: { [Symbol.iterator]: () => IterableIterator<ConfigWithExtends> }
  export default base
}

declare module '@repo/eslint/astro' {
  import type { ConfigWithExtends } from 'typescript-eslint'
  const astro: { [Symbol.iterator]: () => IterableIterator<ConfigWithExtends> }
  export default astro
}

declare module '@repo/eslint/react' {
  import type { ConfigWithExtends } from 'typescript-eslint'
  const react: { [Symbol.iterator]: () => IterableIterator<ConfigWithExtends> }
  export default react
}
