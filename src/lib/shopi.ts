import { Shopi } from "@shopi-lk/storefront-sdk";

export const shop = new Shopi({
  apiKey: import.meta.env.Shopi_Api_Key,
});
