console.log('Your JS is linked up. Be the person you needed when you were little.')
let board;
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''];
};
init();
function render() {
        board.forEach(function(mark, index){
        console.log(mark, index);
    }
    );
};