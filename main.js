let regTel = /^1[3456789]\d{9}$/g
let regUser = /^\w{7,11}$/g
let regNumber = /^[+-]?([1-9]|([1-9]\d+))?(\.\d+)?0$/;
let regChinese = /^[\u4E00-\u9FA5]{2,5}(·[\u4E00-\u9FA5]{2,5})*$/;
let regEamil = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
//8079@qq.com 8079-qqqdsgff@gmail-goo.com.cn
let str = "http://www.runoob.com:80/html/html-tutorial.html";
let tel = "13790082228";
let num = "-011";
let user = "poi111122";
let name = "郑振丰·尼古拉斯对哒对哒";
let email = "8079-qqqdsgff@gmail-goo.com.cn";

let result2 = regEamil.test(email)
let result3 = email.match(regEamil)
console.log(result2)
console.log(result3)

/*let resultber = regNumber.test(num)
let resultber2 = num.match(regNumber)
console.log(resultber)
console.log(resultber2)*/
/*let resultUser = regUser.test(user)
let resultUser2 = user.match(regUser)
console.log(resultUser)
console.log(resultUser2)*/
/*let result2 = regTel.test(tel)
let result3 = tel.match(regTel)
console.log(result2)
console.log(result3)*/

let reg2 = new RegExp("\\d+", 'g')
// console.log(reg2)
