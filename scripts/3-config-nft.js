import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x5569b97D6e9BD5cc7980e129Bb1965ea98a36B61",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Pango Scales",
        description: "This NFT will give you access to PangoDAO!",
        image: readFileSync("scripts/assets/scale.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()