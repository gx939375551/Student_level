 function result() {
     //接收input传来的name的值!
     var studentName = document.getElementById('name').value;
     //接收input传来的分数的值！
     var studentMark1 = document.getElementById('mark').value;
     //将传来分数的值强制转换为数字类型！如果是字符串
     var studentMark2 = Number(studentMark1);
     //判断输入的值在小于等于100到大于90;
     if (studentMark2 <= 100 && studentMark2 > 90) {
         var result1 = studentName + " 你是一等生";
         document.getElementById('screen').value = result1;
         //判断输入的值在小于等于90到大于80;
     } else if (studentMark2 <= 90 && studentMark2 > 80) {
         var result2 = studentName + " 你是二等生";
         document.getElementById('screen').value = result2;
         //判断输入的值在小于等于80到大于70;
     } else if (studentMark2 <= 80 && studentMark2 > 70) {
         var result3 = studentName + " 你是三等生";
         document.getElementById('screen').value = result3;
         //判断输入的值在小于等于40到大于60;
     } else if (studentMark2 <= 70 && studentMark2 > 60) {
         var result4 = studentName + " 你是四等生";
         document.getElementById('screen').value = result4;
         //判断输入的值在小于等于60到大于50;
     } else if (studentMark2 <= 60 && studentMark2 > 50) {
         var result5 = studentName + " 你是五等生";
         document.getElementById('screen').value = result5;
         //判断输入的值在小于等于50到大于40;
     } else if (studentMark2 <= 50 && studentMark2 > 40) {
         var result6 = studentName + " 你是六等生";
         document.getElementById('screen').value = result6;
         //判断输入的值在小于等于40到大于30;
     } else if (studentMark2 <= 40 && studentMark2 > 30) {
         var result7 = studentName + " 你是7等生";
         document.getElementById('screen').value = result7;
         //判断输入的值在小于等于30到大于20;
     } else if (studentMark2 <= 30 && studentMark2 > 20) {
         var result8 = studentName + " 你是八等生";
         document.getElementById('screen').value = result8;
         //判断输入的值在小于等于20到大于10;
     } else if (studentMark2 <= 20 && studentMark2 > 10) {
         var result9 = studentName + " 你是九等生";
         document.getElementById('screen').value = result9;
         //判断输入的值在小于等于10到大于等0时;
     } else if (studentMark2 <= 10 && studentMark2 > 0) {
         var result10 = studentName + " 劝退";
         document.getElementById('screen').value = result10;
         //判断输入的值如果大于100;
     } else if (studentMark2 > 100) {
         alert("请输入(0~100)的分数");
         //判断输入的值如果小于0;
     } else if (studentMark2 < 0) {
         alert("请输入(0~100)的分数");
         //判断是否输入！
     } else if (studentMark2 === "" || studentName === "") {
         alert("请输入姓名和成绩");
         //判断输入的值是不是数字！
     } else if (!isNaN(studentMark2)) {
         //如果是字符串或其他则弹出！
     } else {
         alert("请输入(0~100)的分数");
     }
 }
