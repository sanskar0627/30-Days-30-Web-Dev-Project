document.addEventListener("DOMContentLoaded", loadNotes);

function addNote() {
    let noteText = document.getElementById("noteText").value;
    if (noteText.trim() === "") {
        alert("Please write something before adding!");
        return;
    }

    let note = {
        text: noteText,
        id: new Date().getTime()
    };

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteText").value = "";
    loadNotes();
}

function loadNotes() {
    let notesContainer = document.getElementById("notesContainer");
    notesContainer.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(note => {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.innerHTML = `
            <p>${note.text}</p>
            <button class="delete-btn" onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

function deleteNote(id) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
}
