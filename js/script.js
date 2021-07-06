Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Boolean',
                    position: 'Developer',
                    description: 'You will develop exercises for classes to do in the afternoon',
                    created_at: '5/22/2021',
                    logo: 'logo.jpg',
                    city: 'Roma',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'SpaceX',
                    position: 'Astronaut',
                    description: 'You will take care of wandering in space towards Mars with our Falcon',
                    created_at: '7/12/2020',
                    logo: 'logo.jpg',
                    city: 'Texas',
                    contract: 'On Call'
                },
                {
                    id: 3,
                    company: 'Caltech',
                    position: 'Experimental physicist',
                    description: 'You will work alongside Dr.Sheldon Cooper on string theory',
                    created_at: '6/03/2021',
                    logo: 'logo.jpg',
                    city: 'Pasadena',
                    contract: 'Stage'
                },
                {
                    id: 4,
                    company: 'Apple',
                    position: 'IT-Pro',
                    description: 'Increase your sales by creating complete solutions composed of both Apple products and services and complementary items.',
                    created_at: '6/03/2021',
                    logo: 'logo.jpg',
                    city: 'Venice',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Google',
                    position: 'YouTube Senior Software Engineer',
                    description: 'As a YouTube Senior Software Engineer, you will lead complex, multi-disciplinary engineering projects using your engineering expertise. This includes managing project schedules, identifying risks and clearly communicating them to project stakeholders.',
                    created_at: '12/05/2021',
                    logo: 'logo.jpg',
                    city: 'Paris',
                    contract: 'Part Time'
                },
                {
                    id: 6,
                    company: 'IBM',
                    position: 'Data & AI / Analytics Client Technical Specialist',
                    description: 'As a CTP you understand the client’s business requirements, technical requirements and/or competitive landscape. ',
                    created_at: '01/06/2021',
                    logo: 'logo.jpg',
                    city: 'New York',
                    contract: 'Full Time'
                }    
            ],
            starred: [2, 3],
            applied: [4, 5]
            
        },
    }
);