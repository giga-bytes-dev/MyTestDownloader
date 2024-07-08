import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const DownloadTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="videoUrl" source="videoUrl" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="progress" source="progress" />
        <TextInput label="result" multiline source="result" />
      </SimpleForm>
    </Edit>
  );
};
