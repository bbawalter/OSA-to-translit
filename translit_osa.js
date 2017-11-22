/**
 * List of unicode characters that should be replaced
 *  1 '\u10A6F' 𐩯 - ś
 *  2 '\u10A70' 𐩰 - f
 *  3 '\u10A71' 𐩱 - ʼ
 *  4 '\u10A72' 𐩲 - ʽ
 *  5 '\u10A73' 𐩳 - ḍ
 *  6 '\u10A74' 𐩴 - g
 *  7 '\u10A75' 𐩵 - d
 *  8 '\u10A76' 𐩶 - ġ
 *  9 '\u10A77' 𐩷 - ṭ
 * 10 '\u10A78' 𐩸 - z
 * 11 '\u10A79' 𐩹 - ḏ
 * 12 '\u10A7A' 𐩺 - y
 * 13 '\u10A7B' 𐩻 - ṯ
 * 14 '\u10A7C' 𐩼 - ẓ
 * 15 '\u10A7D' 𐩽 - 1
 * 16 '\u10A7E' 𐩾 - 50
 * 17 '\u10A7F' 𐩿 - « Zahlzeichen » ToDo: which one?
 * 18 '\u10A60' 𐩠 - h
 * 19 '\u10A61' 𐩡 - l
 * 20 '\u10A62' 𐩢 - ḥ
 * 21 '\u10A63' 𐩣 - m
 * 22 '\u10A64' 𐩤 - q
 * 23 '\u10A65' 𐩥 - w
 * 24 '\u10A66' 𐩦 - š
 * 25 '\u10A67' 𐩧 - r
 * 26 '\u10A68' 𐩨 - b
 * 27 '\u10A69' 𐩩 - t
 * 28 '\u10A6A' 𐩪 - s
 * 29 '\u10A6B' 𐩫 - k
 * 30 '\u10A6C' 𐩬 - n
 * 31 '\u10A6D' 𐩭 - ḫ
 * 32 '\u10A6E' 𐩮 - ṣ
 **/


function replace_symbols_old_to_new(str) {

    return str

    // 1
        .replace(/\uD802\uDE6F/g, "\u015B")

        // 2
        .replace(/\uD802\uDE70/g, "\u0066")

        // 3
        .replace(/\uD802\uDE71/g, "\u02BC")

        // 4
        .replace(/\uD802\uDE72/g, "\u02BD")

        // 5
        .replace(/\uD802\uDE73/g, "\u1E0D")

        // 6
        .replace(/\uD802\uDE74/g, "\u0067")

        // 7
        .replace(/\uD802\uDE75/g, "\u0064")

        // 8
        .replace(/\uD802\uDE76/g, "\u0121")

        // 9
        .replace(/\uD802\uDE77/g, "\u1E6D")

        // 10
        .replace(/\uD802\uDE78/g, "\u007A")

        // 11
        .replace(/\uD802\uDE79/g, "\u1E0F")

        // 12
        .replace(/\uD802\uDE7A/g, "\u0079")

        // 13
        .replace(/\uD802\uDE7B/g, "\u1E6F")

        // 14
        .replace(/\uD802\uDE7C/g, "\u1E93")

        // 15
        .replace(/\uD802\uDE7D/g, "\u0031")

        // 16
        .replace(/\uD802\uDE7E/g, "\u0035\u0030")

        // 17
        .replace(/\uD802\uDE7F/g, "\u00BB") //ToDo: Zahlzeichen

        // 18
        .replace(/\uD802\uDE60/g, "\u0068")

        // 19
        .replace(/\uD802\uDE61/g, "\u006C")

        // 20
        .replace(/\uD802\uDE62/g, "\u1E25")

        // 21
        .replace(/\uD802\uDE63/g, "\u006D")

        // 22
        .replace(/\uD802\uDE64/g, "\u0071")

        // 23
        .replace(/\uD802\uDE65/g, "\u0077")

        // 24
        .replace(/\uD802\uDE66/g, "\u0161")

        // 25
        .replace(/\uD802\uDE67/g, "\u0072")

        // 26
        .replace(/\uD802\uDE68/g, "\u0062")

        // 27
        .replace(/\uD802\uDE69/g, "\u0074")

        // 28
        .replace(/\uD802\uDE6A/g, "\u0073")

        // 29
        .replace(/\uD802\uDE6B/g, "\u006B")

        // 30
        .replace(/\uD802\uDE6C/g, "\u006E")

        // 31
        .replace(/\uD802\uDE6D/g, "\u1E2B")

        // 32
        .replace(/\uD802\uDE6E/g, "\u1E63")

        .trim()

        .replace(/^\x20+|\x20+$/gm, "");
}

