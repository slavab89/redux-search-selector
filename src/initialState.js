import faker from 'faker';
const initial = { mapping: {} };

for (let i = 0; i < 50; i++) {
  const id = faker.random.uuid();
  initial.mapping[id] = {
    id,
    name: faker.name.findName()
  }
}

export default initial;
