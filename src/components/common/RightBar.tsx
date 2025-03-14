import { Link } from "react-router-dom";

const RightBar = () => {
  const testData = [
    {
      img1: "https://imgs.search.brave.com/cOGlKsM2ir_8-IFclWuDH9HV6BHb1OfidRiXBWmhQzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/cGhnL3N0eWxlcy9j/b21tdW5pdHlJY29u/X3BzbDdtYzdpdzlh/ZDEucG5n",
      img2: "https://imgs.search.brave.com/x621Uq5D7SWrA-NmzO7urzYtGuGkDbZE72KqyvjJ200/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4UnF3SnVxSUwu/X0FDLl9TUjE4MCwy/MzAuanBn",
      name1: "Ecom test",
      name2: "This is the test to the product",
      data1: "12K upvotes",
      data2: "362 comment",
    },
    {
      img1: "https://imgs.search.brave.com/x621Uq5D7SWrA-NmzO7urzYtGuGkDbZE72KqyvjJ200/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDF4UnF3SnVxSUwu/X0FDLl9TUjE4MCwy/MzAuanBn",
      img2: "https://imgs.search.brave.com/cOGlKsM2ir_8-IFclWuDH9HV6BHb1OfidRiXBWmhQzw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzJx/cGhnL3N0eWxlcy9j/b21tdW5pdHlJY29u/X3BzbDdtYzdpdzlh/ZDEucG5n",
      name1: "New jacket",
      name2: "Hurry up new arrival",
      data1: "12K upvotes",
      data2: "362 comment",
    },
  ];

  const linkData = [
    {
      name: "Social Search",
      link: "socialSearch",
    },
    {
      name: "Privacy Policy",
      link: "privacyPolicy",
    },
    {
      name: "User Aggrement",
      link: "userAggrement",
    },
  ];

  return (
    <div className=" h-full fixed z-0">
      <div className=" flex flex-col gap-4 lg:w-[300px] xl:min-w-[400px] lg:mr-[100px] 2xl:mr-[300px] my-auto overflow-y-auto justify-between  top-0  z-0  h-full">
        <div className="mt-5 ">
          <div className="bg-gray-50 rounded-lg ">
            <p className=" text-lg p-5">Recent Post</p>

            {testData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between my-5  text-gray-600 p-5 border-t-[1px] border-gray-300"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <img
                        src={item.img1}
                        alt="img"
                        className="h-[20px] w-[20px] rounded-lg"
                      />
                      <span className="text-sm">{item.name1}</span>
                    </div>
                    <a href="#" className="my-3 font-medium hover:underline">
                      {item.name2}
                    </a>
                    <div className="flex space-x-1 text-xs mt-2">
                      <p className="">{item.data1}</p>
                      <p className="">{item.data2}</p>
                    </div>
                  </div>
                  <img
                    src={item.img2}
                    alt="img"
                    className="h-[50px] w-[50px] rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-30">
          <div className="flex items-start space-x-5">
            {linkData.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`block py-2  hover:text-gray-600 `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="block">Search, Inc. © 2025. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
