function handleClickCard(target) {
    const title = target.childNodes[3].childNodes[3].innerText;
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const amount = parseFloat(price);
    const total_price = getAmount('total_price');
    const sum = amount + total_price;

    dataEntry(title);
    entryAmount(sum);
    setButton(sum)
}
// For apply btn
const Apply_btn = document.getElementById('Apply_btn');
Apply_btn.addEventListener('click', function () {
    const Coupon_input = document.getElementById('Coupon_input').value;
    const coupon_code = document.getElementById('coupon_code').innerText;
    const total_price = getAmount('total_price');
    const total_amount = getAmount('total');
    const DiscountPrice = total_price - (total_price * .20);
    const Discount = total_price * 0.20;
    if (Coupon_input === coupon_code) {
        document.getElementById('total').innerHTML = `${DiscountPrice.toFixed(2)} tk`;
        document.getElementById('discount').innerText = `${Discount.toFixed(2)} tk`;
    } else {
        alert('Promo code is wrong')
    }
})
// For Go Home btn
document.getElementById('go_home').addEventListener('click',function(){
    const parent = document.getElementById('data_entry');
    deleteHistory();
    location.reload();
})