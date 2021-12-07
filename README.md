# Tronion UI

Run dev server:

```bash
npm run dev
```

Home page is in `pages/index.js`, the user pages are in `pages/account` directory, theme file `utils/theme.js`, modal component logic is already set from previous project and integrated with nextjs in the `_document.js` file, only redesign has to be done. off-canvas nav overlay hasn't been added. I used classNames to create variants for the reusable components.

All new components to be created are only variants of reusable components in the `components/commons`, directory except for:
- Dashboard side bar
- Dashboard task list and buttons
- ICO countdown card

**NOTE**
- All images have a wrapper for styling as conventional styling can't be used on the [next/image](https://nextjs.org/docs/api-reference/next/image) component that has to be used in place of <img> in a nextjs app.

### Features

- **Styled Components** for styling.
- **React Icons (Font Awesome)***.
- **React Toastify** from previous project.
