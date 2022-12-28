import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { NFTContext } from '../context/NFTContext';
import { NFTCard, Loader, Button } from '../components';
import { shortenAddress } from '../utils/shortenAddress';
import images from '../assets';

const NFTDetails = () => {
  const { currentAccount } = useContext(NFTContext);
  const [isLoading, setIsLoading] = useState(true);
  const [nft, setNft] = useState({ image: '', tokenId: '', name: '', owner: '', price: '', seller: '' });
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router.query);
  }, [router.isReady]);

  console.log(nft);

  return (
    <div className="relative flex justify-center md:flex-col min-h-screen">
      <div className="relative flex-1 flexCenter sm:px-4 p-12 border-r md:border-r-0 md:border-b dark:border-nft-black-1 border-nft-gray-1">
        <div className="relative w-557 minmd:2/3 minmd:h-2/3 sm:w-full sm:h-300 h-557">
          <Image
            src={nft.image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
