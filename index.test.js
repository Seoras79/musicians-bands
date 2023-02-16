const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    // test('can create a Band', async () => {
    //     // TODO - test creating a band
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })
    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({
            name: 'The Beatles',
            genre: 'Rock',
            
        });
        expect(band.name).toBe('The Beatles'); // check the name
        expect(band.genre).toBe('Rock'); // check the genre
    })

     // test('can create a Musician', async () => {
    //     // TODO - test creating a musician
    //     expect('NO TEST').toBe('EXPECTED VALUE HERE');
    // })
    test("can create a musician", async () => {
        const musician = await Musician.create({ // create a musician
            name: 'John Lennon',
            instrument: 'Guitar',
        });
        expect(musician.name).toBe('John Lennon'); // check the name
        expect(musician.instrument).toBe('Guitar'); // check the instrument
    })
    test("band has many musicians", async () => {
        const band = await Band.create({ // create a band
            name: 'The Beatles',
            genre: 'Rock',
        });
        const musician = await Musician.create({ // create a musician
            name: 'John Lennon',
            instrument: 'Guitar'
        });
        const musician2 = await Musician.create({ // create a musician  
            name: 'Paul McCartney',
            instrument: 'Bass'
        });
       
        await band.addMusicians([musician, musician2]);  // add multiple musicians
        const musicians = await band.getMusicians(); // get all musicians
        expect(musicians.length).toBe(2); // there should be 2 musicians
        
    })
    test("musician belongs to a band", async () => { // test the association using async/await
        const band = await Band.create({ // create a band
            name: 'The Beatles',
            genre: 'Rock',
        });
        const musician = await Musician.create({ // create a musician
            name: 'John Lennon',
            instrument: 'Guitar',
        });
        await band.addMusician(musician); // add a single musician
        const musicians = await band.getMusicians(); // get all musicians
        expect(musicians.length).toBe(1); // there should be 1 musician
    })

    

   
})