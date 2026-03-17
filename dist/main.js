"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.email);
        console.log(this.phone);
        console.log(this.age);
    }
}
const user1 = new User(1, "Hazem", "hazem@mail.com", "123456", "01000000000", 25);
// user1.displayInfo()
/////////////////////////////////////22222222222222222222222222222222///////////////////////////////////////////////////
class Admin extends User {
    role;
    constructor(id, name, email, password, phone, age, role) {
        super(id, name, email, password, phone, age);
        this.role = role;
    }
}
const admin1 = new Admin(1, "lolo", "jhkj", "lklk", "012545", 20, true);
// admin1.displayInfo()
/////////////////////////////////////////////33333333333333333333333333333333333////////////////////////////////////////////////
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content;
    }
}
const user2 = new User(1, "Hazem", "hazem@mail.com", "123456", "010", 25);
const note2 = new Note(1, "Shopping List", "Buy milk, eggs, bread, and cheese from the store", user2);
console.log(note2.preview() + `......user id is  ${user2.id}`);
///////////////////////////////444444444444444444444444444444444444444/////////////////////////////////////
class NoteBook {
    notes;
    constructor() {
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
    }
    listNotes() {
        this.notes.forEach((note) => { return note; });
    }
}
/////////////////////////5555555555555555555555555/////////////////////////////////////////////////////////////
//هضيف داخل كلاس User خاصية notebooks على شكل array من NoteBook............ وهتكون اجريجيشن لان النوتبوكس تقدر تكون مستقله ومش معتمده اعتماد كلي عاليوزر
/////////////////////////////666666666666666666666666///////////////////////////////////////////////////
//أضفت داخل كلاس Note خاصية author من نوع User، بحيث كل Note يرتبط بمستخدم كـ author. العلاقة تمثل Association لأن النوتة والمستخدم مستقلين عن بعض، والنوتة يمكن أن تبقى موجودة حتى لو تم حذف المستخدم
//////////////////////////////7777777777777777777777777777////////////////////////////////////////////////////
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAllItems() {
        return this.items;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=main.js.map