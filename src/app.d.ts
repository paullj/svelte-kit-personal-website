/// <reference types="@sveltejs/kit" />

// Ideally would want the typescript compiler to understand YAML files so these do not have to be manually defined
declare module '*home.yaml' {
  const settings: import('$lib/types/Home').Home;
  export default settings;
}

declare module '*about.yaml' {
  const about: import('$lib/types/About').About;
  export default about;
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
