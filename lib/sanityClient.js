import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const writeClient = sanityClient({
  projectId: "eyrr36tc",
  dataset: "production",
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

export const readClient = sanityClient({
  projectId: "eyrr36tc",
  dataset: "production",
  apiVersion: "2021-10-21", // use current UTC date - see "specifying API version"!
  useCdn: false,
});

export const builder = imageUrlBuilder(readClient);
