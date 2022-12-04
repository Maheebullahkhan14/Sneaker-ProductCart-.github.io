const images = document.querySelectorAll('.images')
let changeimg = document.querySelector('.changeimg')
const decrement = document.querySelector('.decrement')
const IncrementEl = document.querySelector('.increment')
const Add_decreaseEl = document.querySelector('.Addordecrese')
const AddToCartBtn = document.querySelector('.Cartbtn')
const CheckcartBtn = document.querySelector('.Cart')
const CartBox = document.querySelector('.CartBox')
const BigContainerimg = document.querySelector('.bigimg')
const NewImgContainerEl = document.querySelector('.New-img-container')
const Closebtn = document.querySelector('.Closebtn')
const PreviousBtn = document.querySelector('.previous')
const NextBtn = document.querySelector('.next')
const NewImg = document.querySelector('.Newchangeimg')
const AllnewImg = document.querySelectorAll('.Newimages')
const EmptyCartEl = document.querySelector('.emptydiv')
const OpenMenu = document.querySelector('.menu')
const CloseMenuBtn = document.querySelector('.closemenu')
const mobileNav = document.querySelector('.nav ul')

let ImgCount = 0
let Numberofsneakers = 0
let sneakerPrice = 125
let Money = 1
let toggle = true

images.forEach((img,index) =>{
    img.addEventListener('click',function(){
        changeimg.src = `/images/image-product-${index+1}.jpg`

        images.forEach(newbtn =>{
            // console.log(newbtn)
            newbtn.classList.remove('active')
            img.classList.add('active')
        })  
    })
    
})
console.log(AllnewImg)
function Decrement(){
    Numberofsneakers-- 
    if(Numberofsneakers < 0){
        alert('Not possible')
        return 
    }
    Add_decreaseEl.innerText = +Numberofsneakers
}

function Increment(){
    Numberofsneakers++
    Add_decreaseEl.innerText = +Numberofsneakers
}

AddToCartBtn.addEventListener('click',function(){
    
    if(Numberofsneakers <= 0){
        CartBox.innerHTML=`
        <div class="Cartnav">
            <p>Cart</p>
        </div>
        <p class="empty">Your Cart is Empty</p>
        `
        alert('Plz Select 1 item Atleast')
        return
    }
    else{
        

        Money = Numberofsneakers*sneakerPrice
        CartBox.innerHTML = `
        <div class="Cartnav">
            <p>Cart</p>
        </div>
        <div class="AddedCart">
        
        <div class="emptydiv">
            <i class="fa-solid fa-trash EmptyCart"></i>
        </div>

            <div class="img">
                <img src="/images/image-product-1-thumbnail.jpg" alt="">
            </div>
            <div class="data">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125 x <span class="sneakersCount">${Numberofsneakers} <span class="Money">
                    $${Money}.00
                </span></span></p>
            </div>

        </div>
        <div class="check">
            <p>Check out</p>
        </div>
        
        `
        EmptyCartEl.addEventListener('click',function(){
           console.log('hello')
        })
        
    }
})

CheckcartBtn.addEventListener('click',function(){
    toggle = !toggle//Make true to false or false to true

    if(toggle){
        CartBox.style.display = 'block'
    }else{
        CartBox.style.display = 'none'
    }
})



BigContainerimg.addEventListener('click',function(){
    NewImgContainerEl.style.display = 'flex'

})
Closebtn.addEventListener('click',function(){
    NewImgContainerEl.style.display = 'none'
})
NextBtn.addEventListener('click',function(){
    ImgCount++
    if(ImgCount > 4){
        ImgCount = 1
    }
    
    NewImg.src = `/images/image-product-${ImgCount}.jpg`
    AllnewImg.forEach((img,index)=>{
        if(index+1===ImgCount){
            img.classList.add('active')
        }else{
            img.classList.remove('active')
        }
    })
    NewImg.style.transition = '3s ease-in'

})

PreviousBtn.addEventListener('click',function(){
    ImgCount--
    
    if(ImgCount < 1){
        ImgCount = 4
    }
    NewImg.src = `/images/image-product-${ImgCount}.jpg`
    AllnewImg.forEach((img,index)=>{
        if(index+1===ImgCount){
            img.classList.add('active')
        }else{
            img.classList.remove('active')
        }
    })
    
})

// EmptyCartEl.addEventListener('click',function(){
//     console.log('hello')
// })

decrement.addEventListener('click',Decrement)
IncrementEl.addEventListener('click',Increment)
OpenMenu.addEventListener('click',Openmenufn)
CloseMenuBtn.addEventListener('click',closemenu)

function closemenu(){
    mobileNav.style.left = '-100%'
}

function Openmenufn(){ 
     mobileNav.style.left = '0px'
}
