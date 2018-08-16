//static variables//

class PanelInfo {
    constructor(name, joiningPanel, distances, faces1, faces2) {
        this.name = name;
        this.joinedPanel = joiningPanel;
        this.joinDistances = distances;
        this.faces1 = faces1;
        this.faces2 = faces2;
    }
}

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
var part_list = [];
var panels = [];
var s = 0, a = 0;
var kesisen = [];
var part;
var mouse = new THREE.Vector2();//
var raycaster = new THREE.Raycaster();//
var hover_color;
var start_flag = 0;// basla fonksiyonu için flag
var panel1;
var panel2;
var yuz;
var panels_array = [];
var baglaCalisti = 0;
var kirmizi1, kirmizi2, yesil1, yesil2, mavi1, mavi2;
var parcaAdi;
var r = document.querySelectorAll("ul.ul");
var materialArray = [];
var yuz1, yuz2, yuz3, yuz2_1, yuz2_2, yuz2_3;
var mesafeler1 = [], mesafeler2 = [], mesafeler3 = [];
var joinedFaces1 = [], joinedFaces2 = [], joinedFaces3 = [], joiningFaces1 = [], joiningFaces2 = [], joiningFaces3 = [];
var joinedPanel = [];
var i = 0;
var selectedJoinID = -1;
var faceIndexArr = [2, 2, 3, 3, 4, 4, 5, 5, 0, 0, 1, 1];

function joinTikla(jtag) {
    // document.getElementById("selectedJoinPropertyDiv").style.visibility =
    // 'visible';
    i = jtag.id;
    selectedJoinID = i;
    // console.log(i);
    if (panels[i].joinDistances != null) {
        // console.log(panels[i].joinedPanel);
        document.getElementById("distance1").placeholder = parseInt(panels[i].joinDistances[0]);
        document.getElementById("distance2").placeholder = parseInt(panels[i].joinDistances[1]);
        document.getElementById("distance3").placeholder = parseInt(panels[i].joinDistances[2]);
        document.getElementById("joiningFaces1").value = parseInt(panels[i].faces2[0]);//
        document.getElementById("joiningFaces2").value = parseInt(panels[i].faces2[1]);
        document.getElementById("joiningFaces3").value = parseInt(panels[i].faces2[2]);
        document.getElementById("joinedFaces1").value = parseInt(panels[i].faces1[0]);
        document.getElementById("joinedFaces2").value = parseInt(panels[i].faces1[1]);
        document.getElementById("joinedFaces3").value = parseInt(panels[i].faces1[2]);
        document.getElementById("joiningPart").value = panels[i].name;
        document.getElementById("joinedPart").value = panels[i].joinedPanel;
    }
}


