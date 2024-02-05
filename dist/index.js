import { cancatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        cancatenation(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map