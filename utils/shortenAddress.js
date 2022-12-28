export const shortenAddress = (address) => {
  if (!address) return null;
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};
