// in src/components/AdminApp.tsx
"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { CarsList } from "./cars";



const dataProvider = jsonServerProvider("http://localhost:8080");

const AdminApp = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="allCar"
      list={CarsList}
      recordRepresentation="name"
    />
  </Admin>
);

export default AdminApp;