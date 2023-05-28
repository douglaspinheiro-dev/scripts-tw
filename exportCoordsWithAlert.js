let tds = $('#villages_list > tbody > tr > td:nth-child(2)');let coords = [];for (let index = 0; index < tds.length; index++) {
    const element = tds[index];
    coords.push(element.textContent)
};coords = coords.join(' ');alert(coords);
