# vite-federation-watch-bug

## Reproduction steps

### In `/host`

- `npm install`
- `npx vite start`

### In `/remote`

- `npm install`
- `npx vite build --watch`
- In a separate terminal, run `vite serve`

### Reproduction

- Open http://localhost:5173 and you'll see "Remote app (1)", indicating that module federation works correctly
- Make a change to `remote/src/App.tsx` (e.g. change the 1 to 2) and wait for the browser to reload
- You'll see the following error trace in the Chrome console:

  ```
  Uncaught TypeError: cssFilePaths.forEach is not a function
      at dynamicLoadingCss (remoteEntry.js:54:20)
      at ./App (remoteEntry.js:43:7)
      at Module.get (remoteEntry.js:66:33)
      at __x00__virtual:__federation__:83:73
      at async App.tsx:8:36
  dynamicLoadingCss @ remoteEntry.js:54
  ./App @ remoteEntry.js:43
  get @ remoteEntry.js:66
  (anonymous) @ __x00__virtual:__federation__:83
  ```
  
- Stop the `vite build` process and restart it
- Wait for the browser to reload
- Note that the change has now taken effect
