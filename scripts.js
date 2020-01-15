// Query Selector accepts ANY CSS Selector as a string.
const contact = document.querySelector("contact");

/**
 * 1. Listen for an Event.
 * 2. Use a CB fxn. when this event occurs.
 */
contact.addEventListener("submit", function(event) {
  event.preventDefault();
});

console.log(contact);
