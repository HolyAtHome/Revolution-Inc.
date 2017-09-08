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
        console.log(unlockedCraftables.length);
    }, 10);
});

function checkForNewCraftables() {
    for (var i = 0; i < craftables.length; i++) {
        var c = craftables[i];
        for(var key in resources) {
            if(c.requirements[resources[key].name]) {
                console.log(c.requirements[resources[key].name]);
            }
        }
        unlockedCraftables.push(c);
    }
}

function render() {
    $('#resourceCoal').text(resources.coal.amount);
    $('#resourceIron').text(resources.iron.amount);
}