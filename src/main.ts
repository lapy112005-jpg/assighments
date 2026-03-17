class User {
  public id: number
  public name: string
  public email: string
  private password: string
  public phone: string
  protected age: number

  constructor(id: number,name: string,email: string,password: string,phone: string,age: number) {
    if (age < 18 || age > 60) {
      throw new Error("age must be between 18 and 60")
    }
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.phone = phone
    this.age = age
  }

  displayInfo() {
    console.log(this.id)
    console.log(this.name)
    console.log(this.email)
    console.log(this.phone)
    console.log(this.age)
  }
}

const user1 = new User(1,"Hazem","hazem@mail.com","123456","01000000000",25)
// user1.displayInfo()
/////////////////////////////////////22222222222222222222222222222222///////////////////////////////////////////////////
class Admin extends User {
    public role:boolean
constructor(
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  age: number,
  role:boolean
) {
    super(id, name, email, password, phone, age)
    this.role = role
}
}
const admin1 = new Admin(1,"lolo" , "jhkj","lklk","012545" , 20 , true)
// admin1.displayInfo()
/////////////////////////////////////////////33333333333333333333333333333333333////////////////////////////////////////////////
class Note {
  public id: number
  public title: string
  public content: string
  public userId: User

  constructor(id: number, title: string, content: string, userId: User) {
    this.id = id
    this.title = title
    this.content = content
    this.userId = userId
  }

  preview(){
    return this.content
  }
}
const user2 = new User(1, "Hazem", "hazem@mail.com", "123456", "010", 25)

const note2 = new Note(
  1,
  "Shopping List",
  "Buy milk, eggs, bread, and cheese from the store",
  user2
)

console.log(note2.preview()+ `......user id is  ${user2.id}`)
///////////////////////////////444444444444444444444444444444444444444/////////////////////////////////////
class NoteBook {
  private notes: Note[]

  constructor() {
    this.notes = []
  }

  addNote(note: Note): void {
    this.notes.push(note)
  }

  removeNote(noteId: number): void {
    this.notes = this.notes.filter(note => note.id !== noteId)
  }

  listNotes(): void {
    this.notes.forEach((note)=>{return note})
  }
}
/////////////////////////5555555555555555555555555/////////////////////////////////////////////////////////////
//هضيف داخل كلاس User خاصية notebooks على شكل array من NoteBook............ وهتكون اجريجيشن لان النوتبوكس تقدر تكون مستقله ومش معتمده اعتماد كلي عاليوزر
/////////////////////////////666666666666666666666666///////////////////////////////////////////////////
//أضفت داخل كلاس Note خاصية author من نوع User، بحيث كل Note يرتبط بمستخدم كـ author. العلاقة تمثل Association لأن النوتة والمستخدم مستقلين عن بعض، والنوتة يمكن أن تبقى موجودة حتى لو تم حذف المستخدم
//////////////////////////////7777777777777777777777777777////////////////////////////////////////////////////
class Storage<T> {
  private items: T[] = []

  addItem(item: T): void {
    this.items.push(item)
  }

  removeItem(item: T): void {
    this.items = this.items.filter(i => i !== item)
  }

  getAllItems(): T[] {
    return this.items
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////