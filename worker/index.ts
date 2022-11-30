export default {
  async fetch(): Promise<Response> {
    return fetch("https://michiel-cloud-flare.pages.dev");
  },
};
