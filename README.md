# Demo: sistema de tipos de TypeScript

## Comandos

```bash
npm install
npm run build
npm run ok
npm run errors
npm run runtime
npm run js
```

## Para capturar

- Errores de TypeScript: `npm run errors`
- Ejemplos que compilan y funcionan: `npm run ok`
- Errores o comportamientos inesperados en runtime: `npm run runtime`
- Coerciones implicitas de JavaScript: `npm run js`

## Arbol de archivos

```text
.
|-- package.json
|-- tsconfig.json
|-- tsconfig.errors.json
|-- README.md
`-- src
    |-- 01_ok_tipos.ts
    |-- 02_errores_estaticos.ts
    |-- 03_inferencia.ts
    |-- 04_subtipado_genericos.ts
    |-- 05_coerciones_js.js
    `-- 06_runtime_error.ts
```

`tsconfig.json` compila solo los archivos correctos. `tsconfig.errors.json` compila solo el archivo con errores intencionales para que TypeScript muestre diagnosticos reales.
