var i18n = require("i18n");
var moment = require("moment");
i18n.configure({
  defaultLocale: "en",
  locales: process.env.ELEVENTY_LOCALES
    ? process.env.ELEVENTY_LOCALES.replace(/\)/gi, "")
        .replace(/\(/gi, "")
        .split(" ")
    : process.env.ELEVENTY_LOCALE
    ? [process.env.ELEVENTY_LOCALE]
    : ["en"],
  directory: "./site/_data/locales"
});
if (process.env.ELEVENTY_LOCALE) {
  i18n.setLocale(process.env.ELEVENTY_LOCALE);
}
moment.locale(i18n.getLocale());
module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addFilter("i18n", value => {
    return i18n.__(value + "") || value;
  });
  eleventyConfig.addFilter("link", value => {
    value = !value || value === "" || value === "/" ? "index" : value;
    return value.indexOf(".html") < 0 ? value + ".html" : value;
  });
  eleventyConfig.addFilter("dateIso", value => {
    return moment(value).toISOString();
  });
  eleventyConfig.addFilter("datePretty", value => {
    return moment(value).format("LL");
  });
};
