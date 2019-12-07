var mapTo = [];

createGrid(10, 20);

function createGrid(x, y) {
  for (var rows = 0; rows < x; rows++) {
    var array2 = []
    for (var columns = 0; columns < y; columns++) {
      array2.push("sky")
    };
    mapTo.push(array2);
  };
};

mapTo[7][3] = "trunk";
mapTo[6][3] = "trunk";
mapTo[5][3] = "tree";
mapTo[5][4] = "tree";
mapTo[4][2] = "tree";
mapTo[4][4] = "tree";
mapTo[4][3] = "tree";
mapTo[5][2] = "tree";
mapTo[3][3] = "tree";
mapTo[5][1] = "tree";
mapTo[5][5] = "tree";
mapTo[1][14] = "cloud";
mapTo[2][13] = "cloud";
mapTo[1][15] = "cloud";
mapTo[2][15] = "cloud";
mapTo[3][15] = "cloud";
mapTo[2][14] = "cloud";
mapTo[2][16] = "cloud";
mapTo[7][15] = "rock";
mapTo[6][17] = "rock";
mapTo[7][17] = "rock";
mapTo[6][16] = "rock";
mapTo[7][16] = "rock";

  for (var columns = 0; columns < 20; columns++) {
      mapTo[8][columns] = "topGround";
  }

  for (var columns = 0; columns < 20; columns++) {
    mapTo[9][columns] = "lowerGround";
}
for (var rows = 0; rows < 10; rows++) {
  for (var columns = 0; columns < 20; columns++) {
    if(mapTo[rows][columns] == "tree") {
      $("#inside").append("<div class='grid tree'></div>")
    }
    else if (mapTo[rows][columns] == "sky"){
      $("#inside").append("<div class='grid sky'></div>")
    }
    else if (mapTo[rows][columns] == "trunk"){
      $("#inside").append("<div class='grid trunk'></div>")
    }
    else if (mapTo[rows][columns] == "topGround"){
      $("#inside").append("<div class='grid topGround'></div>")
      
    }
    else if (mapTo[rows][columns] == "lowerGround"){
      $("#inside").append("<div class='grid lowerGround'></div>")
    }
    else if (mapTo[rows][columns] == "cloud"){
      $("#inside").append("<div class='grid cloud'></div>")
    }
    else if (mapTo[rows][columns] == "rock"){
      $("#inside").append("<div class='grid rock'></div>")
    }
  }
}

$(".grid").hover(function borderB() {
  $(this).toggleClass("borderHigh");
}, function () {
  $(this).toggleClass("borderHigh")
}
);

var chosenTool = '';

$("button.axe").click(function () {
chosenTool = "axe";
});
$(".grid").click(function () {
let $item = $(this);
if (chosenTool === "pick-axe" && $item.hasClass("rock")) {
$(this).addClass("sky");
$(this).removeClass("rock");
}
else if (chosenTool === "build-rock" && $item.hasClass("sky")) {
$(this).addClass("rock");
$(this).removeClass("sky");
}
else if (chosenTool === "axe" && $item.hasClass("tree")) {
$(this).addClass("sky");
$(this).removeClass("tree");
}
else if (chosenTool === "axe" && $item.hasClass("trunk")) {
$(this).addClass("sky");
$(this).removeClass("trunk");
}
else if (chosenTool === "build-tree" && $item.hasClass("sky")) {
$(this).addClass("tree");
$(this).removeClass("sky");
}
else if (chosenTool === "build-trunk" && $item.hasClass("sky")) {
$(this).addClass("trunk");
$(this).removeClass("sky");
}
else if (chosenTool === "shovel" && $item.hasClass("topGround")) {
$(this).addClass("sky");
$(this).removeClass("topGround");
}
else if (chosenTool === "shovel" && $item.hasClass("lowerGround")) {
$(this).addClass("sky");
$(this).removeClass("lowerGround");
}
else if (chosenTool === "build-topGround" && $item.hasClass("sky")) {
$(this).addClass("topGround");
$(this).removeClass("sky");
}
else if (chosenTool === "build-lowerGround" && $item.hasClass("sky")) {
$(this).addClass("lowerGround");
$(this).removeClass("sky");
}
});
$("button.pick-axe").click(function () {
chosenTool = "pick-axe";
});
$("button.build-rock").click(function () {
chosenTool = "build-rock";
});
$("button.shovel").click(function () {
chosenTool = "shovel";
});
$("button.axe").click(function () {
chosenTool = "axe";
});
$("button.build-topGround").click(function () {
chosenTool = "build-topGround";
});
$("button.build-lowerGround").click(function () {
chosenTool = "build-lowerGround";
});
$("button.build-trunk").click(function () {
chosenTool = "build-trunk";
});
$("button.build-tree").click(function () {
chosenTool = "build-tree";
});

