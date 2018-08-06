//static variables//
var controls;
var renderer = new THREE.WebGLRenderer({antialias: true});
var canvas;
var canvasPosition;
var container;
var camera;
var scene;
var assyStr;
var selectedPartName;
var assemblyName;
var parcaListesi = [];
var kirmizi = [];
var s = 0;
var turuncu=[];
var a=0;
var kesisen=[];
var parca;
var mouse = new THREE.Vector2();//
var raycaster = new THREE.Raycaster();//
var uzerindeRenk;
var kirmizi=0xff0000;
var yesil=0x00ff00;
var mavi=0x0000ff;
var baslaTiklandi=0;
var panel1;
var panel2;
var yuz;
var paneller=[];
var baglaCalisti=0;
var kirmizi1,kirmizi2,yesil1,yesil2,mavi1,mavi2;
var parcaAdi;
var r = document.querySelectorAll("ul.ul");

function baslat(){
for(i=0;i<parcaListesi.length;i++){
	for(j=0;j<12;j=j+1){
parcaListesi[i].geometry.faces[j].color.setHex(0xffffff);
parcaListesi[i].geometry.colorsNeedUpdate=true;
}}

baslaTiklandi=1;
document.getElementById("secim1").style.backgroundColor="yellow";
document.getElementById("secim2").style.backgroundColor="white";
document.getElementById("secim3").style.backgroundColor="white";
document.getElementById("secim4").style.backgroundColor="white";
document.getElementById("secim5").style.backgroundColor="white";
document.getElementById("secim6").style.backgroundColor="white";
$("#secim1").text('Secim1');
$("#secim2").text('Secim2');
$("#secim3").text('Secim3');
$("#secim4").text('Secim4');
$("#secim5").text('Secim5');
$("#secim6").text('Secim6');
}







