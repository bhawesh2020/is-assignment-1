const express=require('express');

const {table,vigenereEncrypt,vigenereDecrypt}=require('./dependencies/vigenere.js');

var port=process.env.PORT || 3000;

var app=express();

app.get('/vigenere/encrypt/:key/:ptext',(req,res)=>{
    var plainText=req.params.ptext;
    var key=req.params.key;
    var cipherText=vigenereEncrypt(plainText,key);
    res.send(JSON.stringify({plainText,key,cipherText}));
});

app.get('/vigenere/decrypt/:key/:ctext',(req,res)=>{
    var cipherText=req.params.ctext;
    var key=req.params.key;
    var plainText=vigenereDecrypt(cipherText,key);
    res.send(JSON.stringify({cipherText,key,plainText}));
});

app.listen(port,()=>{
    console.log(`started at ${port}`);
});
