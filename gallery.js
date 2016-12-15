function load(){
	var path = 'ngbtl95.github.io/gallery.html'
	url = window.location.toString();
	if (url[url.length - 1] == '0'){
		sessionStorage['opened_img'] = 0
		window.location.assign('gallery.html')
	}
	opened_img = sessionStorage['opened_img'];
 	if (sessionStorage['opened_img'] != 0)
 		open_img(opened_img)
 	
 }

function close_img(){
	var el = document.getElementsByClassName('popup')[0];
 		el.parentNode.removeChild(el);
		localStorage['opened_img'] = 0;
}

function create_popup(addr){
	var path = "ngbtl95.github.io/gallery.html?"

	var popup = document.createElement('div');
 	popup.className = "popup";
 	container = document.getElementsByClassName('container')[0]
 	popup_height = container.offsetHeight + 'px'
 	popup.style.height = popup_height;
 	document.body.appendChild(popup)

 	var popup_bg = document.createElement('div');
 	popup_bg.className = "popup_bg";
 	popup.appendChild(popup_bg);

 	var modal_close = document.createElement('a');
  	modal_close.id = "modal_close";
	modal_close.innerHTML = "X";
 	modal_close.href = "/gallery.html?" + '0';
 	popup_bg.appendChild(modal_close);

 	var loading = document.createElement('p')
 	loading.id = 'loading'
 	loading.innerHTML = 'Loading...'
 	popup_bg.appendChild(loading);

 	var img = document.createElement('img');
 	img.src = addr;
 	img.className = "popup_img";
 	popup.appendChild(img);

 	return(img);
}

function open_img(id){
    var mas = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg', '6.jpg', '7.jpg',
 	'8.jpg', '9.jpg']
 	var img = document.getElementById(id);
 	var addr = img.src;
 	var img_name = addr.match(/([0-9]+)(\.jpg)/i);
 	var img_number = Number(img_name[1]);
 	img_name = img_name[0]
 	addr = addr.replace("little-image", "big-image");
	sessionStorage.setItem('opened_img', id);
	img = create_popup(addr)
 	
 	addEventListener('keydown', function keydownListen(event){
 		if (event.keyCode == 27){
 			close_img();
 			removeEventListener('keydown', keydownListen) 		
 		}
 		if (event.keyCode == 39){ //right
 			if (img_number < mas.length)
 				img_number++;
 			else
 				img_number = 1;
 			img.src = addr.replace(img_name, img_number + '.jpg');
 			sessionStorage['opened_img'] = img_number;
 		}
 		if (event.keyCode == 37){ //left
 			if (img_number > 1)
 				img_number--;
 			else
 				img_number = mas.length;
 			img.src = addr.replace(img_name, img_number + '.jpg');
 			sessionStorage['opened_img'] = img_number;
 		}
 });
return;
}