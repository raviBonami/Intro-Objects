// try{
//     console.log("try block 1")
//     errorFunc();
//     console.log("Statement after error")
// }catch(err){
//     console.log(err)
// }finally{
//     console.log('Executed irrespective of try results')
// }
// console.log('execution continues')

let data = '{"age" : 45}'

try{
    let jsonData = JSON.parse(data);
    if(!jsonData.name){
        // throw new SyntaxError('Name not present')
        throw new Error('Name is mandatory')
    }
    console.log(jsonData.name)
}catch(err){
    console.log("Error occured " + err.message);
    console.log("Error occured " + err.name);
    console.log("Error occured " + err);
}