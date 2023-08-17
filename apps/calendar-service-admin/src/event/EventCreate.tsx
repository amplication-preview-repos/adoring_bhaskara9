import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Ended At" source="endedAt" />
        <DateTimeInput label="Started At" source="startedAt" />
        <TextInput label="Title" source="title" />
        <TextInput label="Uuid" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
