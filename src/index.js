/**
 * let, const
 */
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);
// // 再宣言も可能
// var val1 = "saisenngenn";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// letは上書きが可能　再宣言は不可能

// const val3 = "const変数";
// console.log(val3);
// constは上書き不可　再宣言も不可

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "subaru",
//   age: 19,
// };
// val4.name = "sub";
// val4.address = "saitama";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "昴児";
// const age = 19;
// // 「私の名前は昴児です。年齢は19歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str){
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));
// const triangle = (bottom, height) => {
//   return bottom * height / 2;
// }
// console.log(triangle(3, 2));

/**
 * 分割代入 わかりやすく簡潔に書ける
 */
// const myProfile = {
//   name: "subru",
//   age: 19,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['subaru', 19];
// const [name, age] = myProfile;
// const message3 = `名前は${name}で${age}です`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name) => {
//   return `hello, ${name}.`;
// }
// console.log(sayHello("subaru"));

// const sayHello = (name = "ゲスト") => console.log(`hello, ${name}!`);
// sayHello();

/**
 * スプレット構文  ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr6[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "奥村"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// リターンされた結果に基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// 配列をループして何かを処理する
// nameArr.map((name) => console.log(name));
// nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// 配列に対して、ある条件(return後に書く)に一致するものだけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "奥村"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);
