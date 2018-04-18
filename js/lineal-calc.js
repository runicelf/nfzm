function linealCalc(workpieceLength = 0, details = [{detailLength : 0, detailBalance : 0}]) {
    
    /*const detailsOnFloat = details.map((current) => [parseFloat(current.detailLength), parseFloat(current.detailBalance)]);*/
    
    const results = [];
    
    const sortedDetails = details.sort((a, b) => {
        if(a.detailLength < b.detailLength) {
            return 1;
        }else if(a.detailLength > b.detailLength){
            return -1;
        }else {
            return 0;
        }
    });
    
    let detailsLength = sortedDetails.reduce((acc, current) => acc + current.detailBalance, 0);
    
    let workpieces = 0;
    
    let balanceSum = 0;
    
    while(detailsLength != 0) {
        
        
        let balance = parseFloat(workpieceLength);
        let log = [];
        for(let i = 0; i < sortedDetails.length; i++) {
            
            while(1) {
                if(sortedDetails[i].detailLength <= balance && sortedDetails[i].detailBalance != 0) {
                    balance -= sortedDetails[i].detailLength;
                    sortedDetails[i].detailBalance -= 1;
                    log.push(sortedDetails[i].detailLength);
                    detailsLength -= 1;
                }else {
                    break;
                }
            }
            //log.push(balance);
            
        }
        results.push(log);
        workpieces += 1;
        balanceSum += balance;
    }
    
    return {workpiecesNeeded : workpieces, logs : results, balance: balanceSum};
}

/*console.log(linealCalc(150, [{detailLength: 50,detailBalance: 15},{detailLength: 30,detailBalance: 3},{detailLength: 20,detailBalance: 2}]))*/