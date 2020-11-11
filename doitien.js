function Myfunction(){
    let A= +document.getElementById('Amount').value;
    let B= +document.getElementById('select1').value;
    let C= +document.getElementById('select2').value;
    document.getElementById('hh').innerHTML= A * B / C;
}