function replace_symbols_new_to_old(str) {

    return str

    // 1
        .replace(/\u015B/g, "\uD802\uDE6F")

        // 2
        .replace(/\u0066/g, "\uD802\uDE70")

        // 3
        .replace(/\u02BC/g, "\uD802\uDE71")

        // 4
        .replace(/\u02BD/g, "\uD802\uDE72")

        // 5
        .replace(/\u1E0D/g, "\uD802\uDE73")

        // 6
        .replace(/\u0067/g, "\uD802\uDE74")

        // 7
        .replace(/\u0064/g, "\uD802\uDE75")

        // 8
        .replace(/\u0121/g, "\uD802\uDE76")

        // 9
        .replace(/\u1E6D/g, "\uD802\uDE77")

        // 10
        .replace(/\u007A/g, "\uD802\uDE78")

        // 11
        .replace(/\u1E0F/g, "\uD802\uDE79")

        // 12
        .replace(/\u0079/g, "\uD802\uDE7A")

        // 13
        .replace(/\u1E6F/g, "\uD802\uDE7B")

        // 14
        .replace(/\u1E93/g, "\uD802\uDE7C")

        // 15
        .replace(/\u0031/g, "\uD802\uDE7D")

        // 16
        .replace(/\u0035\u0030/g, "\uD802\uDE7E")

        // 17
        .replace(/\u00BB/g, "\uD802\uDE7F") //ToDo: Zahlzeichen

        // 18
        .replace(/\u0068/g, "\uD802\uDE60")

        // 19
        .replace(/\u006C/g, "\uD802\uDE61")

        // 20
        .replace(/\u1E25/g, "\uD802\uDE62")

        // 21
        .replace(/\u006D/g, "\uD802\uDE63")

        // 22
        .replace(/\u0071/g, "\uD802\uDE64")

        // 23
        .replace(/\u0077/g, "\uD802\uDE65")

        // 24
        .replace(/\u0161/g, "\uD802\uDE66")

        // 25
        .replace(/\u0072/g, "\uD802\uDE67")

        // 26
        .replace(/\u0062/g, "\uD802\uDE68")

        // 27
        .replace(/\u0074/g, "\uD802\uDE69")

        // 28
        .replace(/\u0073/g, "\uD802\uDE6A")

        // 29
        .replace(/\u006B/g, "\uD802\uDE6B")

        // 30
        .replace(/\u006E/g, "\uD802\uDE6C")

        // 31
        .replace(/\u1E2B/g, "\uD802\uDE6D")

        // 32
        .replace(/\u1E63/g, "\uD802\uDE6E")

        .trim()

        .replace(/^\x20+|\x20+$/gm, "");
    // module.exports =  ;  ToDo

}

function transformText_from_old_to_new() {
    var input = document.getElementById("text_old").value;
    document.getElementById("text_new").value = replace_symbols_old_to_new(input);
}

function transformText_from_new_to_old() {
    var input = document.getElementById("text_new").value;
    document.getElementById("text_old").value = replace_symbols_new_to_old(input);
}

//
// document.getElementById("demo").innerHTML = res;
