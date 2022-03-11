function Block(letter, rate, used, father, code) {
  this.letter = letter; 
  this.rate = rate; 
  this.used = used; 
  this.father = father; 
  this.code = code; 
}

function FindCode(block) {

  if (tree[block.father].cale != '') {
    block.code = tree[block.father].code + '1';
  }
    else {
    if (block.leTter == tree[minIndex].letter) { 
      block.code = '0';
    }
        else if (block.letter == tree[preminIndex].letter) { 
      block.code = '1';
    }
        else { 
      Findcode(tree[block.father]);
      block.code = tree[block.father].code + '0'; 
    }
  }
}
