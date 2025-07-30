function cashOut(money) {
    if (typeof money === 'number') {
        if (money > 0) {
            let cashOutCharge = (money * 1.75) / 100;
            return cashOutCharge;
        }
        else {
            return 'Invalid';
        }
    }
    else {
        return 'Invalid';
    }
}


function validEmail(email) {
    if (typeof email === 'string') {
        if(email[0]==='.' || email[0]==='-' || email[0]==='_' || email[0]==='+' || email[0]==='@' ){
            return false;
        }
        else if(!email.includes('@')){
            return false;
        }
        else if(email.includes(' ')){
            return false;
        }
        else if(!email.endsWith('.com')){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return 'Invalid';
    }
}


function  electionResult( votes ) {
    if(Array.isArray(votes)){
        let mango = 0;
        let banana = 0;
        for(const vote of votes){
            if(vote==='mango'){
                mango++;
            }
            else if(vote==='banana'){
                banana++;
            }
        }
        if(mango>banana){
            return 'Mango';
        }
        else if(mango<banana){
            return 'Banana';
        }
        else{
            return 'Draw';
        }
    }
    else{
        return 'Invalid';
    }
}


function  isBestFriend( f1 , f2 ) {
    if(typeof f1==='object' && typeof f2==='object'){
        if(f1.bestFriend === f2.roll && f2.bestFriend===f1.roll){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid';
    }
}



function  calculateWatchTime( times ) {
    let sumOfTime = 0;
    for (const time of times){
        if(typeof time ==='number'){
            sumOfTime = sumOfTime+ time;
        }
        else{
            return 'Invalid';
        }
    }
    hours = parseInt((sumOfTime/3600));
    minutes = parseInt((sumOfTime%3600)/60);
    second = sumOfTime%60;
    
    return {
        hour:hours,
        minute:minutes,
        second:second
    }
}