function getAmount(amount_data) {
    const amount_str = document.getElementById(amount_data);
    const amount = parseFloat(amount_str.innerText);
    return amount;
}
function dataEntry(text) {
    const parent = document.getElementById('data_entry');
    const p = document.createElement('p');
    p.classList.add('text-[#111]', 'text-lg', 'font-medium')
    const count = parent.childElementCount;
    p.innerText = `${count + 1}. ${text}`;
    parent.appendChild(p);
}

// setButton enable
function setButton(count) {
    const Purchase_btn = document.getElementById('Purchase_btn');
    const Apply_btn = document.getElementById('Apply_btn');
    const Coupon_input = document.getElementById('Coupon_input');
    if (count > 0 && count < 200) {
        Purchase_btn.removeAttribute('disabled');
        Purchase_btn.classList.add('opacity-100')
    }else if (count >= 200) {
        Coupon_input.removeAttribute('disabled');
        Apply_btn.removeAttribute('disabled');
        Apply_btn.classList.add('opacity-100');
        Purchase_btn.removeAttribute('disabled');
        Purchase_btn.classList.add('opacity-100')
    }  else {
        Purchase_btn.setAttribute('disabled');
        Purchase_btn.classList.add('opacity-60')
    }
}
// for discount price
function entryAmount(sum){
    document.getElementById('total_price').innerText = `${sum} Tk`;
    document.getElementById('total').innerText = `${sum} Tk`;
    document.getElementById('discount').innerText = '00 Tk';
}
// remove entry data
function deleteHistory(){
    const parent = document.getElementById('data_entry');
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild)
    }
}