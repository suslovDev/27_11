import { useFormContext } from "react-hook-form";

import { Card } from "@shared/ui";

import { getErrorMessages } from "@src/library/helpers/forms/getErrorMessages";

import { CustomEditorInputControlled } from "library/components/authentication/InputsControlled";
import { numberMaskCanStartZero } from "library/helpers/events/timePicker";

import st from "./styles.module.scss";

export const EditorClientCost = (): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessages(errors, ["cost"]).join(" ");

  return (
    <fieldset>
      <div className={st.header}>
        <h3>Стоимость для клиента</h3>
        <p>{errorMessage}</p>
      </div>
      <Card className={st.cost}>
        <div className={st.wrapper}>
          <div className={st.cost__input}>
            <CustomEditorInputControlled
              control={control}
              name="cost"
              label=""
              sufix={"RUB"}
              mask={numberMaskCanStartZero}
            />
          </div>
        </div>
      </Card>
    </fieldset>
  );
};
