import ResultListCard from "../components/ResultListCard";


export default function ResultPage() {
  // // get school id
  // const schoolId = mySchoolId();

  // // fetch school info
  // const [data, setData] = useState();
  // const fetchData = async () => {
  //   const res = await getAllResults(schoolId)

  //   if(res.ok){
  //     const data = await res.json()
  //     setData(data.data)
  //   } else {
  //     console.log("Internal server error");
  //   }
  // }

  // useEffect(()=> {
  //   fetchData();
  // }, [])

  // console.log(data);

  // seo
  // const getSeoInfo = useSEOInfo();

  return (
    <>
      {/* seo start */}
      {/* <SEOPage title={`Result - ${getSeoInfo && getSeoInfo?.schoolInfo?.name_en}`} /> */}
      {/* seo end */}

      
      

      <main className="mt-2 mb-5">
      <div className="bg-lightBg px-5 py-10 text-center text-2xl font-bold">
            <h1>“ম্যানেজমেন্ট কমিটি”</h1>
          </div>

          <div className="w-full border-l border-t border-gray-300 border-dotted">
            <div className="grid grid-cols-12">
                <div className="col-span-2 p-2 border-r border-b border-gray-300 font-bold">ক্রমিক</div>
                <div className="col-span-8 p-2 border-r border-b border-gray-300 font-bold">ফলাফল</div>
                <div className="col-span-2 p-2 border-r border-b border-gray-300 font-bold">ডাউনলোড</div>
            </div>

            {/* {data && data?.map((item,i)=> <ResultListCard key={i} data={item} index={i} />)} */}
            <ResultListCard />
            <ResultListCard />
            <ResultListCard />
            <ResultListCard />
        </div>

      </main>
    </>
  );
}
