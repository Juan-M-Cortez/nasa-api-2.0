function TenDayList(mm, dd) {
    // current day
    let countDown = dd;
    // if countDown is less > 1 it triggers backOneMonth
    let backOneMonth = true;
    // returning array value
    let countList = [countDown];

    let lastMonthDay = { month: '', day: '' };

    for (let index = 1; index <= 9; index++) {

        if (countDown > 1) {
            --countDown;
            // months with: 31
        } else if ((mm === '01' || mm === '03' || mm === '05' || mm === '07' || mm === '08' || mm === '10') && (backOneMonth === true)) {
            countDown = 32;
            backOneMonth = false;
            lastMonthDay.month = --mm;
            // months with: 30
        } else if ((mm === '04' || mm === '06' || mm === '09' || mm === '11') && (backOneMonth === true)) {
            countDown = 31;
            backOneMonth = false;
            lastMonthDay.month = --mm;
            // month: 29
        } else if ((mm === '02') && (backOneMonth === true)) {
            countDown = 29;
            backOneMonth = false;
            lastMonthDay.month = --mm;
        }

        countList.push(countDown);
    }

    lastMonthDay.day = countDown;

    return lastMonthDay;
 
}

export default TenDayList;