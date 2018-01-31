/*
 *
 * Author: LegitSoulja
 * All rights reserved. Free to modify, keep copyright attatched.
 * Version: 1.1
 *
 */
(function() {
    class Gen {
        constructor() {
            this.GC = new GenCore();
        }
        // generate random char codes (ALL ASCII)
        // Gen.genRandomCharCodes(length of chars, callback)
        genRandomCharCodes(length, resp = "") {
            resp = "";
            for (var i = 0; i < length; i++) {
                resp += String.fromCharCode(this.GC.genJ(0, 65535));
            }
            return resp;
        }
        // Gen.genRGB(); // generate random RGB;
        genColorHex(resp = "") {
            resp = "#";
            for (var i = 0; i < 6; i++) {
                resp += this.GC.colors[this.GC.genJ(0, this.GC.colors.length - 1)];
            }
            return resp;
        }
        // usage: var rgb = genRGB(); (rgb.r, rgb.g, rgb.b) is available.
        genRGB() {
            return {
                r: this.GC.genJ(0, 255),
                g: this.GC.genJ(0, 255),
                b: this.GC.genJ(0, 255)
            };
        }
        // Gen.genRandomUTF8(length of numbers, custom prefix, callback)
        genRandomUTF8(length, custom = "", resp = "") {
            custom = (custom) ? custom : (this.GC.letters + this.GC.numbers).toString(), resp = "";
            for (var i = 0; i < length; i++) {
                resp += custom[this.GC.genJ(0, custom.length)];
            }
            return resp;
        }
        // shuffles an array
        shuffle(a) {
            for (var i = a.length; i; i--) {
                var j = ~~(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            return a;
        }
        // genBinary("char", callback); Outputs the binary result of that char.
        getBinary(x, resp = "") {
            resp = "";
            for (var i = 0; i < x.length; i++) {
                var e = x[i].charCodeAt(0);
                var s = "";
                do {
                    var a = e % 2;
                    e = (e - a) / 2;
                    s = a + s;
                } while (e != 0);
                while (s.length < 8) {
                    s = "0" + s;
                }
                resp += s + " ";
            }
            return resp;
        }
        // Gen.genBinary(legnth or random binary numbers, custom prefix, callback)
        genBinary(length, custom = "", resp = "") {
            custom = (custom) ? custom : (this.GC.letters + this.GC.numbers).toString(), resp = "", length = (length > 0) ? length : 1;
            for (var i = 0; i < length; i++) {
                resp += this.getBinary(custom[this.GC.genJ(0, custom.length - 1)]);
            }
            return resp;
        }
        // Gen.each(Gen.genRGB,10); (Generated 5 keys, obey function rules as follows.
        // Gen.each(function, (each loop length), (function args 0), (function args 1), (custom preset), (callback))
        each(func, a, b, e, c = "", sep = ",", resp = "") {
            var name = func.toString().split("("),
                name = name[0],
                resp = "";
            if (typeof(this[name]) != 'function') throw new Error("Function is not a function");
            for (var i = 0; i < a; i++) {
                resp += this[name](b, e, c) + sep; // some functions wont have a custom, put them in GenCore
            }
            return resp;
        }
        // Gen.genSerial(length of dashes in serial, length of serial, custom prefix, callback)
        genSerial(dash, length, custom = "", resp = "") {
            custom = (custom) ? custom : this.GC.letters + this.GC.numbers, dash++, resp = "";
            custom = this.shuffle(custom.split(""));
            for (var i = 0; i < dash; i++) {
                resp += (this.GC.genShuffle(custom, 0, custom.length, length))
                    .toString();
                resp += (i < dash - 1) ? "-" : "";
            }
            return resp;
        }
        genOddNumbers(length, resp = "") {
            for (var i = 0; i < length; i++) {
                resp += ~~(Math.random() * (5 - 0) + 0) * 2 + 1;
            }
            return resp;
        }
        genEvenNumbers(length, resp = "") {
            for (var i = 0; i < length; i++) {
                resp += ~~(Math.random() * 10 / 2) * 2;
            }
            return resp;
        }

        // Gen.genSerials(length of dashes in serial, length of serial, number of serials, custom prefix, callback)
        genSerials(dash, length, amount = 1, custom = "", resp = "") {
            resp = "", amount = (amount > 0) ? amount : 1;
            for (var i = 0; i < amount; i++) {
                resp += this.genSerial(dash, length, custom) + "\n";
            }
            return resp;
        }

        // genRandomNumbers(length of numbers, custom prefix, callback)
        genRandomNumbers(length, custom = "", resp = "") {
            custom = (custom && custom > 0) ? custom : 0, resp = "";
            for (var i = 0; i < length; i++) {
                resp += (custom) ? (this.GC.genJ(0, custom.length)) : (this.GC.genJ(0, 9));
            }
            return resp;
        }
        // genRandomAOA(length of output, callback)
        genRandomAOA(length, resp = "") {
            var chars = this.GC.letters + this.GC.numbers + this.GC.symbols;
            resp = "";
            for (var i = 0; i < length; i++) {
                resp += chars[this.GC.genJ(0, chars.length - 1)];
            }
            return resp;
        }
    }
    class GenCore {
        constructor() {
            this.letters = this.parseChars(65, 90) + this.parseChars(97, 122);
            this.numbers = this.parseChars(48, 57);
            this.symbols = this.parseChars(33, 47) + this.parseChars(58, 64) + this.parseChars(123, 126);
            this.colors = this.parseChars(48, 57) + this.parseChars(65, 71);
        }
        genShuffle(chars, min, max, len, resp = "") {
            resp = "";
            for (var i = 0; i < len; i++) {
                resp += chars[this.genJ(min, max)]
            }
            return resp;
        }
        genJ(min, max) {
            return ~~(Math.random() * (min, max) + min)
        }
        parseArray(a, resp = "") {
            for (var i = 0; i < a.length; i++) {
                resp += String.fromCharCode(a[i])
            }
            return resp;
        }
        parseChars(to, from, resp = "") {
            resp = "";
            for (var i = 0; i < from - to + 1; i++) {
                resp += String.fromCharCode((to + i))
            }
            return resp;
        }
    }
    if (typeof(module) != "undefined") {
        exports.Gen = new Gen;
        return;
    }
    window.Gen = new Gen();
})();
