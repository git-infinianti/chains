/* source: 
    https://github.com/digibyte/digibyte/blob/9e4c0b3ddfd10a7ab852240ff716a7b93af89a07/src/chainparams.cpp
*/

import { Common, Network } from '../types';

const common: Common = {
  name: 'DigiByte',
  decimalPlaces: 1e8,
  unit: 'DGB',
};

const main: Network = {
  ...common,
  hashGenesisBlock:
    '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
  // nDefaultPort
  port: 12024,
  portRpc: 14022,
  protocol: {
    // pchMessageStart
    magic: 0xfac3b6da, // careful, sent over wire as little endian
  },
  bech32: 'dgb',
  // vSeeds
  seedsDns: ['seed.digibyte.io', 'digiexplorer.info', 'digihash.co'],
  // base58Prefixes
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 20,
    private: 0x80,
    public: 0x1e,
    scripthash: 0x3f, // new 'S' prefix
    scripthash2: 0x05, // old '3' prefix
  },
};

export const dgb = { main, test: null };
