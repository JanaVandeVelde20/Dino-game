// create tree
function createTree() {
    const tree = document.createElement("div");
    tree.classList.add("tree");
    gameArea.appendChild(tree);

    setTimeout(() => {
        tree.remove();
    }, 8000);
}
setInterval(createTree, 2000);

//create forest
function createForest() {
    const forest = document.createElement("div");
    forest.classList.add("forest");
    gameArea.appendChild(forest);
    setTimeout(() => {
        forest.remove();
    }, 8000); 
}
setInterval(createSnowman, 3000); 

//create snowman
function createSnowman() {
    const snowman = document.createElement("div");
    snowman.classList.add("snowman");
    gameArea.appendChild(snowman);

    setTimeout(() => {
        snowman.remove();
    }, 8000); 
}
setInterval(createForest, 4000); 