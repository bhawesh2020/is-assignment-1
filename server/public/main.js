var makeRequest=async (url)=>{
    return await axios.get(url);
};

var key=document.getElementById('key');            
var plainText=document.getElementById('ptext');
var encryptButton=document.getElementById('encryptButton');
var cipherText=document.getElementById('ctext');
var decryptButton=document.getElementById('decryptButton');

encryptButton.onclick=(e)=>{
    e.preventDefault();
    key.value=key.value.trim();
    plainText.value=plainText.value.trim();
    if(key.value.length==0 || key.value=='' || plainText.length==0 || plainText.value==''){
        return alert('Please enter all required values');
    }
    var url=('/vigenere/encrypt/'+key.value+'/'+encodeURIComponent(plainText.value));
    var res=makeRequest(url);
    res.then((r)=>{
            cipherText.value=r.data.cipherText;
    });
};

decryptButton.onclick=(e)=>{
    e.preventDefault();
    key.value=key.value.trim();
    cipherText.value=cipherText.value.trim();
    if(key.value.length==0 || key.value=='' || cipherText.length==0 || cipherText.value==''){
        return alert('Please enter all required values');
    }
    var url=('/vigenere/decrypt/'+key.value+'/'+encodeURIComponent(cipherText.value));
    var res=makeRequest(url);
    res.then((r)=>{
        plainText.value=r.data.plainText;
    });
};
