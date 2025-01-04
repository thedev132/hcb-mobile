import { useTheme } from "@react-navigation/native";
import { useContext, useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  Switch, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import AuthContext from "../../../auth";
import { states } from "../../../lib/addressUtils";
import { OrganizationExpanded } from "../../../lib/types/Organization";
import CheckComponent from "../../transaction/Check";

type CheckScreenProps = {
  organization: OrganizationExpanded;
};

const CheckScreen = ({ organization }: CheckScreenProps) => {
  const [amount, setAmount] = useState('$0.00');
  const [recipient, setRecipient] = useState('');
  const [memo, setMemo] = useState('');
  const { colors: themeColors } = useTheme();
  const [state, setState] = useState('');
  const [notifyRecipient, setNotifyRecipient] = useState(false);
  const { token } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView 
        style={{ flex: 1, padding: 15, marginBottom: 30 }}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center' }}
        keyboardShouldPersistTaps="handled"
      > 
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 }}>Send a Check</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <CheckComponent 
            orgId={organization.id} 
            date={new Date().toISOString()} 
            recipientName={recipient} 
            amount={Number(amount.replace('$', '').replace(',', ''))} 
            memo={memo}
            checkNumber="1024"
          />   
        </View>

        {/* Memo */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Memo</Text>
        <TextInput
          placeholder="e.g., for venue payment"
          placeholderTextColor="#aaa"
          maxLength={40}
          onChangeText={(text) => setMemo(text)}
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Amount */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Amount ($)</Text>
        <TextInput
          placeholder="500.00"
          onChangeText={(text) => setAmount(text)}
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Payment Reason */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>What are you paying for?</Text>
        <TextInput
          placeholder="e.g., Event venue"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Recipient Details */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 10 }}>Recipient Details</Text>

        {/* Name */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Name</Text>
        <TextInput
          placeholder="e.g., Raviga Capital"
          placeholderTextColor="#aaa"
          onChangeText={(text) => setRecipient(text)}
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Address */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Street Address</Text>
        <TextInput
          placeholder="e.g., 1 Letterman Drive"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Suite */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Suite</Text>
        <TextInput
          placeholder="e.g., Suite 500"
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* City and State */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={{ color: '#fff', marginBottom: 5 }}>City</Text>
            <TextInput
              placeholder="e.g., San Francisco"
              placeholderTextColor="#aaa"
              style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: 10,
                borderRadius: 5,
              }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={{ color: '#fff', marginBottom: 5 }}>State</Text>
            <View style={{ backgroundColor: themeColors.card, borderRadius: 8 }}>
              <RNPickerSelect
                placeholder={{ label: 'Select a state', value: '' }}
                onValueChange={(itemValue: string) => setState(itemValue)}
                style={{ inputIOS: { color: themeColors.text }, inputAndroid: { color: themeColors.text } }}
                items={Object.keys(states).map((state) => ({ label: state, value: states[state as keyof typeof states] }))}
              />
            </View>
          </View>
        </View>

        {/* ZIP */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>ZIP</Text>
        <TextInput
          placeholder="e.g., 94129"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Recipient Email */}
        <Text style={{ color: '#fff', marginBottom: 5 }}>Recipient Email</Text>
        <TextInput
          placeholder="e.g., recipient@example.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: 10,
            marginBottom: 10,
            borderRadius: 5,
          }}
        />

        {/* Notify Recipient */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Switch
            value={notifyRecipient}
            onValueChange={(value) => setNotifyRecipient(value)}
          />
          <Text style={{ color: '#fff', marginLeft: 10 }}>Notify the recipient?</Text>
        </View>

        {/* File Upload */}
        <TouchableOpacity
          style={{
            backgroundColor: '#333',
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Attach Receipt / Invoice</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#1E90FF',
            padding: 15,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Send Check</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckScreen;
