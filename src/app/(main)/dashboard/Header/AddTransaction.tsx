import React, { type JSX, useState, useEffect, useCallback } from "react";
// import styles from "./AddTransaction.module.css";
// import { useCategory, type Category } from "@/services/category";
// import { useAccount, type Account } from "@/services/account";
// import { GroupTypes } from "@/common/constraints";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Wallet } from "lucide-react";
// import { CreateTransaction, useTransaction } from "@/services/transaction";
import { useForm, SubmitHandler } from "react-hook-form";

type AddTransactionProps = {
  onClose?: () => void;
};

type CreateTransactionProps = {
  type: number;
  categoryId: string;
  accountId: string;
  amount: number;
  transactionDate: Date;
  name: string;
};

function AddTransaction({ onClose }: AddTransactionProps): JSX.Element {
  const { register, handleSubmit } = useForm<CreateTransactionProps>();

  const onSubmit: SubmitHandler<CreateTransactionProps> = (data) => {
    console.log(data);
    if (onClose) onClose();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("type", { valueAsNumber: true })} />
      <select {...register("categoryId")}>
        <option value="test">test</option>
        <option value="test2">test2</option>
      </select>

      <input {...register("accountId")} />
      <input {...register("amount", { valueAsNumber: true })} />

      <input {...register("transactionDate", { valueAsDate: true })} />

      <input {...register("name")} />

      <button type={"submit"}>제출</button>
    </form>
  );
}

export default AddTransaction;
