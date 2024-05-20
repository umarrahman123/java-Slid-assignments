var allStudents = [
    {name: 'uamr', score: 30},

    {name: 'zahid', score: 90},

    {name: 'naveed', score: 60},

    {name: 'kamran', score: 40},

    {name: 'akber', score: 80},

];
 const studentScoreTotal = allStudents.reduce((ini, crr)=>{
    return ini + crr.score
    
 },0);
 var avrageScore = studentScoreTotal / allStudents.length;
 var totalScore = 500;
 console.log(allStudents);
c
 console.log(` obtain Score: ${studentScoreTotal}`);
 console.log(`average Score: ${avrageScore}`);


 var survay =[
    {subject: 'English'},
    {subject: 'History'},
    {subject: 'Math'},
    {subject: 'urdu'},
    {subject: 'isl'},

 ];

 var favoriteSubjects = survay.reduce((acc, response)=>{
    var subject = response.subject;
    if (!acc.hasOwnProperty(subject)) {
        acc[subject] = 1;
        acc.order.push(subject);
    } else {
        acc[subject]++;
    }
    return acc;
}, { order: [] });
    favoriteSubjects.order.forEach(subject => {
    console.log(`${subject}: ${favoriteSubjects[subject]}`);
});