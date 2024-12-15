const LanguageDetect = require("languagedetect");
const lngDetector = new LanguageDetect();

console.log(lngDetector.detect("es macht gut", 1));
console.log(lngDetector.detect("dobra prace", 1));
console.log(lngDetector.detect("Gwaith da", 1));
console.log(process.argv[0]);
