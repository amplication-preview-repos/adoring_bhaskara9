import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Ended At" source="endedAt" />
        <DateTimeInput label="Started At" source="startedAt" />
        <TextInput label="Title" source="title" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
