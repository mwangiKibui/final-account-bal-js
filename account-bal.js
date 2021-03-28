
function solution(amounts,dates){

    let account_bal = 0; // initialize account bal to zero.

    let fee_months = 12; // initialize the months with fees to 12.
 
    let checked_months = []; // an array to contain the already checked months.

    // loop through the dates
    for(let i =0; i < dates.length;i++){ 
        
        // check whether its a card payment.
        if(amounts[i] < 0){            
            
            let month = new Date(dates[i]).getMonth(); // get the month of the date.
            
            if(!checked_months.includes(month)){ // if it's already checked.

                let monthly_transactions = dates.filter((date) => new Date(date).getMonth() === month).length; // check no of transactions in the month

                if(monthly_transactions > 3){ // check if there were more than 3 transactions
                    fee_months -= 1; // if there were reduce the fee months by one month.
                };

                checked_months.push(month); // add the month as an already checked month.

            };           

        };

        account_bal += amounts[i]; // add the amount of that month to the general account bal.
    };

    let total_monthly_charges = 5 * fee_months; // get the total monthly charges.

    let final_account_bal = account_bal - total_monthly_charges; // get the net account bal.

    return final_account_bal;
};