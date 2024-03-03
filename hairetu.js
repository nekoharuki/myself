const button=document.querySelector('#put');


const introduction=()=>{
    const array=[];
    const names=document.querySelector('#names').value;
    array.push(names);
    const age=document.querySelector('#age').value;
    array.push(age);
    const job=document.querySelector('#job').value;
    array.push(job);
    array.push('');
    
    const plist=document.querySelector('p');
    
    plist.textContent=array.join('です。');
    const result=document.querySelector('#result');
    result.append(plist);
    const kiko=document.querySelector('#kiko');
    kiko.innerHTML='よろしくお願いいたします。'
}
button.addEventListener('click',introduction);