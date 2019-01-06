let a = 'hello'
let b = 2
let c = undefined

let d = {
  a,
  ...(b && {b}),
  ...(c && {c})
}

console.log(d) // Output - {a: "hello", b: 2}

