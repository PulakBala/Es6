class Instructor{
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);