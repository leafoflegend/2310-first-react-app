import { faker } from '@faker-js/faker';

const createCat = () => {
    return {
        breed: faker.animal.cat(),
        name: faker.name.fullName(),
        age: Math.floor(Math.random() * 15),
    };
};

export default createCat;
