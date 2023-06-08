// Import and register all your controllers from the importmap under controllers/*

import { application } from "./application";

import HelloControler from "./hello_controller";
import CharacterCounter from "stimulus-character-counter";

application.register("hello", HelloControler);
application.register("character-counter", CharacterCounter);

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
