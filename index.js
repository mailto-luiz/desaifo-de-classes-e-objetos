class skills {
    constructor(skillClass, skill){
        this.skillClass = skillClass
        this.skill = skill
    }
    escrever(){
        console.log(`O ${this.skillClass} atacou usando ${this.skill}`)
    }
        
}

let mageClass = new skills ("mago", "magia")
let knightClass = new skills ("guerreiro", "espada")
let monkClass = new skills ("mongue", "artes marciais")
let ninjaClass = new skills ("ninja", "shuriken")

let stats ={
    name: "Paulo",
    age: 34,
    preferredSkill: mageClass
}

if (stats.preferredSkill === mageClass) {mageClass.escrever()}
else if (stats.preferredSkill === knightClass) {knightClass.escrever()}
else if (stats.preferredSkill === monkClass) {monkClass.escrever()}
else if (stats.preferredSkill === ninjaClass) {ninjaClass.escrever()}