import { IPFS } from 'ipfs-sdk';

const decentralizedDataStorage = {};

decentralizedDataStorage.storeData = async (data) => {
  const ipfs = await IPFS.create();
  const cid = await ipfs.add(data);
  return cid;
};

decentralizedDataStorage.retrieveData = async (cid) => {
  const ipfs = await IPFS.create();
  const data = await ipfs.get(cid);
  return data;
};

export default decentralizedDataStorage;
