var shop = document.getElementById("shop");

let shopItemsData = [{
	id:"2001",
	name:"Arcane Glass",
	price: 50,
	desc: "elegant light weight",
	img: "img/glasses.jpg"
},{
	id:"2002",
	name:"OS",
	price: 100,
	desc: "elegant",
	img: "img/os.jpg"
}];

let basket = JSON.parse(localStorage.getItem("data"))||[];


let generateShop = () => {
	return (shop.innerHTML=shopItemsData.map((x)=>{
		let {id, name, price, desc, img} = x

		let search = basket.find((x)=>x.id === id) || []
		return `<div id=product-id-${id} class="item">
				
				<img width="218" src="${img}" alt="glasses">
				
				<div class="details">
					<h3>${name}</h3>
					<p>${desc}</p>
					<div class="price-quantity">
						<h2>$ ${price}</h2>
						<div class="buttons">
							<i class="bi bi-plus-circle-fill" onclick="increment(${id})"></i>
							<div id="${id}"class="quantity">${search.item === undefined? 0: search.item}</div>
							<i class="bi bi-dash-circle-fill" onclick="decrement(${id})"></i>
						</div>
					</div>
				</div>	
			</div>`
	}).join(""));
};

generateShop();


let increment = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem);
	
	if(search === undefined){
		basket.push({
			id: selectedItem,
			item: 1,
		});
	}else {
		search.item+=1;
	}
	localStorage.setItem("data",JSON.stringify(basket) ); // hot to store the data

	// console.log(basket);
	update(selectedItem);
};
let decrement = (id) => {
	let selectedItem = id;
	let search = basket.find((x)=> x.id === selectedItem);
	if(search !== undefined && search.item>0){
		search.item-=1;
		localStorage.setItem("data",JSON.stringify(basket) ); // hot to store the data
		
		
	}else {
		return;
	}
	
	// console.log(basket);
	update(selectedItem);
};

let update = (id) => {
	
	let search = basket.find((x)=>x.id === id);
	// console.log(search);
	document.getElementById(id).innerHTML = search.item;
	calculation();
};

let calculation = () => {
	let cartIcon = document.getElementById("cartNumber");
	//console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
	document.getElementById("cartNumber").innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
};


calculation();