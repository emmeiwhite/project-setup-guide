import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        files: ['**/*.ts'], // 👈 ensure TypeScript files are included
        ignores: ['dist', 'node_modules'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            'no-console': 'off',
        },
    },
)
