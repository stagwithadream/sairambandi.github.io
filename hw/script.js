window.onload = function() {
    createPage();
};

function createSections(input){
    //section2
    data = input['section2']
    var mainContainer = document.getElementsByClassName("gallery")[0];
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class","tile1");
        var img = document.createElement("img");
        img.src='./'+data[i]['image'];
        img.setAttribute("class","mountains");
        var innerheading = document.createElement("p");
        innerheading.setAttribute("class","tile1heading");
        innerheading.innerHTML = data[i]['heading']
        var innertext = document.createElement("p");
        innertext.setAttribute("class","tile1content");
        innertext.innerHTML = data[i]['text'];
        div.appendChild(img);
        div.appendChild(innerheading);
        div.appendChild(innertext);
        console.log("div",div,"mainContainer",mainContainer);
        mainContainer.appendChild(div);
    } 
   // section3
    data = input['section3'];
    var container = document.getElementsByClassName("row")[0]; 
    var div1 = document.createElement("div");
    div1.setAttribute("class", "column1");

    var img = document.createElement("img");
    img.src = './lasky.png';
    img.setAttribute("class","lasky");
    div1.append(img);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "column2");
    var innertext = document.createElement("p");
    innertext.setAttribute("class","LAcontent");
    innertext.innerHTML = data['text'];
    div2.appendChild(innertext);

    container.appendChild(div1);
    container.appendChild(div2);

    //section4
    data  =input['section4']

    for(i=0; i< data.length;i++) {
        let cssClass = i%2 == 0 ? "head sec4Heading" : "head sec4Heading rightfloat";
        var mainContainer = document.getElementsByClassName("section4")[0];
        var div1 = document.createElement("div");
        div1.setAttribute("class","grid-container");
        
        var imagediv = document.createElement("div");
        imagediv.setAttribute("class","grid-item4");
        var img = document.createElement("img");
        img.src='./'+data[i]['image'];
        imagediv.appendChild(img);
    
        var textdiv = document.createElement("div");
        textdiv.setAttribute("class","grid-item4");
        var innerheading = document.createElement("div");
        innerheading.setAttribute("class",cssClass);
        innerheading.innerHTML = data[i]['heading']
        var innertext = document.createElement("div");
        innertext.setAttribute("class","head");
        innertext.innerHTML = data[i]['text'];
        textdiv.appendChild(innerheading);
        textdiv.appendChild(innertext);
        if (i%2 == 0){
            div1.appendChild(imagediv);
            div1.appendChild(textdiv);
        } else {
            div1.appendChild(textdiv);
            div1.appendChild(imagediv);
        }
       
        mainContainer.appendChild(div1);
    }
};


function createPage(){
    fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        createSections(data);
    })
    .catch(function (err) {
        console.log(err);
    });


};


