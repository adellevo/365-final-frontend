const TEST_ACCOUNT_ADDRESS_0 =
  "0x9ee9892d8600ed0bf65173d801ab75204a16ac2c6f190454a3b98f6bcb99d915";
const TEST_ACCOUNT_ADDRESS_1 = "0xba78c665ccef66de6e6ca1fd085a9a2e3e08ef65998df3f419a555e8039f3987";
const TEST_ACCOUNT_ID = "0";

const MOCK_WALLETS = [
  {
    address: TEST_ACCOUNT_ADDRESS_0,
    userId: TEST_ACCOUNT_ID,
    WalletId: TEST_ACCOUNT_ID,
    name: "Martian",
  },
  {
    address: TEST_ACCOUNT_ADDRESS_1,
    userId: TEST_ACCOUNT_ID,
    WalletId: 1,
    name: "Opto-Martian",
  },
];

const MOCK_ACCOUNT = {
  userId: 0,
  username: "mock-user",
  password: "pword",
};

export const MOCK_INFO = {
  TEST_ACCOUNT_ADDRESS_0,
  TEST_ACCOUNT_ID,
  MOCK_WALLETS,
  MOCK_ACCOUNT,
};
