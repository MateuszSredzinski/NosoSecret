//-----------------------------------------
// *exercise "1" simple funtion in typescript with json config file with src and dist where src is ts file and dist is js file tsc -w is needed to translate ts to js*
// export {}
// const getFullName = (name: string, surname: string): string => {
// 	return name + " " + surname;
// }
// console.log(getFullName(`Mateusz`, `s`))
//-----------------------------------------
// exercise 2 - here I created an object programming with mark ? when one of input can be undefined.
// export {}
// interface User {
// 	name: string
// 	age?: number
// }
// const user: User = {
// 	name: `Mati`,
// 	age: 30,
// }
// const user2: User = {
// 	name: `Jack`,
// }
//-----------------------------------------
// exercise 3 - do interface to make code clear and simple
// interface UserInterface {
// 	name: string
// 	age?: number
// 	getMessadge(): String
// }
// const user: UserInterface = {
// 	name: `Mati`,
// 	age: 30,
// 	getMessadge() {
// 		return 'Siema' + name
// 	},
// }
// const user2: UserInterface = {
// 	name: `Jack`,
// 	getMessadge() {
// 		return 'Siema' + name
// 	},
// }
// console.log(user.getMessadge())
//-----------------------------------------
// exercise 4 - operator union, you can declare variable types of data
// interface UserInterface {
//     name: string
//     surname: string
// }
// let username: string = "alex";
// let errorMesadge: string | null = null;
// let pageName: string | number = "1"
// let user: UserInterface | null = null
// let someProp: string | number | null | undefined | string[] | object
//-----------------------------------------
// exercise 5 - type aliases
// type ID = string
// type PopularTag = string;
// interface UserInterface {
//     id: ID;
//     name: string
//     surname: string
// }
// const PopularTag: PopularTag[] = ['computer', 'chips']
// let username: string = "alex";
// let errorMesadge: string | null = null;
// let pageName: string | number = "1"
// let user: UserInterface | null = null
// let someProp: string | number | null | undefined | string[] | object
//-----------------------------------------
// exercise 6 - compile union and alias
// type ID = string
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null
// interface UserInterface {
//     id: ID;
//     name: string
//     surname: string
// }
// const PopularTag: PopularTag[] = ['computer', 'chips']
// const computerTag: MaybePopularTag = "computer"
// let username: string = "alex";
// let errorMesadge: string | null = null;
// let pageName: string | number = "1"
// let user: UserInterface | null = null
// let someProp: string | number | null | undefined | string[] | object
//-----------------------------------------
//exercise 7 - void in typescript
// const doSomething = (): void => {
// 	console.log('doSomething')
// }
//-----------------------------------------
// any type in ts
//avoid using any
// let foo: any = 'foo'
// console.log(foo.bar())
//-----------------------------------------
//never in ts
// const doSomethin2g = (): never => {
// 	throw "never"
// }
//-----------------------------------------
//unknow in ts
// let vAny: any = 10
// let vUnknown: unknown = 10;
// let s1: string = vAny;
// let s2: string = vUnknown
// console.log(vAny.foo());
// console.log(vUnknown.foo());
//-----------------------------------------
//type asserion in typescript
// let vAny: any = 10
// let vUnknown: unknown = 10
// let s1: string = vAny
// let s2: string = vUnknown as string
// let pageNumber: string = '1'
// let numericPageNumber: number = pageNumber as unknown as number
//----------------working with DOM-------------------------
// const someElement = document.querySelector('.foo') as HTMLInputElement
// console.log('someElement', someElement.value);
// const someElement = document.querySelector('.foo')
// someElement?.addEventListener('blur', event => {
// 	const target = event.target as HTMLInputElement
// 	console.log('event', event.value)
// })
//-----------------working with classes-----------   everything is public - we can do some private,
// interface UserInterface {
// 	getFullName(): string
// }
// class User {
// 	firstName: string
// 	lastName: string
// 	readonly unchangableName: string
// 	static readonly maxAge = 50
// 	constructor(firstName: string, lastName: string) {
// 		this.firstName = firstName
// 		this.lastName = lastName
// 		this.unchangableName = firstName
// 	}
// 	changeUnchangableName(): void {}
// 	getFullName(): String {
// 		return this.firstName + '' + this.lastName
// 	}
// }
// class Admin extends User {
// 	private editor: string
// 	setEditor(editor: string): void {
// 		this.editor = editor
// 	}
// 	getEditor(): string {
// 		return this.editor
// 	}
// }
// const user = new User('Camel', 'Tomasz')
//---------------adding id exercise------generics---
// const updatedArray = append<string>("baz","grey", "grass")
// const _hasSearchedString = any<string>((el: string) => el.contains(searchStr), ["foo"])
// const addId = <T extends object>(obj: T) => {
// 	const id = Math.random().toString(16)
// 	return {
// 		...obj,
// 		id,
// 	}
// }
// interface UserInterface<T, V> {
// 	name: string
// 	data: T
// 	meta: V
// }
// const user: UserInterface<{ meta: string }, string> = {
// 	name: 'Jack',
// 	data: {
// 		meta: 'foox',
// 	},
// 	meta: 'habox',
// }
// const user2: UserInterface<string[], string> = {
// 	name: 'Max',
// 	data: ['foox', 'bazil', 'crounch'],
// 	meta: 'hrebox',
// }
// const result = addId<UserInterface>(user)
// console.log('result', result)
// const statuses = {
// 	notStarted: 0,
// 	inProgress: 1,
// 	done: 2,
// }
// console.log(statuses.inProgress)
// enum Status {
// 	NotStarted = 'string',
// 	InProgress = 'string1',
// 	Done = 'strin 2',
// }
// interface Task {
// 	id: String
// 	status: Status
// }
// let notStartedStatus: Status = Status.NotStarted
// notStartedStatus = Status.Done
// console.log(Status.InProgress)
