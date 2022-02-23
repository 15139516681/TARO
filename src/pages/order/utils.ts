export const setName = (name: string): string => {
  return name
}
export const testObj = {
  saySome() {
    let person: any = {
      name: "张三",
      age: 20,
    }
    // let proxy = new Proxy(person, {
    //     get(target, propKey) {
    //         return Reflect.get(target, propKey)
    //     },
    // })
    console.log(Reflect.get(person, "name"))
    console.log(Reflect.defineProperty(person, "sex", { value: "男" }))
    console.log(Reflect.deleteProperty(person, "name"))

    console.log(person)
  },
}
