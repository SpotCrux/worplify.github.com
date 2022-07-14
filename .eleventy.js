const{ DateTime } = require("luxon");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");


module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");


    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        });
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
    module.exports = function(eleventyConfig) {
    };
    eleventyConfig.addPlugin(EleventyVitePlugin);
  }


