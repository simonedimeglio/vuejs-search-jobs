Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Boolean Careers',
                    position: 'Senior Full Stack Developer',
                    description: "You will develop hard exercises for Boolean's classes.",
                    created_at: '5/22/2021',
                    logo: 'https://www.boolean.careers/images/misc/logo-small.png',
                    city: 'Rome, Italy.',
                    contract: 'Full Time'
                },
                {
                    id: 2,
                    company: 'SpaceX',
                    position: 'Astronaut',
                    description: "You will take care of wandering in space towards Mars with Elon Musk's Falcon X.",
                    created_at: '7/12/2020',
                    logo: 'https://media-exp3.licdn.com/dms/image/C560BAQEbqLQ-JE0vdQ/company-logo_200_200/0/1546981484841?e=2159024400&v=beta&t=f60no4w5DV2toGVzTyGvPIpCk2LTWLwP9UQJIR2dpmI',
                    city: 'Austin, Texas.',
                    contract: 'On Call'
                },
                {
                    id: 3,
                    company: 'Caltech - California Institute of Technology',
                    position: 'Experimental Physicist',
                    description: "You will work alongside Dr.Sheldon Cooper's team on String Theory.",
                    created_at: '6/03/2021',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TBBT_logo.svg/828px-TBBT_logo.svg.png',
                    city: 'Pasadena, California.',
                    contract: 'Stage'
                },
                {
                    id: 4,
                    company: 'Apple Inc - California',
                    position: 'IT-Pro',
                    description: 'Increase your sales by creating complete solutions composed of both Apple products and services and complementary items.',
                    created_at: '6/03/2021',
                    logo: 'https://www.macitynet.it/wp-content/uploads/2016/09/logo-apple-1977-e1474536476681.jpg',
                    city: 'Venice, Italy.',
                    contract: 'Full Time'
                },
                {
                    id: 5,
                    company: 'Google',
                    position: 'YouTube Software Engineer',
                    description: 'As a YouTube Senior Software Engineer, you will lead complex, multi-disciplinary engineering projects using your engineering expertise. This includes managing project schedules, identifying risks and clearly communicating them to project stakeholders.',
                    created_at: '12/05/2021',
                    logo: 'data:image/png;base64,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',
                    city: 'Paris, France.',
                    contract: 'Part Time'
                },
                {
                    id: 6,
                    company: 'NASA',
                    position: 'Data & AI',
                    description: "As a National Aeronautics and Space Administration's CTP you understand the client’s business requirements, technical requirements and/or competitive landscape.",
                    created_at: '01/06/2021',
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
                    city: 'New York, New York.',
                    contract: 'Full Time'
                }
            ],
            starred: [1, 4, 5],
            applied: [2, 3],
            notification: 'off',
            notificationError: 'off',

        },

        methods: {

            /*
            MILESTONE 2: IDENTIFICARE IL PREFERITO
            Identifichiamo nella lista gli annunci di lavoro preferiti, 
            con un simbolo che si attiva/colora 
            solo se quell’annuncio è tra i preferiti.
            */

            setFavorites: function (index) {
                if (this.starred.includes(index)) { // se l'id del job selezionato è già presente nell'array starred
                    let counter = this.starred.indexOf(index); // passo allo splice l'indice di ciò che seleziono
                    this.starred.splice(counter, 1); // tolgo l'id dalla lista starred
                } else { // altrimenti
                    this.starred.push(index); // lo pusho nell'array
                }
                console.log(this.starred);


            },

            /*
            MILESTONE 3: INVIARE LA NOSTRA CANDIDATURA
            Gli annunci a cui abbiamo mandato una candidatura non mostreranno il pulsante APPLY e si distingueranno dalle altre per colore e Badge ‘applied’.
            Un annuncio a cui abbiamo inviato la candidatura automaticamente viene eliminato dalla lista starred.
            Anche in questo caso inseriremo l’id nell’array applied. (come prima abbiamo fatto per lo starred)
            */

            sendApplication: function (index) {

                if (!this.applied.includes(index)) {// se non mi sono già candidato per questa posizione lavorativa
                    this.applied.push(index); // la pusho nell'array "applied"

                    this.starred = this.starred.filter((e) => {
                        if (e === index) {
                            return false
                        } else {
                            return true
                        }
                    });

                    // BONUS
                    // Quando premiamo sul pulsante APPLY, 
                    // dopo 1 secondo viene mostrata una modale con Feedback ‘Candidatura inviata’ 
                    // che sparirà dopo un altro secondo
                    setTimeout(() => { this.notification = 'on'; }, 1000);
                    setTimeout(() => { this.notification = 'off'; }, 2000);


                } else { // se l'elemento è già incluso in "applied"
                    setTimeout(() => { this.notificationError = 'on'; }, 1000);
                    setTimeout(() => { this.notificationError = 'off'; }, 2000);
                    // alert('ERROR: APPLICATION ALREADY SENT'); 
                    // lo comunico via alert
                }

            }


        }
    }
);