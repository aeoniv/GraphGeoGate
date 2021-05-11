export declare type MnemonicPhrase = string;
export declare type MnemonicPassword = string;
export interface Mnemonic {
    phrase: MnemonicPhrase;
    password?: MnemonicPassword;
}
export declare type PrivateKey = string;
export declare type Provider = any;
export declare type ProviderUrl = string;
export declare type ProviderOrUrl = Provider | ProviderUrl;
export declare type AddressIndex = number;
export declare type NumberOfAddresses = number;
export declare type PollingInterval = number;
export declare type ShareNonce = boolean;
export declare type DerivationPath = string;
