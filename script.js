
function showResult(oCont, oWords) {
    var text = ''
        , total = 0
        , val = 0
    ;
    $.each(oWords, function (index, value) {
        val = Object.values(value)[0];
        text += Object.keys(value)[0] + ' - ' + val + '<br>\n';
        total += val;
    });

    text += '<br>\nTotal: ' + total;
    console.log('showResult', text);
    oCont.html(text);
}

function sortResult(oWords) {
    var obj = oWords.slice(0)
        , aVal, bVal
    ;
    obj.sort(function(a,b) {
        aVal = Object.values(a)[0];
        bVal = Object.values(b)[0];

        return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    });

    return obj;
}

function calcWordPoints(word, oPoints) {
    var total = 0
    ;
    for (var i = 0; i < word.length; i++) {
        total += oPoints[word[i]];
    }
    console.log('calcWordPoints', word, total);

    return total;
}

function findWords(dict, letters) {
    var words = []
        , used = {}
        , word, found, index
    ;
    // debugger;

    for (var i = 0; i < dict.length; i++) {
        word = dict[i];
        if (!word || word.length<2 || word.length > letters.length) {
            continue;
        }

        found = true;
        used = '' + letters;
        for (var j = 0; j < word.length; j++) {
            debugger;
            index = used.search(word[j]);
            if (-1 == index) {
                found = false;
                break;
            } else {
                used = used.split('');
                delete used[index];
                used = used.join('');
            }
        }
        // debugger;
        if (found) {
            words.push(word);
        }
    }

    return words;
}