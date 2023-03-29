function ispalindrome  (name){
    let reverse = ''
    for (let i = 0; i < name.length; i++){
        reverse = name[i] + reverse;
    }
    if (reverse === name) return true;
    return false;
}

console.log(ispalindrome ('aba'))

/*""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""''" */

function checkUnique(string){
    let arr = string.split('');
    console.log(arr)
    let unique = [...new Set(arr)]
    console.log(unique)
}

checkUnique('sajidkhan')


function unique(string){
    let freq = {};
    let uString = '';
    
    for (let i=0; i<string.length; i++){
        let char = string[i];
        freq[char] = (freq[char] || 0) + 1;
    }
    console.log(freq)
    for (let i=0; i<string.length; i++){
        let char = string[i];
        if (freq[char] === 1){
            uString += char;
        }
    }
    
    console.log(uString);
}

unique('sajidkhan');
