const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach((e) => {
	var img = new Image();
	img.src = "./assets/images/slideshow/"+e.image;
	img.alt = e.tagLine;
	let img_liste = document.getElementById("img-carossel").appendChild(img);
})



				


let droite = document.querySelector('.droite');
var inc = 0;

	droite.addEventListener('click', ()=>{
		inc = inc +1;
		inc = inc % slides.length;
		
		var img_slide = document.getElementsByClassName("banner-img");
		var src_img = slides[inc].image;
		var src_tagLine = slides[inc].tagLine;
		img_slide.src = src_img;
		img_slide.alt = src_tagLine;

		img_slide = document.getElementsByClassName("banner-img");
		console.log(img_slide);

	})


