const removeSpaces=(x)=>x.replace(/\s/g,'');
const searchInArray=(arr,val)=>{
    var i;
    for(i=0;i<26;i++){
        if(arr[i]===val){
            return i;
        }
    }
};
module.exports={removeSpaces,searchInArray};