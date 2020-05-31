class Marker {
    _color;
    _inkLevel;

    constructor(color) {
        this._color = color;
        this._inkLevel = 100;
    }

    set _color(value) {
        this._color = value;
    }

    get _color() {
        return this._color;
    }

    set _inkLevel(value) {
        this._inkLevel = value;
    }

    get _inkLevel() {
        return this._inkLevel;
    }

    print(str) {
        let result = "";
        for (let i = 0; i < str.length && this._inkLevel > 0; i++) {
            result += str.charAt(i);
            if (str[i] != " ") {
                this._inkLevel -= 0.5;
            }
        }
        return result;
    }
}

let marer = new Marker("blue");

function runTest2() {
    console.log("Run run:");
    console.log(marer.print("kbnnu dhdhdhhd dhhdhdh ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg  ggggggggggggggggggg nuninvidnvininv kmkn njbjb ububub bh  joninn nibib ibibi ibibib iibibib ibibib i bibibi ibiibib last simvols"));
}

runTest2();

class RefeeledMarker extends Marker{

    refeel(){
        this._inkLevel = 100;
    }
}

let ddd = new RefeeledMarker("blue");
console.log(" Hi from iherete");
console.log(ddd.print(" Hi from ihereted class kbnnu dhdhdhhd dhhdhdh ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg  ggggggggggggggggggg nuninvidnvininv kmkn njbjb ububub bh  joninn nibib ibibi ibibib iibibib ibibib i bibibi ibiibib last simvols"));
console.log("Ink level after use; ",ddd._inkLevel);
ddd.refeel();
console.log("Ink level after refill; ",ddd._inkLevel);
