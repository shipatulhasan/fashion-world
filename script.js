// get all the product price and details

const buyNow = document.getElementsByClassName('buy-now')
for (const buy of buyNow) {
    buy.addEventListener('click', function (event) {
        const productFooter = event.target.parentNode
        const productBody = productFooter.previousElementSibling
        const productName = productBody.querySelector('.name')
        const priceElement = productFooter.querySelector('.product-price')
        const productPrice = Number(priceElement.innerText)

        // total calculation

        const previousTotalElement = document.getElementById('sub-total')
        const previousTotalPrice = Number(previousTotalElement.innerText)

        let newTotal = previousTotalPrice + productPrice
        previousTotalElement.innerText = newTotal

        bindCart(productPrice,productName)

        // 

        

    
    })
}

function bindCart(price,title){
    const cart = document.getElementById('cart')
    const cartContainer = document.getElementById('items')
    cart.classList.remove("hidden")

    // product details
    
    const li = document.createElement('li')
    li.className = 'flex justify-between items-center border-b-2 border-dotted border-slate-300'
    li.setAttribute('id','item')
    const name = document.createElement('h6')
    name.className = 'font-semibold w-3/5'
    name.innerText = title.innerText
    const displayPrice = document.createElement('h6')
    displayPrice.className = 'price'
    displayPrice.innerText = price


    // product list in cart item

    li.appendChild(name)
    li.appendChild(displayPrice)
    cartContainer.appendChild(li)
}



// discount popup
document.getElementById('cupon').addEventListener('click',function(){
    const cuponContainer = document.getElementById('popUp')
    cuponContainer.classList.remove('hidden')

    
})

// cupon code

document.getElementById('btn-submit').addEventListener('click',function(){ 
    const cuponField = document.getElementById('discount')
    const textField = document.getElementById('discount-field')
    const h2 = document.getElementById("msg")
    const text = textField.value
    textField.value = ''
    let isTrue = false
    if(text === 'Dom'){
        let sum = 0
        const productList = document.getElementById('items')
        const previousPrices = productList.getElementsByClassName('price')
        for(p of previousPrices){
            const previousPrice = p.innerText
            const newPrice = Math.round(previousPrice - (previousPrice * 30/100))
            p.innerText = newPrice
            sum +=newPrice
        }
        const discountTotal = document.getElementById('sub-total')
        discountTotal.innerText = sum
        console.log(discountTotal)

        isTrue = true
        
    }
    if(isTrue == true){
        cuponField.classList.add('hidden')
        h2.classList.remove('hidden')
        h2.innerText = 'Hey you got 30% discount today.'

    }
    else{
        cuponField.classList.add('hidden')
        h2.classList.remove('hidden')
        h2.innerText = 'sorry this cuppon code is not applicable today'
    }
})



function vanish(id){
    if(id.className !== 'hidden'){
        id.classList.add('hidden')
    }
}