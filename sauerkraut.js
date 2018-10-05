#!/usr/bin/env node

const gradient = require("gradient-string");
const logo = `
__/\\\\\\\\\\\\\\\\\\\\\\\\___________        
 _\\/\\\\\\////////\\\\\\_________       
  _\\/\\\\\\______\\//\\\\\\________      
   _\\/\\\\\\_______\\/\\\\\\________     
    _\\/\\\\\\_______\\/\\\\\\________    
     _\\/\\\\\\_______\\/\\\\\\________   
      _\\/\\\\\\_______/\\\\\\_________  
       _\\/\\\\\\\\\\\\\\\\\\\\\\\\/_____\/\\\\\\_ 
        _\\////////////______\\///__
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
// __/\\\\\\\\\\\\___________
//  _\/\\\////////\\\_________
//   _\/\\\______\//\\\________
//    _\/\\\_______\/\\\________
//     _\/\\\_______\/\\\________
//      _\/\\\_______\/\\\________
//       _\/\\\_______/\\\_________
//        _\/\\\\\\\\\\\\/_____/\\\_
//         _\////////////______\///__
