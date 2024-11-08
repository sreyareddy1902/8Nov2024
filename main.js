
//by using string literal
let a="hello"
console.log(a)

let a1="45"
console.log(a1)

//by using string constructor

let b1=String("hello")
console.log(b1)

let b2=String("25")
console.log(b2)

let b3=String(45)
console.log(b3)

//methods
//slice()

let c="hello world"
console.log(c.slice())
console.log(c.slice(1))
console.log(c.slice(1,0)) //starting index is greater than ending index so result is empty string
console.log(c.slice(1,6))
console.log(c.slice(-1,-4))
console.log(c.slice(-1,4))
console.log(c.slice(-7,-2))

//substring()
let c1="hello javascript"
console.log(c1.substring())
console.log(c1.substring(0))
console.log(c1.substring(1,2))
console.log(c1.substring(2,1))
console.log(c1.substring(-1,7))

//substr()
let d="hello javascript"
console.log(d.substr())
console.log(d.substr(0))
console.log(d.substr(0,4))
console.log(d.substr(2,8))

//trim()
let e="    hello javascript  "
console.log(e)    
console.log(e.trim())
document.write(e,"<br>")
document.write(e.trim())

//trimStart()
let f="    hello javascript     "
console.log(f)
console.log(f.trimStart())

//trimEnd()
let g="     hello javascript     "
console.log(g)
console.log(g.trimEnd())

//padStart()
let h="hello"
console.log(h.padStart(7,"hi"))
console.log(h.padStart(10,"hi"))

//padEnd()
let i="hello"
console.log(i.padEnd(10,"ram"))

//replace()
let j="he is a sofware enginer and he lives in ap"
console.log(j.replace("he" ,"ram"))

//replaceAll()
let k="he is a sofware enginer and he lives in ap"
console.log(k.replaceAll("he" ,"ram"))

//split()
let l="he is a sofware enginer and he lives in ap"
console.log(l)
console.log(l.split())
console.log(l.split("",3))
console.log(l.split("",50))


//indexOf()
let m="hello world hello world"
console.log(m.indexOf())
console.log(m.indexOf("hello"))
console.log(m.indexOf("world"))
console.log(m.indexOf("World"))
console.log(m.indexOf("o"))
console.log(m.indexOf("o",5))
console.log(m.indexOf("ello",13))

//lastIndexOf()
let n="hello javascript hii javascript"
console.log(n.lastIndexOf())
console.log(n.lastIndexOf("hi",20))
console.log(n.lastIndexOf("j"))
console.log(n.lastIndexOf("j",25))

//length()
let o="hello"  //last index=4--->length-1
console.log(o.length)



//startsWith()
let p="hello javascript"
console.log(p.startsWith("hello"))
console.log(p.startsWith("ello"))
console.log(p.startsWith("Hello"))
console.log(p.startsWith("hello",0))
console.log(p.startsWith("hello",8))

//endsWith()
let q="hello javascript"
console.log(q.endsWith("hello"))
console.log(q.endsWith("javascript"))
console.log(q.endsWith("Javascript"))
console.log(q.endsWith("javascript",16))
console.log(q.endsWith("hello",5))

//toUppercase()
let r="GoodMorning"
console.log(r.toUpperCase())

//toLowerCase()
let s="GOODMORNING"
console.log(s.toLowerCase())

//undefined
let t
console.log(t)

//interpolation
let name="ram"
let age=45
let greetings=`my name is ${name} and my age is ${age}`
console.log(greetings)

let length=10
let breadth=6
let area=`area of rectangle is ${length*breadth}`
console.log(area)


//includes()
let v="he is a software"
console.log(v.includes("he"))
console.log(v.includes("He"))
console.log(v.includes("hee"))
console.log(v.includes("he" ,0))
console.log(v.includes("is",8))
console.log(v.includes("software",9))
console.log(v.includes("software"))
console.log(v.includes("a"))

//string with new keyword followed by comstructor
let u=new String("javascript")
console.log(u)





//scopes in js
//local scope
function myFunction(){
    const w="hello"
    console.log(w) //hello
}
myFunction()

//global scope
const x="javascript"
function myFunction1()
{
    console.log(x) //hello
}
myFunction1()
console.log(x)


//block scope
if(true)
{
    var y="java"
    console.log(y) 
}
console.log(y)  //we can access inside and outside with var

if(true)
    {
        let z="java"
        console.log(z)  //we cannot access outside of the block with let
    }

if(true)
{
    const z1="java"
    console.log(z1)    //we cannnot access outside of the block with const
}

    