function baslat() {

    for (i = 0; i < part_list.length; i++) {
        for (j = 0; j < 12; j = j + 1) {
            part_list[i].geometry.faces[j].color.setHex(0xffffff);
            switch (j) {
                case 0:
                case 1:
                    part_list[i].geometry.faces[j].materialIndex = 0;
                    break;
                case 2:
                case 3:
                    part_list[i].geometry.faces[j].materialIndex = 1;
                    break;
                case 4:
                case 5:
                    part_list[i].geometry.faces[j].materialIndex = 2;
                    break;
                case 6:
                case 7:
                    part_list[i].geometry.faces[j].materialIndex = 3;
                    break;
                case 8:
                case 9:
                    part_list[i].geometry.faces[j].materialIndex = 4;
                    break;
                case 10:
                case 11:
                    part_list[i].geometry.faces[j].materialIndex = 5;
                    break;
                default:
                    break;
            }
            part_list[i].geometry.elementsNeedUpdate = true;
            part_list[i].geometry.colorsNeedUpdate = true;

        }
    }

    start_flag = 1;
    // document.getElementById("secim1").style.backgroundColor = "black";
    // document.getElementById("secim2").style.backgroundColor = "white";
    // document.getElementById("secim3").style.backgroundColor = "white";
    // document.getElementById("secim4").style.backgroundColor = "white";
    // document.getElementById("secim5").style.backgroundColor = "white";
    // // document.getElementById("secim6").style.backgroundColor = "white";
    // $("#secim1").text('Secim1');
    // $("#secim2").text('Secim2');
    // $("#secim3").text('Secim3');
    // $("#secim4").text('Secim4');
    // $("#secim5").text('Secim5');
    // $("#secim6").text('Secim6');
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

    if (start_flag == 0) return;

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
    kesisen = raycaster.intersectObjects(part_list);// tıkladığımız yeri
    // kesişene attık
    if (kesisen[0] == null) {// kesisen boşsa fonksiyondan çık
        return;
    }
    sayac = kesisen[0].faceIndex;
    yuz = faceIndexArr[sayac];


    switch (start_flag) {
        case 1:// birinci panel için kırmızı boyama işlemi
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) kirmizi1 = sayac;
            if (sayac % 2 != 0) kirmizi1 = sayac - 1;
            for (i = 0; i < part_list.length; i++) {
                if (kesisen[0].object == part_list[i]) panel1 = i;
            }
            if (kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) return;
            tiklaRenk = 0xff0000;

            start_flag = start_flag + 1;
            document.getElementById("secim1").style.backgroundColor = "chartreuse";
            document.getElementById("secim1").style.color = "black";
            yuz1 = yuz;

            $("#secim1").text('SEÇTİĞİNİZ PANEL: ' + panels[panel1].name + ' YÜZ: ' + yuz);
            document.getElementById("joiningFaces1").value = yuz;
            document.getElementById("joiningPart").value = panels[panel1].name;
            document.getElementById("secim2").style.backgroundColor = "yellow";
            break;
        case 2:// ikinci panel için kırmızı boyama işlemi
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) kirmizi2 = sayac;
            if (sayac % 2 != 0) kirmizi2 = sayac - 1;
            for (i = 0; i < part_list.length; i++) {
                if (kesisen[0].object == part_list[i]) {
                    panel2 = i;
                    if (panel1 == panel2) {

                        alert("aynı panelden 2 kenar seçemezsiniz.Lütfen başka bir panelden kenar seçin.");
                        return;
                    }
                }
            }


            if ((kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 1)) {
                alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");
                return;
            }
            tiklaRenk = 0xff0000;
            // yazsin=1;
            start_flag = start_flag + 1;
            document.getElementById("secim2").style.backgroundColor = "chartreuse";
            //document.getElementById("secim2").style.color = "black";


            yuz2_1 = yuz;

            $("#secim2").text('SEÇTİĞİNİZ PANEL: ' + panels[panel2].name + ' YÜZ: ' + yuz);
            document.getElementById("joinedFaces1").value = yuz;
            document.getElementById("joinedPart").value = panels[panel2].name;
            document.getElementById("secim3").style.backgroundColor = "yellow";

            break;
        case 3:// birinci panel için yeşile boyama işlemi
            if (kesisen[0].object != part_list[panel1]) {
                alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
                return;
            }
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) yesil1 = sayac;
            if (sayac % 2 != 0) yesil1 = sayac - 1;

            if ((kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 1)) {
                alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");
                return;
            }
            tiklaRenk = 0x00ff00;

            start_flag = start_flag + 1;
            document.getElementById("secim3").style.backgroundColor = "chartreuse";
            document.getElementById("secim3").style.color = "black";
            yuz2 = yuz;
            $("#secim3").text('SEÇTİĞİNİZ PANEL: ' + panels[panel1].name + ' YÜZ: ' + yuz);
            document.getElementById("joiningFaces2").value = yuz;

            document.getElementById("secim4").style.backgroundColor = "yellow";
            break;
        case 4:// ikinci panel için yeşile boyama işlemi

            if (kesisen[0].object != part_list[panel2]) {
                alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
                return;
            }
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) yesil2 = sayac;
            if (sayac % 2 != 0) yesil2 = sayac - 1;

            if ((kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 1)) {
                alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");
                return;
            }
            tiklaRenk = 0x00ff00;
            start_flag = start_flag + 1;
            document.getElementById("secim4").style.backgroundColor = "chartreuse";
            document.getElementById("secim4").style.color = "black";
            yuz2_2 = yuz;

            $("#secim4").text('SEÇTİĞİNİZ PANEL: ' + panels[panel2].name + ' YÜZ: ' + yuz);
            document.getElementById("joinedFaces2").value = yuz;

            document.getElementById("secim5").style.backgroundColor = "yellow";
            break;
        case 5:// birinci panel için maviye boyama işlemi
            if (kesisen[0].object != part_list[panel1]) {
                alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
                return;
            }
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) mavi1 = sayac;
            if (sayac % 2 != 0) mavi1 = sayac - 1;
            if ((kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 1)) {
                alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");
                return;
            }
            tiklaRenk = 0x0000ff;
            start_flag = start_flag + 1;
            document.getElementById("secim5").style.backgroundColor = "chartreuse";
            document.getElementById("secim5").style.color = "black";
            yuz3 = yuz;

            $("#secim5").text('SEÇTİĞİNİZ PANEL: ' + panels[panel1].name + ' YÜZ: ' + yuz);
            document.getElementById("joiningFaces3").value = yuz;

            document.getElementById("secim6").style.backgroundColor = "yellow";
            break;
        case 6:// ikinci panel için maviye boyama işlemi
            if (kesisen[0].object != part_list[panel2]) {
                alert("lütfen daha önceden birleştirmek istediğiniz ilk panelin üzerinden bir kenar seçin.");
                return;
            }
            sayac = kesisen[0].faceIndex;
            if (sayac % 2 == 0) mavi2 = sayac;
            if (sayac % 2 != 0) mavi2 = sayac - 1;
            if ((kesisen[0].object.geometry.faces[sayac].color.r == 1 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) || (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 0 && kesisen[0].object.geometry.faces[sayac].color.b == 1)) {
                alert("daha önce seçtiğiniz bir yüzü başka bir yüz-renk grubunda seçemezsiniz.");
                return;
            }
            if (kesisen[0].object.geometry.faces[sayac].color.r == 0 && kesisen[0].object.geometry.faces[sayac].color.g == 1 && kesisen[0].object.geometry.faces[sayac].color.b == 0) return;
            tiklaRenk = 0x0000ff;
            start_flag = 0;
            document.getElementById("secim6").style.backgroundColor = "chartreuse";
            document.getElementById("secim6").style.color = "black";
            yuz2_3 = yuz;
            $("#secim6").text('SEÇTİĞİNİZ PANEL: ' + panels[panel2].name + ' YÜZ: ' + yuz);
            document.getElementById("joinedFaces3").value = yuz;
            break;
    }

    var yuz = 0;
    var sayac = kesisen[0].faceIndex;

    yuz = faceIndexArr[sayac]; // soldaki seçilen objelerin yüz ve panel bilgilarini içeren butona, yüz yazdırır bilgisi


     // if((kesisen[0].face.color.r==1) && (kesisen[0].face.color.g==0) && (
     // kesisen[0].face.color.b==0))//eğer tıkladığımız kırmızıysa beyaz yap {
     //
     // kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
     // if(sayac%2==0) sayac=sayac+1;{
     //  kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
     //  kesisen[0].object.geometry.colorsNeedUpdate=true;}
     //
     //  if ((sayac%2)!=0)sayac=sayac-1;{
     //  kesisen[0].object.geometry.faces[sayac].color.setHex(0xffffff);
     //  kesisen[0].object.geometry.colorsNeedUpdate=true; }} else {
    kesisen[0].object.geometry.faces[sayac].color.setHex(tiklaRenk);// tiklanan
                                                                    // renkte
                                                                    // yüzeyi
                                                                    // boyamak
    // switch (yuz) {
    //     case 0:
    //         yazsin = 4; // 1
    //         break;
    //     case 1:
    //         yazsin = 5;
    //         break;
    //     case 2:
    //         yazsin = 0;
    //         break;
    //     case 3:
    //         yazsin = 1;
    //         break;
    //     case 4:
    //         yazsin = 2;
    //         break;
    //     case 5:
    //         yazsin = 3;
    //         break;
    // }


    kesisen[0].object.geometry.faces[sayac].materialIndex = 6;
    if ((sayac % 2) != 0) sayac = sayac - 1;
    else if ((sayac % 2) == 0) sayac = sayac + 1;
    kesisen[0].object.geometry.faces[sayac].materialIndex = 6;
    kesisen[0].object.geometry.faces[sayac].color.setHex(tiklaRenk); // Objeye tiklanildiginda yüzeyi boyar
    // kesisen[0].object.geometry.faces[sayac].materialIndex=yazsin;
    kesisen[0].object.geometry.elementsNeedUpdate = true;
    console.log("geldi");
    kesisen[0].object.geometry.colorsNeedUpdate = true;
    for (i = 0; part_list.length; i++) {
        if (part_list[i] == kesisen[0].object) {
            part = i;
            break;
        }
    }
}