function setCanvasSize() {
	console.log("setCanvasSize çalıştı");
    renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function addLights() {
	console.log("addLights çalıştı");
    // lights
    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(1, 1, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(-1, -1, -1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(1, -1, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(-1, 1, -1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(-1, 0, -1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(0, -1, 0);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(0, 1, 0);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(1, 0, 0);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(0, 0, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x222222);
    light.position.set(0, 0, 1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x222222);
    light.position.set(0, 0, -1);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(1, 1, 0);
    scene.add(light);

    var light = new THREE.DirectionalLight(0x444444);
    light.position.set(-1, -1, 0);
    scene.add(light);

    var light = new THREE.AmbientLight(0x333333);
    scene.add(light);
}

function initializeControl() {
	console.log("initializeControl çalıştı");
    controls = new THREE.TrackballControls(camera);
    controls.rotateSpeed = 1.0 * 3;
    controls.zoomSpeed = 1.2 * 3;
    controls.panSpeed = 0.8 * 3;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [65, 83, 68];
}



function onDocumentMouseDown(event) {
	
    if (baslaTiklandi==0) return;

	
	canvasPosition = $("canvas").position();
    instersects = [];
    var canvasTop = 0;
    var canvasLeft = 0;
    var cnv = $("canvas")[0];
    while (cnv && (cnv != document.body)) {
        canvasTop += cnv.offsetTop;
        canvasLeft += cnv.offsetLeft;
        cnv = cnv.offsetParent;
    }


    mouse.x = (((event.clientX - canvasLeft) / canvas.width) * 2 - 1);// @
    mouse.y = (-((event.clientY - canvasTop) / canvas.height) * 2 + 1);// @


    raycaster.setFromCamera(mouse, camera);//
    

	
	kesisen = raycaster.intersectObjects(parcaListesi);//tıkladığımız yeri kesişene attık
	   
	  
		
  if (kesisen[0] == null) {//kesisen boşsa fonksiyondan çık
        return; }
sayac=kesisen[0].faceIndex;
switch(sayac){
case 0:
case 1:
yuz=0;
break;
case 2:
case 3:
yuz=1;
break;
case 4:
case 5:
yuz=2;
break;
case 6:
case 7:
yuz=3;
break;
case 8:
case 9:
yuz=4;
break;
case 10:
case 11:
yuz=5;
break;}		
switch (baslaTiklandi){
		case 1://birinci panel için kırmızı boyama işlemi
			
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) kirmizi1=sayac;
			if(sayac%2!=0) kirmizi1=sayac-1;
			for(i=0;i<parcaListesi.length;i++){
			if(kesisen[0].object==parcaListesi[i]) panel1=i;}
			
			
			if(kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0) return;
			tiklaRenk=0xff0000;
			baslaTiklandi=baslaTiklandi+1;
			document.getElementById("secim1").style.backgroundColor="chartreuse";
			document.getElementById("secim1").style.color="black";
			
			$("#secim1").text('SEÇTİĞİNİZ PANEL: '+panel1+' YÜZ: '+yuz);
			document.getElementById("secim2").style.backgroundColor="yellow";
			document.getElementById("joiningPart").value=paneller[panel1];
			$("#joiningPart").text(paneller[panel1]);
			$("#joiningFaces1").text(yuz);
			document.getElementById("joiningFaces1").value=yuz;
			
			break;
		
		case 2://ikinci panel için kırmızı boyama işlemi
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) kirmizi2=sayac;
			if(sayac%2!=0) kirmizi2=sayac-1;
			for(i=0;i<parcaListesi.length;i++){
				if(kesisen[0].object==parcaListesi[i]){ panel2=i;
				if(panel1==panel2){
					
					alert("aynı panelden 2 kenar seçemezsiniz.Lütfen başka bir panelden kenar seçin.");
				return;}
			}}
			
			
				if((kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==1)){
			alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");	
			return;}
			tiklaRenk=0xff0000;
			baslaTiklandi=baslaTiklandi+1;
			document.getElementById("secim2").style.backgroundColor="chartreuse";
			document.getElementById("secim2").style.color="black";
			
			$("#secim2").text('SEÇTİĞİNİZ PANEL: '+panel2+' YÜZ: '+yuz);
			document.getElementById("secim3").style.backgroundColor="yellow";
			document.getElementById("joinedPart").value=paneller[panel2];
			$("#joinedPart").text(paneller[panel2]);
			$("#joinedFaces1").text(yuz);
			document.getElementById("joinedFaces1").value=yuz;
			break;
		case 3://birinci panel için yeşile boyama işlemi
			if(kesisen[0].object != parcaListesi[panel1]){
				alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
			return;}
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) yesil1=sayac;
			if(sayac%2!=0) yesil1=sayac-1;
			/*for(i=0;i<parcaListesi.length;i++){
			if(kesisen[0].object==parcaListesi[i]) panel1=i;}*/
			
			
				if((kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==1)){
			alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");	
			return;}
			tiklaRenk=0x00ff00;
			baslaTiklandi=baslaTiklandi+1;
			document.getElementById("secim3").style.backgroundColor="chartreuse";
			document.getElementById("secim3").style.color="black";
			
			$("#secim3").text('SEÇTİĞİNİZ PANEL: '+panel1+' YÜZ: '+yuz);
			document.getElementById("secim4").style.backgroundColor="yellow";
			$("#joiningFaces2").text(yuz);
			document.getElementById("joiningFaces2").value=yuz;
			break;
		case 4://ikinci panel için yeşile boyama işlemi
			
			if(kesisen[0].object != parcaListesi[panel2]){
			alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
			return;}
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) yesil2=sayac;
			if(sayac%2!=0) yesil2=sayac-1;
			/*for(i=0;i<parcaListesi.length;i++){
				if(kesisen[0].object==parcaListesi[i]){ panel2=i;
				if(panel1==panel2){
					
					alert("aynı panelden 2 kenar seçemezsiniz.Lütfen başka bir panelden kenar seçin.");
				return;}
			}}*/
			
				if((kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==1)){
			alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");	
			return;}
			tiklaRenk=0x00ff00;
			baslaTiklandi=baslaTiklandi+1;
			document.getElementById("secim4").style.backgroundColor="chartreuse";
			document.getElementById("secim4").style.color="black";
			
			$("#secim4").text('SEÇTİĞİNİZ PANEL: '+panel2+' YÜZ: '+yuz);
			document.getElementById("secim5").style.backgroundColor="yellow";
			$("#joinedFaces2").text(yuz);
			document.getElementById("joinedFaces2").value=yuz;
			break;
			
		
		case 5://birinci panel için maviye boyama işlemi
			if(kesisen[0].object != parcaListesi[panel1]){
				alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
			return;}
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) mavi1=sayac;
			if(sayac%2!=0) mavi1=sayac-1;
			/*for(i=0;i<parcaListesi.length;i++){
			if(kesisen[0].object==parcaListesi[i]) panel1=i;}*/
			
			
		if((kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==1)){
			alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");	
			return;}
			tiklaRenk=0x0000ff;
			baslaTiklandi=baslaTiklandi+1;
			document.getElementById("secim5").style.backgroundColor="chartreuse";
			document.getElementById("secim5").style.color="black";
			
			$("#secim5").text('SEÇTİĞİNİZ PANEL: '+panel1+' YÜZ: '+yuz);
			document.getElementById("secim6").style.backgroundColor="yellow";
			$("#joiningFaces3").text(yuz);
			document.getElementById("joiningFaces3").value=yuz;
			break;
		case 6://ikinci panel için maviye boyama işlemi
		
		if(kesisen[0].object != parcaListesi[panel2]){
			alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
			return;}
			sayac=kesisen[0].faceIndex;
			if(sayac%2==0) mavi2=sayac;
			if(sayac%2!=0) mavi2=sayac-1;
			/*for(i=0;i<parcaListesi.length;i++){
				if(kesisen[0].object==parcaListesi[i]){ panel2=i;
				if(panel1==panel2){
					
					alert("aynı panelden 2 kenar seçemezsiniz.Lütfen başka bir panelden kenar seçin.");
				return;}
			}}*/
			
			if((kesisen[0].object.geometry.faces[sayac].color.r==1 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0)||(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==0 && kesisen[0].object.geometry.faces[sayac].color.b==1)){
			alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");	
			return;}
			if(kesisen[0].object.geometry.faces[sayac].color.r==0 && kesisen[0].object.geometry.faces[sayac].color.g==1 && kesisen[0].object.geometry.faces[sayac].color.b==0) return;
			tiklaRenk=0x0000ff;
			baslaTiklandi=0;
			document.getElementById("secim6").style.backgroundColor="chartreuse";
			document.getElementById("secim6").style.color="black";
			$("#joinedFaces3").text(yuz);
			document.getElementById("joinedFaces3").value=yuz;
			
			$("#secim6").text('SEÇTİĞİNİZ PANEL: '+panel2+' YÜZ: '+yuz);
			
			break;
	
	
	}
		
var yuz=0;	
var sayac=kesisen[0].faceIndex;
switch(sayac){
case 0:
case 1:
yuz=0;
break;
case 2:
case 3:
yuz=1;
break;
case 4:
case 5:
yuz=2;
break;
case 6:
case 7:
yuz=3;
break;
case 8:
case 9:
yuz=4;
break;
case 10:
case 11:
yuz=5;
break;}	
/*if((kesisen[0].face.color.r==1) && (kesisen[0].face.color.g==0) && ( kesisen[0].face.color.b==0))//eğer tıkladığımız kırmızıysa beyaz yap
{

kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
 if(sayac%2==0) sayac=sayac+1;{
kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
 kesisen[0].object.geometry.colorsNeedUpdate=true;}

 if ((sayac%2)!=0)sayac=sayac-1;{
kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
kesisen[0].object.geometry.colorsNeedUpdate=true;	

								}}
else
	{*/
		kesisen[0].object.geometry.faces[sayac].color.setHex(tiklaRenk);//tiklanan renkte yüzeyi boyamak
			if(sayac%2==0) sayac=sayac+1;{
				kesisen[0].object.geometry.faces[sayac].color.setHex(tiklaRenk);	
				kesisen[0].object.geometry.colorsNeedUpdate=true;
				for(i=0;parcaListesi.length;i++){
					if(parcaListesi[i]==kesisen[0].object){
					parca=i;
					break;}
				}
						
				
				
				}
			if ((sayac%2)!=0)sayac=sayac-1;{
				kesisen[0].object.geometry.faces[sayac].color.setHex(tiklaRenk);
				kesisen[0].object.geometry.colorsNeedUpdate=true;			
								for(i=0;parcaListesi.length;i++){
					if(parcaListesi[i]==kesisen[0].object){
					parca=i;
					break;
					}
																}
															
											}
	console.log("Seçtiğiniz parça:"+parca+" seçtiğiniz face:"+yuz);
 	
	
	//}

}

function mouseMove(event) {
var r = document.querySelectorAll("ul.ul");
   
	controls.enabled = true;
 if (baslaTiklandi==0) return;

 switch (baslaTiklandi){
	 case 1:
	 case 2:
	uzerindeRenk=0xff4444;
	 break;
	 case 3:
	 case 4:
	 uzerindeRenk=0xb6fcd5;
	 break;
	 case 5:
	 case 6:
	 uzerindeRenk=0x00ced1;
	 break;
	 case 7:
	 alert("Birleştirmek istediğiniz 2 panel için 3'er den toplam 6 tane kenar seçebilirsiniz.İf you want to birleştirmek your panels,you can choose only 6 faces :)");
	 baslaTiklandi=0;
 break;}
    canvasPosition = $("canvas").position();

    var canvasTop = 0;
    var canvasLeft = 0;
    var cnv = $("canvas")[0];
    while (cnv && (cnv != document.body))   {
        canvasTop += cnv.offsetTop;
        canvasLeft += cnv.offsetLeft;
        cnv = cnv.offsetParent;
											}
    

    mouse.x = (((event.clientX - canvasLeft) / canvas.width) * 2 - 1);// @
    mouse.y = (-((event.clientY - canvasTop) / canvas.height) * 2 + 1);// @

    raycaster.setFromCamera(mouse, camera);
	var uzerinde=[];
	uzerinde= raycaster.intersectObjects(parcaListesi);
	
		
	 if (uzerinde[0] == null) {//uzerinde boşsa fonksiyondan çık çıkmadan önce bütün objelerin bütün kenarlarının renklerini tara. yeşil kalan varsa beyaz yap
	 for(p=0;p<parcaListesi.length;p++){
		 for(t=0;t<12;t++) {
			 if((parcaListesi[p].geometry.faces[t].color.r==0)&&(parcaListesi[p].geometry.faces[t].color.g==1)&&(parcaListesi[p].geometry.faces[t].color.b==0))continue;
			 if((parcaListesi[p].geometry.faces[t].color.r==1)&&(parcaListesi[p].geometry.faces[t].color.g==0)&&(parcaListesi[p].geometry.faces[t].color.b==0))continue;
			 if((parcaListesi[p].geometry.faces[t].color.r==0)&&(parcaListesi[p].geometry.faces[t].color.g==0)&&(parcaListesi[p].geometry.faces[t].color.b==1))continue;
				parcaListesi[p].geometry.faces[t].color.setHex(0xffffff); 
				}			
							
							parcaListesi[p].geometry.colorsNeedUpdate=true;
							
							}//BÜTÜN PARÇALARIN RENKLERİNİ GÜNCELLEDİM.
		
		
															
						return;		}
								
		var oteki;
		var sayac=uzerinde[0].faceIndex;
		if(sayac%2==0) oteki=sayac+1;
		if(sayac%2!=0) oteki=sayac-1;
		if ((uzerinde[0].face.color.r==1)&&(uzerinde[0].face.color.g==1)&&(uzerinde[0].face.color.b==1)) {//uzerinde olduğu yüzey beyazsa yeşil yapıcaz
			 for(i=0;i<parcaListesi.length;i++){
				 if(parcaListesi[i]==uzerinde[0].object){
					 
					 parca=i;}
				yuzu1=sayac;
			 yuzu2=oteki;}
			 for(j=0;j<parcaListesi.length;j++){
				//while(j!=parca){
				
				for(q=0;q<12;q=q+2){
			if(parcaListesi[j].geometry.faces[q].color.r==1 && parcaListesi[j].geometry.faces[q].color.g==0 && parcaListesi[j].geometry.faces[q].color.b==0) continue;
			if(parcaListesi[j].geometry.faces[q].color.r==0 && parcaListesi[j].geometry.faces[q].color.g==1 && parcaListesi[j].geometry.faces[q].color.b==0) continue;
			if(parcaListesi[j].geometry.faces[q].color.r==0 && parcaListesi[j].geometry.faces[q].color.g==0 && parcaListesi[j].geometry.faces[q].color.b==1) continue;
				parcaListesi[j].geometry.faces[q].color.setHex(0xffffff);
				parcaListesi[j].geometry.faces[q+1].color.setHex(0xffffff);
				parcaListesi[j].geometry.colorsNeedUpdate=true;}//}
				//}
				}
			 
			 uzerinde[0].object.geometry.faces[sayac].color.setHex(uzerindeRenk);
			 uzerinde[0].object.geometry.faces[oteki].color.setHex(uzerindeRenk);
			 uzerinde[0].object.geometry.colorsNeedUpdate=true;
			
			
			
		}
				
	/*else if(uzerinde[0]!=null){
			var sayac=uzerinde[0].faceIndex;	
			if((uzerinde[0].face.color.r==1) && (uzerinde[0].face.color.g==1) && ( uzerinde[0].face.color.b==1)){//eğer üzerinde olduğumuz kenar beyazsa yeşil yap diyeceğiz aşağıda
				if(sayac%2==0) sayac=sayac+1;{
				uzerinde[0].object.geometry.faces[sayac].color.setHex(0x00ff00);	
				uzerinde[0].object.geometry.colorsNeedUpdate=true;}
				if ((sayac%2)!=0)sayac=sayac-1;{
				uzerinde[0].object.geometry.faces[sayac].color.setHex(0x00ff00);
				uzerinde[0].object.geometry.colorsNeedUpdate=true;}}	
			
		 for(var p=0;p<parcaListesi.length;p++){
			for(var t=0;t<12;t++) {
			 if((parcaListesi[p].geometry.faces[t].color.r==0)&&(parcaListesi[p].geometry.faces[t].color.g==1)&&(parcaListesi[p].geometry.faces[t].color.b==0)&&(parcaListesi[p]!=uzerinde[0].object)&&(t!=sayac)){
				parcaListesi[p].geometry.faces[t].color.setHex(0xffffff); 
				parcaListesi[p].geometry.colorsNeedUpdate=true;
			 }			
						
		 }//BÜTÜN PARÇALARIN RENKLERİNİ GÜNCELLEDİM.
		}
		
		
		
					
					
					
					
					
					
}*/	}			
											
	
						//fonk sonu
		


function mouseLeaved(event) {    controls.enabled = false;      }

function mouseEntered(event) {    controls.enabled = true;      }

function init() {
	console.log("init çalıştı");

	parcaListesi = [];
   
    intersects2 = [];
    container = document.getElementById("assyContainer");


    canvas = renderer.domElement;
    container.appendChild(canvas);

    $(canvas).click(onDocumentMouseDown);
    $(canvas).mousemove(mouseMove);
    $(canvas).mouseleave(mouseLeaved);
	


    canvasPosition = $(canvas).position();
	

    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 10000);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 10000);
    camera.position.z = 10000;
    initializeControl();
    addLights();
    setCanvasSize();

    function render() {
		

        controls.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
		
    }
	

    render();
}

