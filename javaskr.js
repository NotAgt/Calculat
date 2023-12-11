
function att(val) { 
         document.getElementById("res").value += val;  //attēlo ievadītos simbolus displejā id="res"
        } 
function apr(){
	var tDotie = document.getElementById("res").value;  //"="zīme -pārvēš displejā attēloto tekstu skaitļos un math simbolos, izrē''kina un izvada rezultatu
	var mDotie = eval(tDotie);	
    document.getElementById("res").value = mDotie;
}
function del(){
	document.getElementById("res").value = " ";  // poga C- aizvieto visu displejā ar tukšumu
}