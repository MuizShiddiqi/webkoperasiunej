function terimainput(){
	alert("Selamat Anda Berhasil Menyimpan Data");


	var a=document.forms['daftar']['nama'].value;
	var b=document.forms['daftar']['jenkel'].value;
	var c=document.forms['daftar']['tgllahir'].value;
	var d=document.forms['daftar']['agama'].value;
	var e=document.forms['daftar']['tlp'].value;
	var f=document.forms['daftar']['email'].value;
	var g=document.forms['daftar']['alamat'].value;
    var h=document.forms['daftar']['username'].value;
    var i=document.forms['daftar']['password'].value;

	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);

	cell1.innerHTML = a;
	cell2.innerHTML = b;
	cell3.innerHTML = c;
	cell4.innerHTML = d;
	cell5.innerHTML = e;
	cell6.innerHTML = f;
	cell7.innerHTML = g;
    cell8.innerHTML = h;
    cell9.innerHTML = i;
}