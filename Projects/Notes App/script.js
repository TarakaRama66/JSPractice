let notes =
JSON.parse(localStorage.getItem("notes")) || [];
// Display Notes
function showNotes(){

let output = "";

notes.forEach((note, index) => {
output += `
  <div class="note">
    <p>${note}</p>
    <button class="delete"
      onclick="deleteNote(${index})">
      Delete
    </button>
  </div>
`;
});
document.getElementById("notes").innerHTML = output;
}
// Add Note
function addNote(){
let input =
document.getElementById("noteInput");
let value = input.value;
if(value === "") return;
notes.push(value);
localStorage.setItem(
"notes",
JSON.stringify(notes)
);
input.value = "";
showNotes();
}
// Delete Note
function deleteNote(index){
notes.splice(index, 1);
localStorage.setItem(
"notes",
JSON.stringify(notes)
);
showNotes();
}
// Initial Load
showNotes();
