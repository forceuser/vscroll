function vscroll(el) {
    const bufferSize = 10;
    const scroller = {
        options: {},
        init(el) {
            el.innerHTML = `<div class="placeholder"></div><div class="container"></div>`;
            this.el = el;
            this.placeholder = el.querySelector(".placeholder");
            this.container = el.querySelector(".container");
            el.addEventListener("scroll", event => {
                this.update();
            });
            this.update();
        },
        update(opts = {}) {
            if ("length" in opts) {
                this.options.length = opts.length;
            }
            if ("height" in opts) {
                this.options.height = opts.height;
            }
            if ("onData" in opts) {
                this.options.onData = opts.onData;
            }
            this.placeholder.style.height = `${this.options.height * this.options.length}px`;
            const p = this.el.scrollTop / this.el.scrollHeight;
            const pi = p * this.options.length;
            const currentBufferStart = Math.floor(pi / bufferSize) * bufferSize;
            console.log("pi", pi, currentBufferStart)
        }
    }
    scroller.init(el);
    return scroller;
}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

const s = vscroll(document.querySelector(".scroller"));
const data = [];
const colors = ["1abc9c", "2ecc71", "3498db", "9b59b6", "34495e", "f1c40f", "e67e22", "e74c3c"];
for (let i = 0; i < 200; i++) {
    data.push({height: randomInteger(100, 200), color: colors[randomInteger(0, colors.length - 1)]});
}

s.update({length: 200, height: 120});
