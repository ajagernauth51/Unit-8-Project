let count = 0;
let hard = "hard";
let sour = "sour";
let chewy = "chewy";
let sweet = "sweet";

$(".sub").click(function() {
    let age = $(".age").val();
    let candy = $(".candy").val();
    let taste = $(".taste").val();
    if (age < 40 && candy === hard && taste === sweet) {
        $(".resp").empty().append('<img src="https://bulkfoods.com/818-large_default/jolly-ranchers.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be a Jolly Rancher!" +  "</p>").show(); 
    } else if (age > 39 && candy === hard && taste === sweet) {
        $(".resp").empty().append('<img src="https://candylandstore.com/wp-content/uploads/2016/07/DSC_0688.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be Butterscotch!" +  "</p>").show();
    } else if (age < 40 && candy === hard && taste === sour) {
        $(".resp").empty().append('<img src="https://www.candywarehouse.com/item-images/129629-01_warheads-smashups-extreme-sour-hard-candy-packs-12-piece-box.jpg?resizeid=102&resizeh=500&resizew=500" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be a Warhead!" +  "</p>").show();
    } else if (age > 39 && candy === hard && taste === sour) {
        $(".resp").empty().append('<img src="http://boozeoncouch.com/wp-content/uploads/2019/10/Ice-Breakers-Sour-Strawbeery.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be Ice Breakers Sours!" +  "</p>").show();
    } else if (age < 40 && candy === chewy && taste === sweet) {
        $(".resp").empty().append('<img src="https://www.candywarehouse.com/item-images/127415-01_starburst-fruit-chews-candy-3lb-bag.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be Starburst!" +  "</p>").show();
    } else if (age > 39 && candy === chewy && taste === sweet) {
        $(".resp").empty().append('<img src="https://candylandstore.com/wp-content/uploads/2016/06/DSC_0847.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be a Jelly Bean!" +  "</p>").show();
    } else if (age < 40 && candy === chewy && taste === sour) {
        $(".resp").empty().append('<img src="https://www.candywarehouse.com/item-images/126490-01_extreme-sour-patch-kids-candy-3lb-box.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be a Sour Patch Kid!" +  "</p>").show();
    } else if (age > 39 && candy === chewy && taste === sour) {
        $(".resp").empty().append('<img src="https://images-na.ssl-images-amazon.com/images/I/61dCBNqS5yL._SL1024_.jpg" height="300px">' + "<p>" + "Since you are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ", you must be Sour Skittles!" +  "</p>").show();
    } else if (typeof age === 'string' || candy !== chewy || candy !== hard || taste !== sweet || taste !== sour) {
        alert("Please enter the correct values for each question and make sure everything is lowercase");
    }
    count = count + 1;
    $(".count").text(count);
    $(".reset").css("display", "block");
});

$(".reset").click(function() {
    count = 0;
    $(".count").text(count);
    $(".resp").empty().hide();
    $(".reset").hide();
});