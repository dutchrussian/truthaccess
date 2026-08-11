module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Sort a collection by the "order" number in each file's front matter
  eleventyConfig.addFilter("byOrder", (arr) =>
    [...(arr || [])].sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  );

  // Keep only the entries flagged to appear on the home page
  eleventyConfig.addFilter("onHome", (arr) =>
    (arr || []).filter((item) => item.data.onHome)
  );

  // Zero-padded index for the 01 / 02 / 03 labels
  eleventyConfig.addFilter("pad", (n) => String(n).padStart(2, "0"));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
