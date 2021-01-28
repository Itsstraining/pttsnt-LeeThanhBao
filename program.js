// Add new functions, variables here

function main(input) 
{
  // Using console.log to answer the question
  let A = (input);
  // let B = 2; //chia 2 tìm số chẳn
  // let C = []; //gắn mảg kết quả
  console.log( timSoNguyenTo(A).join(" "+'*'+" "));//thêm vào mảg
}

function timSoNguyenTo(A) 
{

  let B = 2;
  let C = [];

  // if (A == 0 || A < 0) 
  // {
  //   console.log(0);
  // }
  // else
  // {
  //   if (A%B==0){

  while (A > 1) 
  {
    if (A % B == 0) //nếu a ko % cho b thì tiếp tục tăng b lên
    {
      C.push(B);
      A = A / B;
    }
    else 
    {
      B++;
    }
  }
  return C;
 



}

module.exports = main;