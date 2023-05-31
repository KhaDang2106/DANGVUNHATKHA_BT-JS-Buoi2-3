/* Bài 1: Tính tiền lương nhân viên */
/**
 * - Input:
 *  + Tạo biến salaryPerDay và gán giá trị là giá trị được xuất từ thẻ input đã cố định giá trị là 100000(lương 1 ngày);
 *  + Tạo biến workingDay và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập vào số ngày làm;
 *  + Tạo biến totalSalary và gán giá trị ban đầu là 0;
 * 
 * - Progress:
 *  + Công hức tính tiền lương: Lương 1 ngày * số ngày làm;
 *  + totalSalary = salaryPerDay * workingDay;
 * 
 * - Output:
 *  + In kết quả ra màn hình hiển thị
 */
var btnSalary = document.getElementById('btnSalary');
btnSalary.onclick = function(){
    var salaryPerDay = document.getElementById('salaryPerDay').value;
    var workingDay = document.getElementById('workingDay').value;
    var totalSalary = 0;

    totalSalary = salaryPerDay * workingDay;

    document.getElementById('ex1Result').innerHTML = totalSalary.toLocaleString();
}

/* Bài 2: Tính giá trị trung bình của 5 số thực */
/**
 * - Input:
 *  + Tạo biến number1 và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập số thứ 1 vào;
 *  + Tạo các biến từ number2 -> number5 và gán các giá trị tương tự như biến number1;
 *  + Tạo biến averageNumber và gán giá trị ban đầu là 0;
 * 
 * - Progress:
 *  + Convert string => number = 1 trong 2 cách parseFloat hoặc *1;
 *  + averageNumber = tổng 5 số thực chia 5;
 * 
 * - Output:
 *  + In kết quả ra màn hình hiển thị;
 */
document.getElementById('btnAverage').onclick = function(){
    var number1 = document.getElementById('number1').value * 1;
    var number2 = document.getElementById('number2').value * 1;
    var number3 = document.getElementById('number3').value * 1;
    var number4 = document.getElementById('number4').value * 1;
    var number5 = document.getElementById('number5').value * 1;
    var averageNumber = 0;

    averageNumber = (number1 + number2 + number3 + number4 + number5)/5;

    document.getElementById('ex2Result').innerHTML = averageNumber;
}

/* Bài 3: Quy đổi tiền */
/**
 * - Input:
 *  + Tạo biến currencyExchange và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập số tiền cần quy đổi vào;
 *  + Tạo biến finalExchange và gán giá trị ban đầu là 0;
 * 
 * - Progress:
 *  + Convert string => number
 *  + Giá USD mặc định là $1 = 23,500vnd => finalExchange = currencyExchange * 23500;
 * 
 * - Output:
 *  + In kết quả ra màn hình hiển thị;
 */
document.getElementById('btnCurrency').onclick = function(){
    var currencyExchange = document.getElementById('currencyExchange').value * 1;
    var finalExchange = 0;

    finalExchange = currencyExchange * 23500;

    document.getElementById('ex3Result').innerHTML = new Intl.NumberFormat('vn-VN').format(finalExchange) + 'VND';
}

/* Bài 4: Tính diện tích, chu vi hình chữ nhật */
/**
 * - Input:
 *  + Tạo biến recLength và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập vào chiều dài HCN;
 *  + Tạo biến recWidth và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập vào chiều rộng HCN;
 *  + Tạo biến recArea và gán giá trị ban đầu là 0;
 *  + Tạo biến recPerimeter và gán giá trị ban đầu là 0;
 * 
 * - Progress:
 *  + Convert string => number
 *  + Tính diện tích HCN theo công thức:
 * recArea = recLength * recWidth;
 *  + Tính chu vi HCN theo công thức:
 * recPerimeter = (recLength + recWidth)/2;
 *
 * - Output:
 *  + In kết quả ra màn hình hiển thị;
 */
document.getElementById('btnMath').onclick = function(){
    var recLength = document.getElementById('recLength').value * 1;
    var recWidth = document.getElementById('recWidth').value * 1;
    var recArea = 0;
    var recPerimeter = 0;

    recArea = recLength * recWidth;
    recPerimeter = (recLength + recWidth) * 2;

    document.getElementById('ex4Result1').innerHTML = recArea;
    document.getElementById('ex4Result2').innerHTML = recPerimeter;
}

/* Bài 5: Tính tổng 2 ký số */
/**
 * - Input:
 *  + Tạo biến wholeNumber và gán giá trị là giá trị được xuất ra từ thẻ input mà user nhập vào;
 *  + Tạo biến tens và gán giá trị ban đầu bằng 0
 *  + Tạo biến units và gán giá trị ban đầu bằng 0
 *  + Tạo biến total và gán giá trị ban đầu bằng 0
 * 
 * - Progress:
 *  + Convert string => number
 *  + Lấy phần nguyên của hàng chục của số ban đầu:
 * tens = wholeNumber/10;
 *  + Lấy phần nguyên của hàng đơn vị của số ban đầu:
 * units = wholeNumber%10;
 *  + Tính tổng của 2 ký số:
 * total = tens + units
 *
 * - Output:
 *  + In kết quả ra màn hình hiển thị;
 */
document.getElementById('btnTotal').onclick = function(){
    var wholeNumber = document.getElementById('wholeNumber').value * 1;
    var tens = 0;
    var units = 0;
    var total = 0;

    tens = Math.floor(wholeNumber / 10);
    units = Math.floor(wholeNumber % 10);
    total = tens + units;
    
    document.getElementById('ex5Result').innerHTML = total;
}