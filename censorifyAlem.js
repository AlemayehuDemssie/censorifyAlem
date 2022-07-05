var censoreWords=["sad","bad","mad"];
var customCensoreWords=[];
function censor(inStr){
    for(index in censoreWord){
        inStr=inStr.replace(censoreWords[index],"****");
    }
    for(idx in customCensoreWords){
        inStr=inStr.replace(customCensoreWords[idx],"****")
    }

    return inStr;
}
function addCensoreWord(word){
    customCensoreWords.push(word);

}
function getCensoreWord(){
    return censoreWords.concat(customCensoreWords);
    
}
exports.censor=censor;
exports.addCensoreWord=addCensorWor;
exports.getCensoreWord=censoreWord;