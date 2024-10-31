let btn=document.querySelector('.click');
const b=document.querySelector('#body');
const h=document.querySelector('.task')
const note=document.getElementById('note');
const submit =document.querySelector('.addNote');
const NoteList=document.querySelector('.show');
let val=true;

let change=()=>{
    b.style.backgroundColor='#8f6711';
    btn.style.boxShadow=' 3px 5px  rgba(255, 255, 255, 0.555)';
    h.style.color='rgb(218, 207, 195)';
    btn.innerHTML='Dark';
    b.style.transition='.5s';
    val =false;
}

let change2=()=>{
    b.style.backgroundColor='rgb(226, 223, 217)';
    btn.style.boxShadow=' 3px 5px  rgba(0, 0, 0, 0.555)';
    h.style.color=' rgb(168, 151, 94)';
    btn.innerHTML='Light';
    b.style.transition='.5s';
    val =true;
}

btn.onclick=()=>{
   if(val){
    change() 
   }else{
    change2()
   }
}


function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => displayNote(note.text, note.timestamp));
}


function displayNote(text, timestamp) {
    const Shown = document.createElement('div');
    Shown.classList.add("showNote");

    const del = () => {
        Shown.remove();
        deleteNote(text, timestamp);
    };

    Shown.innerHTML = `${text} <br><small>Created on: ${timestamp}</small> <button class='Delete'>Remove</button>`;
    Shown.style.fontSize = '16px';

    Shown.querySelector('.Delete').onclick = del;
    NoteList.appendChild(Shown);
}


function deleteNote(text, timestamp) {
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes = savedNotes.filter(note => note.text !== text || note.timestamp !== timestamp);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
}


submit.onclick = () => {
    const n = note.value;

    if (n === "") {
        alert("Please enter the Note");
    } else {
        const now = new Date();
        const timestamp = now.toLocaleString();

        
        displayNote(n, timestamp);

        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        savedNotes.push({ text: n, timestamp: timestamp });
        localStorage.setItem("notes", JSON.stringify(savedNotes));

        note.value = '';
    }
};

window.onload = loadNotes;

//this page is devolop by Chinmay L by taking lettel piece Off help by GPT{Local storage function}