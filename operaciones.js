var conjunt_one = document.getElementById('conjunt-one');
var conjunt_two = document.getElementById('conjunt-two');
var btnUnion = document.getElementById('btnUnion');
var btnInterception = document.getElementById('btnInterception');
var btnExclude = document.getElementById('btnExclude');

conjunt_one.addEventListener('keyup', (e)=>{
    e.preventDefault();
    document.getElementById('c1-c1').innerHTML = '{' + e.target.value+ '}';
});

conjunt_two.addEventListener('keyup', (e)=>{
    e.preventDefault();
    document.getElementById('c2-c2').innerHTML = '{' + e.target.value+ '}';
});

btnUnion.addEventListener('click', () => {
    var set1 = document.getElementById("conjunt-one").value.trim().split(",");
    var set2 = document.getElementById("conjunt-two").value.trim().split(",");
    mostrarUnion(set1, set2);
});
btnInterception.addEventListener('click', () => {
    var set1 = document.getElementById("conjunt-one").value.trim().split(",");
    var set2 = document.getElementById("conjunt-two").value.trim().split(",");
    mostrarInterseccion(set1, set2);
});
btnExclude.addEventListener('click', () => {
    var set1 = document.getElementById("conjunt-one").value.trim().split(",");
    var set2 = document.getElementById("conjunt-two").value.trim().split(",");
    mostrarExclusion(set1, set2);
});

function mostrarUnion(conjunto1, conjunto2) {
    var union = [...new Set([...conjunto1, ...conjunto2])];
    console.log('UNION => ', union,);
    var sets = [
        { sets: ['Union'], size: 20, label: 'Union {' + union + '}' },
    ];
    var chart = venn.VennDiagram();
    d3.select("#venn").datum(sets).call(chart);
}

function mostrarInterseccion(conjunto1, conjunto2) {   
    var interseccion = conjunto1.filter(x => conjunto2.includes(x));
    console.log('INTERSECCIÓN => ', interseccion);
    var sets = [
      { sets: ['Conjunto 1'], size: conjunto1.length, label: 'Conjunto 1 \n {' + conjunto1 + '}' },
      { sets: ['Conjunto 2'], size: conjunto2.length, label: 'Conjunto 2 \n {' + conjunto2 + '}' },
      { sets: ['Conjunto 1', 'Conjunto 2'], size: interseccion.length, label: 'Intercepción \n {' + interseccion + '}' }
    ];
    var chart = venn.VennDiagram();
    d3.select("#venn").datum(sets).call(chart);
}

function mostrarExclusion(conjunto1, conjunto2) {   
    var exclusion = conjunto1.filter(x => !conjunto2.includes(x));
    console.log('EXCLUSIÓN => ', exclusion);
    var sets = [
      { sets: ['Conjunto 1'], size: conjunto1.length, label: 'Conjunto 1 \n {' + conjunto1 + '}' },
      { sets: ['Conjunto 2'], size: conjunto2.length, label: 'Conjunto 2 \n {' + conjunto2 + '}' },
      { sets: ['Exclusión'], size: exclusion.length, label: 'Exclusión \n {' + exclusion + '}' }
    ];
    var chart = venn.VennDiagram();
    d3.select("#venn").datum(sets).call(chart);
}


