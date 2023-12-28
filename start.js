/*
                                ╭━━━┳╮ ╭┳━━━┳━━━┳━╮ ╭╮    ╭━━━╮╭╮   
                                ┃╭━╮┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╭━╮┃┃┃
                                ┃┃ ┃┃┃ ┃┃╰━━┫╰━━┫╭╮╰╯┃    ┃┃ ┃┃┃┃
                                ┃┃ ┃┃┃ ┃┃╭━━┫╭━━┫┃╰╮┃┃    ┃╰━╯┃┃┃
                                ┃╰━╯┃╰━╯┃╰━━┫╰━━┫┃ ┃┃┃    ┃╭━╮┃┃┃ 
                                ╰━━╮┣━━━┻━━━┻━━━┻╯ ╰━╯    ╰╯ ╰╯╰╯
                                   ╰╯
## Project Name => Dark-queen
## Project Version => 1.0.1  
## Project Author => Janithmax234
## Project license => MIT
## Project owner => Dark janeth
## Module Name => Start.js
## Thank For Janithmax234
*/ 

var forever = require("forever-monitor");
var child = new forever.Monitor("Connect/module/cilent.js", {
    silent: false,
    });
child.start();
