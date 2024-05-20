<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->


# Projeto com Vite+ React.tsx

### Estruturas de pastas:

`assets`: Armazenar imagens leves, svgs, icons, etc.

`components`: Componentes reutilizaveis na aplicacao, normalmente components que sao unidades (input, button,modal, etc.)

`pages`: Paginas que usam varios componentes. Sao as paginas que serao renderizadas para o cliente.

`hooks`: Funcoes com states personalizadas (useScreenSize, useLocalStorage) e utilizaveis em toda a aplicacao, genericos e normalmente usados em outras aplicacoes tambem.

`services`: Ficam as configuracoes de https clients, normalmente utilizando axios. Onde fica os arquivos que se comunicam com APIs externas.

`store`: Ficam as definicoes de state managers, context api, zustand, redux.

`types`: Armazenam as tipagens de typescript e interfaces que sao comuns em varios arquivos do projetos (interface e types globais)

`util`: Funcoes utilitarias, exemplo: formatCurrency, commonDivision, formatForm,convertTimeZone, etc. Funcoes que sao utilizadas em toda aplicacao e normalmente sao arquivos de js ou ts puros. 