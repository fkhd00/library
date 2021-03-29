function book(name,author,pages,ron){
this.name=name;
this.author=author;
this.pages=pages;
this.read=ron;
}

let myLibrary=[];
let ipid=0;

const x=document.getElementById("add");
const form=document.getElementById("bookDetails");
const forma=document.getElementById("herelaysform");
x.addEventListener("click",function(){
x.classList.add("playing");
setTimeout(function(){
	x.classList.remove("playing");
},80);
bookDetails.style.cssText="visibility:visible;";
formopen(forma);
x.style.cssText="visibility:hidden;";
});

const buttonbehaviour=document.getElementById("cancelbutton");
buttonbehaviour.addEventListener("click",function(){
	formopen(x);
	formclose(document.getElementById("herelaysform"));
	bookDetails.style.cssText="visibility:hidden;";
});


function formopen(somevar){
somevar.style.cssText="display:block;";
}
function formclose(somevar){
	somevar.style.cssText="display:none;";
	document.getElementById("bookname").value="";
	document.getElementById("author").value="";
	document.getElementById("number").value="";
}


let a=[];
a[0]= new book("Harry Potter","J K rowling","455","yes");
addbook(a[0]);
const bookdata=document.getElementById("addbutton");
bookdata.addEventListener("click",function(){
	const something=new book(document.getElementById("bookname").value,document.getElementById("author").value,
		document.getElementById("number").value,"yes");
	a.push(something);

	console.log(a);
	formclose(forma);
	formopen(x);
	addbook(a[a.length-1]);
	bookDetails.style.cssText="visibility:hidden;";

});




function addbook(c){
a[ipid].id=ipid;
let b=document.createElement("div");
b.classList.add("lol");
document.getElementById("cards").appendChild(b);


let close=document.createElement("p");
close.classList.add("closebutton");
close.innerHTML="X";
b.appendChild(close);

let pname=document.createElement("p");
b.appendChild(pname);
pname.innerHTML="Book : "+c.name+"";
pname.style.cssText="font-size:20px;overflow:hidden;";

let pauthor=document.createElement("p");
b.appendChild(pauthor);
pauthor.innerHTML="Author : "+c.author;

let ppages=document.createElement("p");
b.appendChild(ppages);
ppages.innerHTML="Pages : "+c.pages;

let clabel=document.createElement("label");
b.appendChild(clabel);
clabel.innerHTML="Read Status :  ";
clabel.style.cssText="margin-right:10px;";

pname.classList.add("paddingclass");
pauthor.classList.add("paddingclass");
ppages.classList.add("paddingclass");

let cstatus=document.createElement("input");
cstatus.classList.add("ip");
cstatus.type="checkbox";
cstatus.id="ipid"+ipid;
close.id="close"+ipid;
ipid=ipid+1;
b.appendChild(cstatus);

cstatus.addEventListener("click",function(){
	if(this.checked==true){
		a[parseInt(this.id.slice(4,))].read="yes";
		console.log(a[parseInt(this.id.slice(4,))].read);
	}
	if (this.checked==false) {
		a[parseInt(this.id.slice(4,))].read="no";
		console.log(a[parseInt(this.id.slice(4,))].read);
	}
});

close.addEventListener("click",function(){
	let slice=parseInt(this.id.slice(5,));

	document.getElementById(this.id)

});


}

