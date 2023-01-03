// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

// inside app/javascript/application.js
// add these two lines
import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
Alpine.plugin(persist);

window.Alpine = Alpine;

document.addEventListener("DOMContentLoaded", function (event) {
  window.Alpine.start();
});
