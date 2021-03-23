function getAttributes(){
    let para= document.getElementById('wcc');
    let href=para.getAttribute('href');
    let hreflang=para.getAttribute('hreflang');
    let rel=para.getAttribute('rel');
    let target=para.getAttribute('target');
    let type =para.getAttribute('type');


    const pElement = document.createElement('p');
    pElement.innerText=`href = ${href}   \n   hreflang = ${hreflang}\n     rel = ${rel}\n      target = ${target}\n     type = ${type}`;
    document.body.appendChild(pElement)
}