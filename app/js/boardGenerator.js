
function BoardGenerator() {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    this.generate = function() {
        var letters = [];

        for (var i = 0; i < 16; i++) {
            letters[i] = this.letters[Math.floor((Math.random() * 26) + 1)];
        }

        return letters;
    }
}