import { FC } from "react";
import { StatObject } from "../../assets";
import { FormBase } from "../../components";

type SummaryProps = {
  stat: StatObject;
};
const Summary: FC<SummaryProps> = (props) => {
  return (
    <FormBase title="Summary" stat={props.stat}>
      Hi
    </FormBase>
  );
};

export default Summary;
