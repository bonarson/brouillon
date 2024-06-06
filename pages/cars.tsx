import { Datagrid, ImageField, List, NumberField, TextField } from "react-admin";


export const CarsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="idCar"></NumberField>
            <TextField source="carName"></TextField>
            <TextField source="model"></TextField>
            <NumberField source="price"></NumberField>
            <TextField source="url"></TextField>
        </Datagrid>
    </List>
)