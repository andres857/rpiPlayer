const {statusRedPlayer} = require('./statusRed');

function main(){
    var status = statusRedPlayer();
    console.log(`status from test ${status}`);
}

main()