function book(name,author,pages,ron){ //book constructor function
this.name=name;
this.author=author;
this.pages=pages;
this.read=ron;
}

let myLibrary=[];
let ipid=0;

const x=document.getElementById("add"); //add button to bring out the form
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

const buttonbehaviour=document.getElementById("cancelbutton");//cancel button
buttonbehaviour.addEventListener("click",function(){
	formopen(x);
	formclose(document.getElementById("herelaysform"));
	bookDetails.style.cssText="visibility:hidden;";
});


function formopen(somevar){ //open form
somevar.style.cssText="display:block;";
}
function formclose(somevar){ //closeform
	somevar.style.cssText="display:none;";
	document.getElementById("bookname").value="";
	document.getElementById("author").value="";
	document.getElementById("number").value="";
}


let a=[];
a[0]= new book("Harry Potter","J K rowling","455","yes");
addbook(a[0]);
const bookdata=document.getElementById("addbutton"); // add book button functionality
bookdata.addEventListener("click",function(){
	const something=new book(document.getElementById("bookname").value,document.getElementById("author").value,
		document.getElementById("number").value,"yes");
	a.push(something);
	formclose(forma);
	formopen(x);
	if(a.length!=0){
		addbook(a[a.length-1]);
	}
	else{
		addbook(a[0]);
	}
	bookDetails.style.cssText="visibility:hidden;"; //workaround method for overlapping

});




function addbook(c){ //this function add a card on page
a[ipid].id=ipid;
let b=document.createElement("div"); //div element and its id here plus array id
b.classList.add("lol");
document.getElementById("cards").appendChild(b);
b.id="b"+ipid;


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

let clabel=document.createElement("label"); //label for input
b.appendChild(clabel);
clabel.innerHTML="Read Status :  ";
clabel.style.cssText="margin-right:10px;";

pname.classList.add("paddingclass");    //some padding
pauthor.classList.add("paddingclass");
ppages.classList.add("paddingclass");

let cstatus=document.createElement("input"); //input checkbox
cstatus.classList.add("ip");
cstatus.type="checkbox";
cstatus.id="ipid"+ipid;
close.id="close"+ipid;
ipid=ipid+1;
b.appendChild(cstatus);

cstatus.addEventListener("click",function(){  //-----------checkstatus
	if(this.checked==true){
		a[parseInt(this.id.slice(4,))].read="yes";
		//----slicing ids to get work around just numbers with different elemets divs
	}
	if (this.checked==false) {
		a[parseInt(this.id.slice(4,))].read="no";
		
	}
});

close.addEventListener("click",function(){  //--------close button on cards
	let sli=parseInt(this.id.slice(5,));
	
	delete a[sli]; //----------delets but leave an empty or undefined element in array
	//a=a.filter(n =>n);    //---------------------------this clever method got to see how it works to remove empty array element
	//this thing caused an error due to it removing empties and my function is made for filling next numbers in array lol
	//https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
	let remele=document.getElementById("b"+sli); //-------get you card div by id 
	remele.remove();
	console.log(a);
});


}