function mouseMove(event) {
    var r = document.querySelectorAll("ul.ul");

    controls.enabled = true;
    if (start_flag == 0) return;

    switch (start_flag) {
        case 1:
        case 2:
            hover_color = 0xff4444;
            break;
        case 3:
        case 4:
            hover_color = 0xb6fcd5;
            break;
        case 5:
        case 6:
            hover_color = 0x00ced1;

            break;
        case 7:
            alert("Birleştirilecek 2 panel için toplamda 6 adet yüz seçmelisiniz.");
            start_flag = 0;
            break;
    }
    canvasPosition = $("canvas").position();

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
    $("#mousecoord").text("Mouse Koordinatları:" + mouse.y.toFixed(2)  +  mouse.x.toFixed(2));
    raycaster.setFromCamera(mouse, camera);
    var uzerinde = [], panelcast=[];
    uzerinde = raycaster.intersectObjects(part_list);
    panelcast = raycaster.intersectObjects(panels);

    console.log(panelcast[0]);
     $("#hoverinfo").textContent("Yüz: " + faceIndexArr[uzerinde[0].faceIndex]);
    if (uzerinde[0] == null) {// uzerinde boşsa fonksiyondan çık çıkmadan önce
        // bütün objelerin bütün kenarlarının renklerini
        // tara. yeşil kalan varsa beyaz yap
        for (p = 0; p < part_list.length; p++) {
            for (t = 0; t < 12; t++) {
                if ((part_list[p].geometry.faces[t].color.r == 0) && (part_list[p].geometry.faces[t].color.g == 1) && (part_list[p].geometry.faces[t].color.b == 0)) continue;
                if ((part_list[p].geometry.faces[t].color.r == 1) && (part_list[p].geometry.faces[t].color.g == 0) && (part_list[p].geometry.faces[t].color.b == 0)) continue;
                if ((part_list[p].geometry.faces[t].color.r == 0) && (part_list[p].geometry.faces[t].color.g == 0) && (part_list[p].geometry.faces[t].color.b == 1)) continue;
                part_list[p].geometry.faces[t].color.setHex(0xffffff);
            }
            part_list[p].geometry.colorsNeedUpdate = true;
        }// BÜTÜN PARÇALARIN RENKLERİNİ GÜNCELLEDİM.
        return;
    }

    var oteki;
    var sayac = uzerinde[0].faceIndex;
    if (sayac % 2 == 0) oteki = sayac + 1;
    if (sayac % 2 != 0) oteki = sayac - 1;
    if ((uzerinde[0].face.color.r == 1) && (uzerinde[0].face.color.g == 1) && (uzerinde[0].face.color.b == 1)) {// uzerinde
        // olduğu
        // yüzey
        // beyazsa
        // yeşil
        // yapıcaz
        for (i = 0; i < part_list.length; i++) {
            if (part_list[i] == uzerinde[0].object) {

                part = i;
            }
            yuzu1 = sayac;
            yuzu2 = oteki;
        }
        for (j = 0; j < part_list.length; j++) {
            // while(j!=part){

            for (q = 0; q < 12; q = q + 2) {
                if (part_list[j].geometry.faces[q].color.r == 1 && part_list[j].geometry.faces[q].color.g == 0 && part_list[j].geometry.faces[q].color.b == 0) continue;
                if (part_list[j].geometry.faces[q].color.r == 0 && part_list[j].geometry.faces[q].color.g == 1 && part_list[j].geometry.faces[q].color.b == 0) continue;
                if (part_list[j].geometry.faces[q].color.r == 0 && part_list[j].geometry.faces[q].color.g == 0 && part_list[j].geometry.faces[q].color.b == 1) continue;
                part_list[j].geometry.faces[q].color.setHex(0xffffff);
                part_list[j].geometry.faces[q + 1].color.setHex(0xffffff);
                part_list[j].geometry.colorsNeedUpdate = true;
            }// }
            // }
        }

        uzerinde[0].object.geometry.faces[sayac].color.setHex(hover_color);
        uzerinde[0].object.geometry.faces[oteki].color.setHex(hover_color);
        uzerinde[0].object.geometry.colorsNeedUpdate = true;

    }
}//mouse move

