import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

import { StackParamList } from "../../../lib/NavigatorParamList";
import { TransactionCardCharge } from "../../../lib/types/Transaction";
import { renderDate, renderMoney } from "../../../util";
import UserMention from "../../UserMention";
import ReceiptList from "../ReceiptList";
import TransactionDetails, { descriptionDetail } from "../TransactionDetails";
import TransactionTitle, { Muted } from "../TransactionTitle";

import { TransactionViewProps } from "./TransactionViewProps";

export default function CardChargeTransaction({
  transaction,
  orgId,
}: TransactionViewProps<TransactionCardCharge>) {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, "Transaction">>();

  return (
    <View>
      <TransactionTitle>
        {renderMoney(Math.abs(transaction.amount_cents))}{" "}
        <Muted>charge at</Muted> {transaction.card_charge.merchant.name}
      </TransactionTitle>
      <TransactionDetails
        details={[
          descriptionDetail(orgId, transaction, navigation),
          { label: "Spent on", value: renderDate(transaction.date) },
          {
            label: "Spent by",
            value: <UserMention user={transaction.card_charge.card.user} />,
          },
        ]}
      />
      <ReceiptList transaction={transaction} />
    </View>
  );
}
