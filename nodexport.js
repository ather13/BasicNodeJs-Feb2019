let globalVariable = 'I m variable from nodeexport module';

function globalFunction() {
    console.log('I m function from nodeexport module');
}

module.exports.globalFunction=globalFunction;
module.exports.globalVariable=globalVariable;

//globalFunction();
//console.log(globalVariable);