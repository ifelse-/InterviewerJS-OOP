function CustomUI(element){
 this.element = element;
}

CustomUI.prototype.radiobuttonUI = function(){
 this.element = document.getElementById(this.element);
 console.log(this.element);
}

var radiobtn1 = new CustomUI();
radiobtn1.radiobuttonUI("radiobtn");