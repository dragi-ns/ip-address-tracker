import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { IPInfoList } from './components/IPInfoList';
import { IPInfoItem } from './components/IPInfoItem';
import { Map } from './components/Map';
import { getIPInfo, processResponseData } from './client';
import { IPInfo } from './interfaces/IPInfo';

export default function App() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IPInfo | null>();
  const previousValue = useRef('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (value?: string) => {
    setIsLoading(true);
    const [data, error] = await getIPInfo(value);
    if (data) {
      const cleanData = processResponseData(data);
      setData(cleanData);
      setError('');

      if (value) {
        previousValue.current = value;
      }
    } else {
      setError('Please enter a valid IP address or domain!');
      console.error(error);
    }
    setIsLoading(false);
  };

  const handleSearch = (value: string) => {
    if (previousValue.current === value) {
      setError('');
      return;
    }
    fetchData(value);
  };

  return (
    <main className="flex flex-col min-h-full">
      {data ? (
        <>
          <Header>
            <SearchInput
              isLoading={isLoading}
              error={error}
              onHandleSearch={handleSearch}
            />
            <IPInfoList>
              <IPInfoItem label="IP Address" value={data.ip} />
              <IPInfoItem
                label="Location"
                value={`${data.city}, ${data.country} ${data.postalCode ?? ''}`}
              />
              <IPInfoItem label="Timezone" value={`UTC ${data.timezone}`} />
              <IPInfoItem label="ISP" value={data.isp} />
            </IPInfoList>
          </Header>
          <Map position={data.coords} />
        </>
      ) : (
        <div className="bg-gray-200 text-white grid place-content-center text-3xl absolute inset-0">
          Loading...
        </div>
      )}
    </main>
  );
}