function clearScene() {
	console.log("clearScene çalıştı");
    for (let i = scene.children.length - 1; i >= 0; i--) {
        if (scene.children[i].type === "Mesh") {
            obj = scene.children[i];
            scene.remove(scene.children[i]);
            if (obj.geometry) obj.geometry.dispose()
            if (obj.material) obj.material.dispose()
            if (obj.texture) obj.texture.dispose()
        }
    }
}

function partSelected(atag) {
	console.log("partSelected çalıştı");
    selectedPartName = atag.innerHTML;
    loadSelectedPartPanel();
    return false;
}

function loadSelectedPartPanel() {
	console.log("loadSelectedPartPanel çalıştı");
	
    document.getElementById("selectedPartPropertyDiv").style.visibility = 'hidden';
    document.getElementById("selectedPartTitle").innerHTML = "";
    if (!(selectedPartName == null)) {
        document.getElementById("selectedPartTitle").innerHTML = selectedPartName;
        document.getElementById("selectedPartPropertyDiv").style.visibility = 'visible';
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(assyStr, "text/xml");
        x = xmlDoc.documentElement.childNodes;
        for (i = 0; i < x.length; i++) {
            if (x[i].nodeName == "panel") {
                console.log(x[i]);
				
				if (x[i].getAttribute("name") == selectedPartName) {
					parcaAdi=x[i].getAttribute("name");
					console.log(parcaListesi);
					
					for(q=0;q<parcaListesi.length;q++){
					if(parcaAdi==paneller[q]){
						for(p=0;p<12;p++){
						if(parcaListesi[q].geometry.faces[p].color.r!=0 && parcaListesi[q].geometry.faces[p].color.g!=0 && parcaListesi[q].geometry.faces[p].color.b!=0){
						parcaListesi[q].geometry.faces[p].color.setHex(0x000000);}
						else {parcaListesi[q].geometry.faces[p].color.setHex(0xffffff);}
					parcaListesi[q].geometry.colorsNeedUpdate=true;}}}
					
						
					
					
					
                    var direction = x[i].getAttribute("direction");
                    var width = parseFloat(x[i].getAttribute("width"));
                    var height = parseFloat(x[i].getAttribute("height"));
                    var thickness = parseFloat(x[i].getAttribute("thickness"));
                    var stripeThickness = parseFloat(x[i].getAttribute("stripThickness"));
                    document.getElementById("stripeThickness").value = stripeThickness;
                    var stripestr = x[i].getAttribute("stripes");
					
                    var stripes = stripestr.split('-');

                    document.getElementById("k1").checked = parseInt(stripes[0]);
                    document.getElementById("k2").checked = parseInt(stripes[1]);
                    document.getElementById("k3").checked = parseInt(stripes[2]);
                    document.getElementById("k4").checked = parseInt(stripes[3]);

                    document.getElementById("width").value = width;
                    document.getElementById("height").value = height;
                    document.getElementById("thickness").value = thickness;
                    return;
                }
            }
        }
    }
}

