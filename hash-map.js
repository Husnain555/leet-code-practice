let h = new Map();
console.log(h,'top')
h.set(10,"husnain")
h.set(20,"husnain1")
h.set(30,"husnain2")
console.log(h,'mod')
h.delete(10)
console.log(h,'mid')

for(t of h ){
    console.log(t)
}
h.clear()
console.log(h)