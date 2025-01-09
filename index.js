/*
Difficulty Breakdown:
    1 -> 14 Common + 8 Uncommon + 2 Rare
    2 -> 12 Common + 9 Uncommon + 3 Rare
    3 -> 10 Common + 10 Uncommon + 4 Rare
    4 -> 8 Common + 10 Uncommon + 6 Rare 
*/
var freeClick = false;
const difficulty = 3;
$(()=>{
    $(".tile").each((index,item)=>{
        $(item).on("click", () =>{
            //let tile = $("[class='" + item.class + "']");
            if(!$(item).hasClass('bingo')){
                if(item.clicked == "false"){
                    item.clicked = "true";
                    item.style.backgroundColor = "orange";
                    item.style.borderTopWidth = "2px";
                    item.style.borderLeftWidth = "2px";
                    item.stle.textIndent = "-2px";
                }
                else
                {
                    item.clicked = "false";
                    item.style.backgroundColor = "white";
                    item.style.borderTopWidth = "1px";
                    item.style.borderLeftWidth = "1px";
                }
            }
            
        })
    })
    $("#free").each((index,item)=>{
        $(item).on("click", () =>{
            if(!freeClick){
                freeClick = true;
                item.style.backgroundColor = "orange";
                item.style.borderTopWidth = "2px";
                item.style.borderLeftWidth = "2px";
                item.stle.textIndent = "-2px";
            }
            else
            {
                freeClick = false;
                item.style.backgroundColor = "white";
                item.style.borderTopWidth = "2px";
                item.style.borderLeftWidth = "2px";
                item.stle.textIndent = "-2px";
            }
        })
    })
})
window.addEventListener("load", (event) => {
    MixItUp();
    adjustFontSize();
  });

function MixItUp() {
    /*
Difficulty Breakdown:
    1 -> 14 Common + 8 Uncommon + 2 Rare
    2 -> 12 Common + 10 Uncommon + 2 Rare
    3 -> 10 Common + 10 Uncommon + 4 Rare
    4 -> 8 Common + 10 Uncommon + 6 Rare 
*/
    //24 tiles required to be shuffled and placed into table upon page refresh
    /*tileTextArray = [
        "Home Goal", "Away Goal", "Face-Off Violation", "One-Timer", "Hat-Trick",
        "High Stick", "Icing", "Power Play Goal", "Penalty Kill", "Tripping",
        "Overtime", "Player Blocks Shot", "Blood!", "Offside", "Puck In Stands",
        "Glove Save", "Fight Ensues", "Ref Falls Down", "Fans Boo", "Lost Fan",
        "Double-Double", "Player Exits Game", "Broken Stick", "Top Shelf", "Mascot on Camera",
        ""
    ];
    */
    commonTiles = [
        "Icing", "Home Goal" , "Away Goal" , "Offside" , "Tripping" , "Hooking", "High Stick",
        "Puck In Stands" , "Broken Stick" , "3 on 2" , "Player Blocks Shot", "Glove Save", "Mascot on Camera", 
        "Face Off Violation", "Penalty Kill (Home)", "Penalty Kill (Away)",
        "Power Play Goal (Home)" , "Power Play Goal (Away)"
    ];

    uncommonTiles = [
        "Hit the Post", "Fight Ensues" , "Double-Double" , "Blood!" , 
        "Player Earns 3pts" , "Goalie Interference" , "Net off post" , "Player Exits Game", 
        "Top Shelf", "Captain Scores", "Rookie"
    ];
    rareTiles = [
        "Ref Falls Down" , "Lost Fan" , "Hat-Trick" , "Too Many Men" , "Empty Net Goal" , "Own Goal"
    ];
    

    var tiles = [];
    var comCount = 12;
    var uncomCount = 10;
    var rareCount = 2;
    switch(difficulty){
        case 1:
            comCount = 14;
            uncomCount = 8;
            rareCount = 2;
            break;
        case 2:
            comCount = 12;
            uncomCount = 10;
            rareCount = 2;
            break;
        case 3:
            comCount = 10;
            uncomCount = 10;
            rareCount = 4;
            break;
        case 4:
            comCount = 8;
            uncomCount = 10;
            rareCount = 6;
        default:
            break;
    }

    //Shuffle lists
    commonTiles = shuffle(commonTiles);
    uncommonTiles = shuffle(uncommonTiles);
    rareTiles = shuffle(rareTiles);

    //populate "tiles" array
    for(c = 0; c < comCount;c++){
        tiles.push(commonTiles.pop());
    }
    for(u = 0; u < uncomCount; u++){
        tiles.push(uncommonTiles.pop());
    }
    for(r = 0; r < rareCount; r++){
        tiles.push(rareTiles.pop());
    }

    //shuffle "tiles" array
    tiles = shuffle(tiles);

    const tilesArray = document.querySelectorAll("[class=tile]");

    tilesArray.forEach((tile,i)=>{
        tile.innerHTML = tiles.pop();
        tile.clicked = "false";
        tile.style.backgroundColor = "white";
    });
    adjustFontSize();
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function adjustFontSize() {
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    if (tile.innerHTML.includes("Interference", "Power Play")) {
        tile.style.fontSize = "0.65rem";
    } 
    else {
        tile.style.fontSize = "0.8rem";
    }
});
}