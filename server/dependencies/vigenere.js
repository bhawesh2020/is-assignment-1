const {getTable}=require('./generateTable.js');
const {removeSpaces,searchInArray}=require('./dependencies.js');
const table=getTable();
const vigenereEncrypt=(pt,key)=>{
    var rpt=removeSpaces(pt);
    rpt=rpt.toUpperCase();
    var i,x,y,ct="";
    for(i=0;i<rpt.length;i++){
        x=rpt.charCodeAt(i)-65;
        y=key.charCodeAt(i%key.length)-65;
        
        ct=ct+String.fromCharCode(table[x][y]);
    }
    return ct;
};

const vigenereDecrypt=(ct,key)=>{
    var i,x,y,pt="";
    rct=ct.toUpperCase();
    for(i=0;i<rct.length;i++){
        y=key.charCodeAt(i%key.length)-65;
        x=String.fromCharCode(searchInArray(table[y],rct.charCodeAt(i))+65);
        pt=pt+x;
    }
    pt=pt.toLowerCase();
    return pt;
};

module.exports={table,vigenereEncrypt,vigenereDecrypt};