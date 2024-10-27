export default function(eleventyConfig) {
    eleventyConfig.addGlobalData("currentDate", () => {
      const now = new Date();
      return now;
    });
  
    return {
    };
  };
  