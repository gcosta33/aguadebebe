//############ RESQUISIÇOES PARA O SERVER ###################



//############ RESQUISIÇOES PARA TESTE ###################

let cart=[]

const resp=[
  {
    id:1,
    name:"Enchoval Bebê conforto",
    categ:["Enchoval"],
    subCateg:["unisex"],
    price:128,
    image:null
  },
  {
    id:2,
    name:"Carrinho Bebê conforto",
    categ:["Acessorios","Carrinhos"],
    subCateg:["Femeninos",""],
    price:299,
    image:null
  },
  {
    id:3,
    name:"Enchoval Bebê conforto",
    categ:["Enchoval"],
    subCateg:[""],
    price:128,
    image:null
  },
  {
    id:4,
    name:"Enchoval Bebê conforto",
    categ:["Enchoval"],
    subCateg:[""],
    price:128,
    image:null
  },
  {
    id:5,
    name:"Enchoval Bebê conforto",
    categ:["Enchoval"],
    subCateg:[""],
    price:128,
    image:null
  },
]

export const returnProducts= props => (
  resp
  )

export const putOnCart = props =>{
  if((cart.indexOf(props)>=0)){
    return
  }else{
    cart.push(props)
  }
}

export const ShowCart = props =>{
  return cart
}

export const removetoCart = props =>{
  console.log(cart);
  console.log(props);
  if(cart.length===1){
    cart.pop()
  }else if(cart.length>1){
    cart.splice((cart.indexOf(props),1))
  }else{
    return
  }
}