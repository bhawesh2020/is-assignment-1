var getTable=()=>{
    var table={},i,j;
    for(i=0;i<26;i++){
        table[i]={};
        for(j=0;j<26;j++){
            var x=65+i+j;
            if(x>90){
                x=x-26;  //x-90+64=>x-25
            }
            table[i][j]=x;
        }
    }
    return table;
};
module.exports={getTable};