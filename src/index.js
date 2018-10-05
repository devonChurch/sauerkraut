const gradient = require("gradient-string");
const { version } = require("../package.json");
const logo = `
___/\\\\\\\\\\\\\\\\\\\\\\\\___________        
 __\\/\\\\\\////////\\\\\\_________       
  __\\/\\\\\\______\\//\\\\\\________      
   __\\/\\\\\\_______\\/\\\\\\________     
    __\\/\\\\\\_______\\/\\\\\\________    
     __\\/\\\\\\_______\\/\\\\\\________   
      __\\/\\\\\\_______/\\\\\\_________  
       __\\/\\\\\\\\\\\\\\\\\\\\\\\\/_____\/\\\\\\_ 
        __\\////////////______\\///__
         ___________________________
          __ PACKAGE VERSION ${version} __
`;
const content = gradient.atlas.multiline(logo);

console.log(content);

// Logo is generated with the "ASCII Text Signature Generator"
// + http://www.kammerl.de/ascii/AsciiSignature.php
// + Use the "s-relief" preset with the text "D."
//
// The console.log() operation escapes characters like "\" so in that regard we
// need to ensure that all of the original ASCII art persists by escaping any
// un-intended character removal.
//
// The original artwork (before any escaping) is below.
//
// ___/\\\\\\\\\\\\___________
//  __\/\\\////////\\\_________
//   __\/\\\______\//\\\________
//    __\/\\\_______\/\\\________
//     __\/\\\_______\/\\\________
//      __\/\\\_______\/\\\________
//       __\/\\\_______/\\\_________
//        __\/\\\\\\\\\\\\/_____/\\\_
//         __\////////////______\///__
//          ___________________________
//           __ PACKAGE VERSION 1.0.0 __
