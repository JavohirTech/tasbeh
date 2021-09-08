let ekran = document.querySelector('.ekran');

document.querySelector('.tugma').addEventListener('click', ()=>{
	// let ekran = document.querySelector('.ekran');
	ekran.value = parseInt(ekran.value)+1;
	console.log(parseInt(ekran.value));
	if (ekran.value > 33) {
		window.alert('33ta');
		ekran.value = 0;
	}
});

document.querySelector('.reset').addEventListener('click', ()=>{
	ekran.value = 0;
});