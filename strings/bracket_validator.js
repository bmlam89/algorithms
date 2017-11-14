//validates whether a string has valid bracket configuration
function is_valid(str){
    var stack = [];
    for(var char in str){
        if(str[char]=='(' || str[char]=='{' || str[char]=='['){
            stack.push(str[char]);
        }else if(str[char]==')'){
            if(stack.pop() != '('){
                return false;
            }
        }else if(str[char]=='}'){
            if(stack.pop() != '{')
                return false;
        }else if(str[char]==']'){
            if(stack.pop() != '[')
                return false;
        }
    }
    if(stack.length !== 0)
        return false;
    else
        return true;
}

console.log(is_valid("{}[][{]}"));//false
console.log(is_valid("()[]{}"));//true