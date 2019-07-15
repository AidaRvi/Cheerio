const cheerio = require('cheerio');
const http = require('http');
const fs = require('fs');

const url = 'http://www.farhikhtegan.com/classes.aspx';

var body = '';

http.get( url, function(res){

    res.setEncoding('utf8')

    res.on('data', data =>{
        body += data  ;
    })

    res.on('end', end =>{

        const $ = cheerio.load(body);    
        const txt = $('.c-price').text();
        var neatTxt = txt.split('ل')

        for( var i=0 ; i<neatTxt.length-1 ; i++)
            neatTxt[i] += 'ل'

        console.log(neatTxt);
    
    });
});

/*
fs.readFile('./File/Farhikhtegan.html', 'UTF-8', (err , content)=>{

    if(err) console.log(err);

    const $ = cheerio.load(content);
    const txt = $('.c-price').text();
    console.log(txt);
    console.log("done.")

});
*/


