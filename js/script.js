var currentResource = null;

function print(toPrint){
    console.log(toPrint);
}

function setCurrentResource(res) {
    currentResource = res;
    $('#resourceClickable')
        .attr('src', 'resources/images/resources/' + res.name + '.png');
}

$(document).ready(function() {
    setCurrentResource(resources.coal);
    $('#resourceClickable').on('click', function() {
        currentResource.amount++;
    });

    window.setInterval(function() {
        checkForNewCraftables();
        render();
    }, 10);
});

function checkForNewCraftables() {
    var tempCraftables = [];
    for (var i = 0; i < craftables.length; i++) {
        var reqMet = true;
        var c = craftables[i];
        for(var key in resources) {
            var req = c.requirements[resources[key].name];
            if(req) {
                if(req > resources[key].amount) {
                    reqMet = false
                    break;
                }
            }
        }
        if(reqMet) {
            tempCraftables.push(c);
        }
    }
    tempCraftables.forEach(e => {
        var splice = craftables.indexOf(e);
        if(splice > -1) {
            craftables.splice(splice, 1);
            unlockedCraftables.push(e);
        }
    });
}

function buyItem(toBuy) {
    console.log(toBuy);
}

function render() {
    $('#resourceCoal').text(resources.coal.amount);
    $('#resourceIron').text(resources.iron.amount);

    renderCraftables();
}

function renderCraftables() {
    for (var i = 0; i < unlockedCraftables.length; i++) {
        var e = unlockedCraftables[i];
        if(!e.rendered) {
            var div = document.createElement('div');
            var name = document.createElement('p');
            name.innerHTML = e.name;
            var requirements = document.createElement('div');
            for(var key in e.requirements) {
                var req = document.createElement('p');
                req.innerHTML = key + ': ' + e.requirements[key]
                requirements.appendChild(req);
            }
            var bttnBuy = document.createElement('button');
            bttnBuy.innerHTML = 'buy';
            bttnBuy.onclick = function() { buyItem(e) };

            div.appendChild(name);
            div.appendChild(requirements);
            div.appendChild(bttnBuy);
            document.getElementById('craftables').appendChild(div);

            e.rendered = true;
        }
    }
}