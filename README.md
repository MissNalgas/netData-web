# Starter Next JS [![nextjs](https://img.shields.io/badge/maintained%20with-next-cc00ff.svg)](https://nextjs.org/)[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Este repositorio se realiza con el fin de tener un starter del framework Next JS

## Requisitos

Leer toda la documentación antes de iniciar cualquier proceso.

Estudiar y entender:

- [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Styled Components](https://styled-components.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Next 14] (https://nextjs.org/)
- [Pages and Layouts in Next](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

Tener instalado globalmente:

_Se recomienda tener instalado [homebrew](https://brew.sh/index_es) si se está usando MacOS para instalar todos los paquetes_

- [SourceTree](https://www.sourcetreeapp.com/)
- [Atom](https://atom.io/) o [Visual Studio Code](https://code.visualstudio.com)
- [nvm](https://github.com/creationix/nvm)
- [yarn](https://yarnpkg.com/lang/en/) o [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
- [standard](https://standardjs.com/)
- [prettier](https://prettier.io/docs/en/editors.html/) integrado con el editor o IDE.

## Instalación

Utilizar la versión correcta de NodeJS:

```sh
$ nvm use
```

Al tener la version de node indicada ejecutamos el siguiente comando, también se usa cada vez que se hace pull de la rama _develop_:

```sh
$ yarn o npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

--

## Metodología

### Iniciando el desarrollo

Cada nueva funcionalidad debe iniciarse creando un branch con el formato `feature/task-code` partiendo desde el branch _develop_ y cerrando a través de un Pull Request.

Cuando ser realizan ajustes a la nueva funcionalidad debe iniciarse creando un branch con el formato `fix/task-code` partiendo desde el branch _develop_ y cerrando a través de un Pull Request.

Exigimos mínimo _2 (dos) commits_ al día para mantener el buen flujo del proyecto y el crecimiento constante de los productos. Estos commits deben de evitar código que cambie frecuentemente.

Las tareas asignadas deben de estar como _TASK_ en JIRA/Trello partiendo desde las historias del sprint backlog con sus correspondientes criterios de aceptación. Como desarrollador se exigir que estas tareas estén bien planificadas y no permitir la ausencia de criterios de aceptación en las mismas.

### Haciendo un commit

Se usará [commitizen](https://github.com/commitizen/cz-cli) para crear commits productivos y con valor agregado. Cuando se vaya a hacer un commit ejecutar el siguiente comando:

```sh
% git add .
$ yarn commit
```

Seleccionar la opción adecuada.

### Estructura de carpetas en _infrastructure_

Esta carpeta es la encargada de contener todo el core de la aplicacion a continuacion se dara un ejemplo de como puede ser utilizada

TIP: En las constants debes tener el schema de _yup_

```
- infrastructure
    - components
        - epicName
            - Name.component.tsx
    - containers
        - Name.container.tsx
    - helpers
        - index.ts
    - services
        - name.service.ts
        - index.ts
    - store
        - nameStore
            - actions.ts
            - selectors.ts
            - initial-state.ts
            - name.selector.ts
            - index.ts
            - types
        - index.ts
            - reducers.ts
```

### Estructura de carpetas en _shared_

Esta carpeta es la encargada de contener todos los archivos que se utilizan _globalmente_

```
- shared
    - components
    - constants
    - helpers
    - hooks
    - utils
```

### Haciendo un pull request

A través del botón [New pull request](https://github.com/imaginamos/rappi-front-cb/compare) comparar el branch feature que estoy creando con develop, una vez allí rellenar correctamente el template que aparece automáticamente y esperar aprobación.

#### ¿Qué hacer en un Pull Request?

- Cerrar uno o más issues usando el template
- Hacer Pull Request fáciles de comprobar y verificar por parte funcional y de código.
- Estar pendiente de gitlab actions y su aprobación.
- Informar correctamente a los aprobadores para que estén pendientes tanto de la creación como de los cambios.
- Hacer los cambios oportunamente que sean solicitados.
- Evitar migraciones de códigos extensas, solo son aceptados previa aprobación del CTO, líder técnico o el Gerente de la Unidad.

### ¿Qué hacer?

- Generar buena documentación
- Utilizar hooks como `useCallback`, `useMemo` y `memo` para tener un buen performance
- Hacer mínimo 2 (dos) commits al día
- Hacer buen uso de los Pull Request
- Crear código que ayude a crecer el producto y ayude a los demás
- Usar variables de ambiente para las URLs, datos dinámicos y demás
- Usar `committizen` para generar los commits, el comando `yarn commit` agiliza ese proceso
- Normalizar los nombres de las variables con _CamelCase_
- Usar apropiadamente el _prettier_ y correr `yarn lint` conjunto `yarn pretty` antes de realizar el Pull Request
- Generar pruebas unitarias en lo máximo de lo posible y que pasen los test `yarn test`
- Siempre tener actualizado el repo con las versiones nuevas de cada dependencia

### ¿Qué NO hacer?

- NO tener _any_ en el código a no ser que sea MUY NECESARIO (Se debera explicar porque existe ese _any_)
- NO crear commits directos en Github.com sin usar el formato descrito anteriormente
- NO escribir URLs directamente en el código
- NO subir imágenes de pruebas
- NO dejar _data_ de prueba en el código
- NO dejar código comentado
- NO crear commits tipo WIP _(Work in progress)_
- NO crear Pull Request tipo WIP _(Work in progress)_
- NO ignorar reglas de _eslint_
- NO crear _packages_ que no estén aprobados
- NO hacer _push_ sin un apropiado _.gitignore_
- NO ignorar el `yarn.lock` (A menos de que se haga por aprobación)
- NO hacer commits complejos o con demasiados archivos
- NO versionar archivos que pesen más de _10MB_
- NO usar tecnologías que no estén aprobadas
- NO instalar dependencias que no estén aprobadas, siempre solicitar una aprobación vía Slack conjunto el equipo de proyecto
- NO crear _branches_ con nombres poco dicientes
- NO escribir variables tipo _foo1, foo2, banner1, banner2_ siempre usar nombres de variables claros y coherentes
