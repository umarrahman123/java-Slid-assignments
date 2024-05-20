var students = [
    {
        id: 1,
        name: 'umar',
        disignation: 'Sutdent',
        scoree: 84,
    },
    {
        id: 2,
        name: 'zahid',
        disignation: 'Sutdent',
        scoree: 74,
    },
    {
        id: 3,
        name: 'saad',
        disignation: 'Sutdent',
        scoree: 44,
    },
    {
        id: 4,
        name: 'husain',
        disignation: 'Sutdent',
        scoree: 54,
    }
]
//Map
const updatedStudent = students.map((students)=>{
    return { ...students, role: 'techer'};
})
console.log(updatedStudent);

// filter highScore(

const highScore = students.filter((score)=>{
    return score.scoree>=80;
})
console.log(highScore);

//// forEach

const newStudent = students.forEach((std)=>{
return std>= 11;
})
console.log(newStudent);



