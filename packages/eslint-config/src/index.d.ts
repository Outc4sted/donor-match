/// <reference types="../eslint-types.d.ts" />

import type { FlatCompat } from '@eslint/eslintrc'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export declare const defineConfig: typeof import('typescript-eslint').config
export declare const compat: FlatCompat

export declare const base: FlatConfig.ConfigArray
export declare const astro: FlatConfig.ConfigArray
export declare const playwright: FlatConfig.ConfigArray
export declare const react: FlatConfig.ConfigArray
export declare const storybook: FlatConfig.ConfigArray