function mouseLeaved(event) {
    controls.enabled = false;
}

function mouseEntered(event) {
    controls.enabled = true;
}

function init() {
    console.log("init çalıştı");
    part_list = [];
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
            // if (obj.material) obj.material.dispose()
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
                if (x[i].getAttribute("name") == selectedPartName) {
                    // bu_panel[0]=x[i].getAttribute("name");
                    parcaAdi = x[i].getAttribute("name");
                    console.log(part_list);

                    for (q = 0; q < part_list.length; q++) {
                        if (parcaAdi == panels_array[q]) {
                            for (p = 0; p < 12; p++) {
                                if (part_list[q].geometry.faces[p].color.r != 0 && part_list[q].geometry.faces[p].color.g != 0 && part_list[q].geometry.faces[p].color.b != 0) {
                                  //  part_list[q].geometry.faces[p].color.setHex(0x000000);
                                }
                                else {
                                    part_list[q].geometry.faces[p].color.setHex(0xffffff);
                                }
                                part_list[q].geometry.colorsNeedUpdate = true;
                            }
                        }
                    }

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

    var treeview = document.createElement("ul");
    treeview.setAttribute("data-role", "treeview");
    treeview.setAttribute("role", "tree");
    for (i = 0; i < panels.length; ++i) {
        var listItem = document.createElement("li");
        var atag = document.createElement("a");
        atag.innerHTML = panels[i].name;
        atag.setAttribute("href", "#");
        atag.onclick = function () {
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

        console.log(parseInt(panels[i].name));
        console.log(parseInt(panels[i].joiningPanel));

        if (!(panels[i].joinedPanel == "" || panels[i].faces1 == null)) {
            var subtree = document.createElement("ul");

            var sublistItem = document.createElement("li");

            var jtag = document.createElement("a");
            // jtag.setAttribute("padding-left","10px");
            jtag.innerHTML = "İlişki";
            jtag.setAttribute("id", i);
            jtag.setAttribute("href", "#");
            jtag.onclick = function () {
                joinTikla(this);
            }
            var deleteJoinButton = document.createElement("button");
            deleteJoinButton.innerHTML = "X";
            deleteJoinButton.onclick = function () {
                deleteJoin(this);
            }
            sublistItem.appendChild(jtag);
            sublistItem.appendChild(deleteJoinButton);
            subtree.appendChild(sublistItem);
            listItem.appendChild(subtree);
        }
        treeview.appendChild(listItem);

    }
    document.getElementById("partList").appendChild(treeview);
    loadSelectedPartPanel();
    loadJoinPartsDropBox(panels);
}

function removeOptions(selectbox) {
    console.log("removeOptions çalıştı");
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
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
        var opt1 = document.createElement("option");
        opt1.value = panels[i].name;
        opt1.innerHTML = panels[i].name;
        var opt2 = document.createElement("option");
        opt2.value = panels[i].name;
        opt2.innerHTML = panels[i].name;
        joiningPartBox.appendChild(opt1);
        joinedPartBox.appendChild(opt2);
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
            i = 0;
            loadAssembly(this);
        };
        /*
         * jtag.onclick = function () { loadAssemblyJoin(this); };
         */
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
    panels_array = [];
    part_list = [];
    panels = [];

    x = xmlDoc.documentElement.childNodes;
    console.log(x);

    for (i = 0; i < x.length; i++) {
        if (x[i].nodeName == "panel") {
            var distances = parseFloat(x[i].getAttribute("distances"));
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

            join = x[i].getElementsByTagName("join")[0];
            if (join != null) {
                var joinDistancesString = join.getAttribute("distances");
                var joinJoinedFacesString = join.getAttribute("joinedFaces");
                var joinedFaces = joinJoinedFacesString.split('*');
                joinedFaces1.push(joinedFaces[0]);
                joinedFaces2.push(joinedFaces[1]);
                joinedFaces3.push(joinedFaces[2]);
                var joinJoiningFacesString = join.getAttribute("joiningFaces");
                var joiningFaces = joinJoiningFacesString.split('*');
                joiningFaces1.push(joiningFaces[0]);
                joiningFaces2.push(joiningFaces[1]);
                joiningFaces3.push(joiningFaces[2]);
                var joinedPanel = join.getAttribute("joinedPanel");
                var distances = joinDistancesString.split('*');
                console.log(distances);
                mesafeler1.push(distances[0]);
                mesafeler2.push(distances[1]);
                mesafeler3.push(distances[2]);
                console.log("burda check");
                var pInfo = new PanelInfo(partName, joinedPanel, distances, joiningFaces, joinedFaces);
                panels.push(pInfo);
                console.log(pInfo.name);
                console.log(pInfo.joiningPanel);

            }
            else {
                console.log("burda check2");
                var pInfo = new PanelInfo(partName, "", null, null, null);

                panels.push(pInfo);
            }

            console.log("burda check");
            var geometry = new THREE.BoxGeometry(width, height, thickness, 1, 1, 1);
            // set side Colors according to stripes //
            /*
			 * for (var s = 0; s < 12; s++) {
			 * geometry.faces[s].color.setHex(0xffffff); if ((s == 0 || s == 1) &&
			 * side1) geometry.faces[s].color.setHex(0xffffff); else if ((s == 4 ||
			 * s == 5) && side2) geometry.faces[s].color.setHex(0xffffff); else
			 * if ((s == 2 || s == 3) && side3)
			 * geometry.faces[s].color.setHex(0xffffff); else if ((s == 6 || s ==
			 * 7) && side4) geometry.faces[s].color.setHex(0xffffff); }
			 */
            var haci = new THREE.MeshPhongMaterial({
                color: 0xffffff,
                flatShading: true,
                vertexColors: THREE.VertexColors
            });

            function createLabel(text, size) {
                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");
                context.font = size + "pt Arial";
                context.textAlign = "center";
                context.fillRect(0, 0, 1000, 1000);
                context.fillStyle = "white";
                context.fillText(text, canvas.width / 2, canvas.height / 2);
                var texture = new THREE.Texture(canvas);
                texture.needsUpdate = true;
                var material = new THREE.MeshPhongMaterial({
                    map: texture,
                    color: 0xffffff,
                });
                return material;
            }

            var material0 = createLabel("", 50);
            var material1 = createLabel("", 50);
            var material2 = createLabel("", 50);
            var material3 = createLabel("", 50);
            var material4 = createLabel("", 50);
            var material5 = createLabel("", 50);
            materialArray = [material0, material1, material2, material3, material4, material5, haci];

            // take transform information//
            tr = x[i].getElementsByTagName("tr")[0];
            var trString = tr.getAttribute("values");
            var values = trString.split('*');
            for (z = 0; z < values.length; ++z) {
                values[z] = parseFloat(values[z]);
            }

            console.log(tr);
            console.log(join);

            var bufferGeometry = new THREE.BufferGeometry().fromGeometry(geometry);
            geometry.applyMatrix(new THREE.Matrix4().set(values[0], values[1], values[2], values[3],
                values[4], values[5], values[6], values[7],
                values[8], values[9], values[10], values[11],
                values[12], values[13], values[14], values[15]
            ));

            var panel = new THREE.Mesh(geometry, materialArray);
            panel.updateMatrix();
            scene.add(panel);
            var a = 0;
            var b = 0;
            while (1) {
                b = a + 14;
                part_list[a] = scene.children[b];

                if (scene.children[b + 1] == null) break;
                a = a + 1;
            }
            /*
             * for(j=0;j<part_list.length;j++){ for(i=0;i<12;i++){
             *
             * part_list[j].geometry.faces[i].materialIndex=6;}
             * part_list[j].geometry.elementsNeedUpdate=true;}
             */
        }
    }
    loadPartList(panels);
}