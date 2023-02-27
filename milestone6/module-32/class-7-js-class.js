//syntactic sugar
//class name must be first letter will be capital latter
class Instructor{
    name;
    designation = 'Web Course Instructor';
    team = 'web team';
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuioz(module){
        console.log(`please create quiz for module ${module}`)
    }

    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}

const amir = new Instructor('Amir','Dhaka');
console.log(amir);
amir.startSupportSession('9:00');
amir.creatQuioz(60);
amir.provideFeedback();