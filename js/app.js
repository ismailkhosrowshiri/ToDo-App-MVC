import Controller from "./controller.js";
import View from "./view.js";
import Model from "./model.js";

const app = new Controller(new View(), new Model());
