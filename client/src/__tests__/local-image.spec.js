const fs = require("fs");
const path = require("path");

it("works reading an image from the local file system", () => {
  const imageAtTestPath = path.resolve(
    __dirname,
    "./__image_snapshots__",
    "app-test-tsx-jest-image-snapshot-usage-with-an-image-received-from-puppeteer-works-1-snap.png"
  );
  // imageAtTest is a PNG encoded image buffer which is what `toMatchImageSnapshot() expects
  const imageAtTest = fs.readFileSync(imageAtTestPath);

  expect(imageAtTest).toMatchImageSnapshot();
});
