# React + TypeScript + Vite

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
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



![Vite + React + TS - Google Chrome 30_11_2566 0_23_49](https://github.com/Maztermon/skills-assessment-test-at-BBL/assets/43300766/7d20c8e7-64f4-433f-ab33-a989aa7f9b85)

![Vite + React + TS - Google Chrome 30_11_2566 0_23_59](https://github.com/Maztermon/skills-assessment-test-at-BBL/assets/43300766/7bd87638-8d16-4b46-9429-94eb75742c11)

![Vite + React + TS - Google Chrome 30_11_2566 0_24_05](https://github.com/Maztermon/skills-assessment-test-at-BBL/assets/43300766/6b2e9f7e-3d73-4847-aa3a-be571faf13ac)

![Vite + React + TS - Google Chrome 30_11_2566 0_24_12](https://github.com/Maztermon/skills-assessment-test-at-BBL/assets/43300766/76a47dae-8333-4a45-836f-3e1b8013ceb8)

ข้อมูลที่แสดงผมได้ใช้ตัว Mock-data เนื่องจากยังไม่ได้เชื่อมข้อมูลจากทาง backend