function loadPartList(panels) {
	console.log("loadPartList çalıştı");
    selectedPartName = null;
    document.getElementById("partList").innerHTML = "";
    for (i = 0; i < panels.length; ++i) {
        var listItem = document.createElement("li");
        var atag = document.createElement("a");
		
        atag.innerHTML = panels[i];
		
        atag.setAttribute("href", "#");
        atag.onclick = function () {
		console.log(parcaAdi);
				
			
			
			partSelected(this);
        };

        var deleteButton = document.createElement("a");
        deleteButton.className = "deleteBtn";
        deleteButton.innerHTML = "X";
        deleteButton.onclick = function () {
            deletePart(this);
        };

        listItem.appendChild(atag);
        listItem.appendChild(deleteButton);
        document.getElementById("partList").appendChild(listItem);
    }
    loadSelectedPartPanel();
    loadJoinPartsDropBox(panels);
}

function removeOptions(selectbox) {
	console.log("removeOptions çalıştı");
    var i;
    for (i = paneller.length - 1; i >= 0; i--) {
        selectbox.remove(i);
    }
}

function loadJoinPartsDropBox(panels) {
	console.log("loadJoinPartsDropBox çalıştı");
    var joiningPartBox = document.getElementById("joiningPart");
    var joinedPartBox = document.getElementById("joinedPart");
    removeOptions(joiningPartBox);
    removeOptions(joinedPartBox);
    
	for (i = 0; i < panels.length; ++i) {
        //var opt1 = document.createElement("option");
        //opt1.value = panels[i];
        //opt1.innerHTML = panels[i];
        //var opt2 = document.createElement("option");
        //opt2.value = panels[i];
        //opt2.innerHTML = panels[i];
		paneller[i]=panels[i];
		


        //joiningPartBox.appendChild(opt1);
        //joinedPartBox.appendChild(opt2);

    }
}

