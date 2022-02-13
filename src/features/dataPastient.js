import faker from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const fakeData = [...Array(5)].map(() => ({
  id: faker.datatype.uuid(),
  full_name: faker.name.findName(),
  gender: faker.name.gender(true),
  phone: faker.phone.phoneNumber(),
  age: faker.datatype.number({ min: 10, max: 80, precision: 1 }),
  place: faker.address.cityName(),
  address: faker.address.streetAddress(),
  post_code: faker.address.zipCode(),
  message: faker.lorem.sentences(),
  drugs_name: faker.lorem.words(),
  drugs_total: faker.datatype.number({ min: 5, max: 20, precision: 5 }),
  drugs_dose: faker.datatype.number({ min: 1, max: 3, precision: 1 }),
}));

// console.log(fakeData);

export const registerSlice = createSlice({
  name: "register",
  initialState: { value: fakeData },
  reducers: {
    addData: (state, action) => {
      state.value.push(action.payload);
    },
    addMed: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addData, addMed } = registerSlice.actions;
export default registerSlice.reducer;
