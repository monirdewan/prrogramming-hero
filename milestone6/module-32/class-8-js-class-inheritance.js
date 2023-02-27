class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }

    provideFeedback(){
        console.log(`${this.name} Thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'web team';
    constructor(name,location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    creatQuioz(module){
        console.log(`please create quiz for module ${module}`)
    }

    
}


class Developer extends TeamMember{
    designation='Web Course Instructor';
    team = 'Web team';
    tech;
    constructor(name,tech,location){
        super(name,location);
        this.tech = tech;
    }

    developFeature(feature){
        console.log(`please develop the ${feature}`);
    }
    relese(version){
        console.log(`please relese the version ${version}`)
    }
   
}




class JobPlacement extends TeamMember{
    designation='Job Placement Commando';
    team = 'Jobplacement team';
    region;
    constructor(name,region,location){
       super(name,location);
        this.region = region;
    }

    provideResume(feature){
        console.log(`please develop the ${feature}`);
    }
    PrepareStudent(version){
        console.log(`please relese the version ${version}`)
    }
    
}


// const alia = new Developer('Alia Bath', 'React','Dhaka');
// console.log(alia)
// alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha Khan', 'India','Bangladesh');
console.log(bipasha);
bipasha.provideResume('React');