function loadAssyNames(names) {
	console.log("loadAssyNames çalıştı");
    var assyNames = names.split("@");
    var i;
    document.getElementById("assyList").innerHTML = "";
    for (i = 0; i < assyNames.length; i++) {
        var listItem = document.createElement("li");
        var atag = document.createElement("a");
        atag.innerHTML = assyNames[i];
        atag.setAttribute("href", "#");

        atag.onclick = function () {
            loadAssembly(this);
        };

        var deleteButton = document.createElement("a");
        deleteButton.className = "deleteBtn";
        deleteButton.innerHTML = "X";
        deleteButton.onclick = function () {
            deleteAssembly(this);
        };

        listItem.appendChild(atag);
        listItem.appendChild(deleteButton);
        document.getElementById("assyList").appendChild(listItem);
    }
}

function loadAssy(str) {
	console.log("loadAssy çalıştı");
    assyStr = str;
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(str, "text/xml");
    clearScene();
    paneller=[];
	parcaListesi=[];


    x = xmlDoc.documentElement.childNodes;
    var panels = [];
    for (i = 0; i < x.length; i++) {
        if (x[i].nodeName == "panel") {
            var direction = x[i].getAttribute("direction");
            var width = parseFloat(x[i].getAttribute("width"));
            var height = parseFloat(x[i].getAttribute("height"));
            var thickness = parseFloat(x[i].getAttribute("thickness"));
            var partName = x[i].getAttribute("name");
            var stripestr = x[i].getAttribute("stripes");
            var stripes = stripestr.split('-');
            var side1 = parseInt(stripes[0]);
            var side2 = parseInt(stripes[1]);
            var side3 = parseInt(stripes[2]);
            var side4 = parseInt(stripes[3]);
            panels.push(partName);
            var geometry = new THREE.BoxGeometry(width, height, thickness, 1, 1, 1);
            // set side Colors according to stripes //
            for (var s = 0; s < 12; s++) {
                geometry.faces[s].color.setHex(0xffffff);
                if ((s == 0 || s == 1) && side1)
                    geometry.faces[s].color.setHex(0xffffff);
                else if ((s == 4 || s == 5) && side2)
                    geometry.faces[s].color.setHex(0xffffff);
                else if ((s == 2 || s == 3) && side3)
                    geometry.faces[s].color.setHex(0xffffff);
                else if ((s == 6 || s == 7) && side4)
                    geometry.faces[s].color.setHex(0xffffff);
            }
            var material = new THREE.MeshPhongMaterial({
                color: 0xffffff,
                flatShading: true,
                vertexColors: THREE.VertexColors
            });
            //take transform information//
            tr = x[i].getElementsByTagName("tr")[0];

            var trString = tr.getAttribute("values");
            var values = trString.split('*');
            for (z = 0; z < values.length; ++z) {
                values[z] = parseFloat(values[z]);
            }
            var bufferGeometry = new THREE.BufferGeometry().fromGeometry(geometry);
            geometry.applyMatrix(new THREE.Matrix4().set(values[0], values[1], values[2], values[3],
                values[4], values[5], values[6], values[7],
                values[8], values[9], values[10], values[11],
                values[12], values[13], values[14], values[15]
            ));
            var panel = new THREE.Mesh(geometry, material);
            panel.updateMatrix();
            scene.add(panel);
            var a = 0;
            var b = 0;
            while (1) {
                b = a + 14;
                parcaListesi[a] = scene.children[b];

                if (scene.children[b + 1] == null) break;

                a = a + 1;
            }


        }
    }
    loadPartList(panels);
}