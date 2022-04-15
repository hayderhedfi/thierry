export function account(state, action) {
  switch (action.type) {
    case "SET_ACCOUNT":
      return { ...state, account: action.payload };
    case "SET_KYC": 
      console.log({ ...state, kyc: !state.kyc});
      return { ...state, kyc: !state.kyc}
    case "SET_AMOUNT":
      return { ...state, amountToBuy: action.payload }
    case "SET_REMAINING_TKS": 
      console.log({ ...state, remainingTks: action.payload });
      return { ...state, kyc: !state.kyc}
    default:
      return state;
  }
}
