import { createStore } from "@stencil/store";

const { state } = createStore({
    first: "",
    last: ""
});

export default state;